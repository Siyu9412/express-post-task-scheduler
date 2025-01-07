import { Prisma, PrismaClient } from "../../prisma/client";
import { IRecordFilter, ITaskFilter } from "../@types/task";
import { getRecordQueryConditions, getTasksQueryConditions } from "./filter";
import { tasks } from "../tasks";
import { scheduleTask } from "../scheduler";
import { ScheduleJobs } from "../scheduleJobs";

/**
 * CRUD tasks in the sqlite db file
 */
export class DB {
  private static instance: DB | undefined;

  /**
   * Create or get exist instance of this class
   */
  static init() {
    if (DB.instance === undefined) {
      const db = new DB();
      db.conn = new PrismaClient();
      DB.instance = db;
    }
    return DB.instance;
  }

  /**
   * Instance of PrismaClient
   */
  conn: PrismaClient | undefined;

  /**
   * Restore unfinished tasks from database if the program was terminated
   */
  async loadUnfinshedTasks() {
    const unfinishedTasks = await this.conn?.taskList.findMany({
      where: {
        executeTime: {
          gte: new Date(),
        },
        startTime: null,
        finishTime: null,
      },
    });
    if (unfinishedTasks && unfinishedTasks.length > 0) {
      for (const task of unfinishedTasks) {
        const executor = tasks.find(
          (_task) => _task.taskName === task.taskName
        )?.executor;
        if (executor) {
          scheduleTask(
            task.executeTime,
            JSON.parse(task.data),
            executor,
            task.id
          );
        }
      }
    }
  }

  /**
   * Write a new task info into the database
   * @param taskName For example: Count
   * @param taskDescription For example: Execute 3 arrow functions to print Count + index on the terminal
   * @param executeTime The returned formatted datetime string from scheduleTask, for example: "2024-12-30 17:00:00"
   */
  async createTask(
    taskName: string,
    taskDescription: string,
    executeTime: string,
    data: string
  ) {
    const newTask = await this.conn!.taskList.create({
      data: {
        taskName,
        taskDescription,
        executeTime: new Date(executeTime),
        data,
      },
    });
    return newTask;
  }

  /**
   * Mark a executing task as started
   * @param taskId The created task's id of method createTask
   */
  async startTask(taskId: number) {
    await this.conn!.taskList.update({
      where: {
        id: taskId,
      },
      data: {
        startTime: new Date(),
      },
    });
  }

  /**
   * Mark a executed task as finished
   * @param taskId The created task's id of method createTask
   */
  async finishTask(taskId: number) {
    await this.conn!.taskList.update({
      where: {
        id: taskId,
      },
      data: {
        finishTime: new Date(),
      },
    });
  }

  /**
   * Executing a task item successfully
   * @param taskId The primary key of a task
   * @param itemId The id of each item in the request body's data field
   * @param itemValue The stringified value of the item
   */
  async markItemSuccessful(taskId: number, itemId: string, itemValue: string) {
    await this.conn!.$executeRaw(Prisma.sql`
      INSERT INTO Records (itemId, taskId, taskValue, finishTime)
      VALUES (${itemId}, ${taskId}, ${itemValue}, ${Date.now()}); 
    `);
  }

  /**
   * Executing a task item failed
   * @param taskId The primary key of a task
   * @param itemId The id of each item in the request body's data field
   * @param itemValue The stringified value of the item
   */
  async markItemFailed(
    taskId: number,
    itemId: string,
    itemValue: string,
    errorMessage: string
  ) {
    await this.conn!.$executeRaw(Prisma.sql`
      INSERT INTO Records (itemId, taskId, itemValue, error, finishTime)
      VALUES (${itemId}, ${taskId}, ${itemValue} ${errorMessage}, ${Date.now()}); 
    `);
  }

  /**
   * To filter the task from database
   * @param filter The object consist of conditions, the example below shows the tasks finished during 2025-01-02
   * @example {"finish":  {"after": "2025-01-02", "before": "2025-01-03"}}
   */
  async getTasks(filter: ITaskFilter) {
    const conditions = getTasksQueryConditions(filter);
    const rows = await this.conn!.taskList.findMany({
      where: {
        ...conditions,
      },
      select: {
        id: true,
        taskName: true,
        taskDescription: true,
        executeTime: true,
        startTime: true,
        finishTime: true,
      },
    });
    return rows;
  }

  /**
   * To delete the task and all related records
   * @param taskId Primary key of a task record
   */
  async deleteTaskById(taskId: number) {
    return this.conn?.taskList.deleteMany({
      where: {
        id: taskId,
      },
    });
  }

  /**
   * To reschedule waiting state task
   * @param taskId Primary key of a task record
   * @param executeTime The new executeTime for reschedule task
   * @returns
   */
  async rescheduleTask(taskId: number, executeTime: Date) {
    let isSuccessful = false;
    const updatedTask = await this.conn!.taskList.update({
      where: {
        id: taskId,
      },
      data: {
        executeTime,
      },
      select: {
        id: true,
        taskName: true,
        taskDescription: true,
        executeTime: true,
        startTime: true,
        finishTime: true,
      },
    });
    if (updatedTask) {
      const jobs = ScheduleJobs.init();
      const rescheduleJob = jobs.jobList.find((job) => job.taskId === taskId);
      isSuccessful =
        rescheduleJob?.jobInstance.reschedule(executeTime) === true;
    }
    return {
      isSuccessful,
      updatedTask,
    };
  }

  /**
   * To filter the records from database
   * @param filter The object consist of conditions, the example below shows the records finished during 2025-01-02
   * @example {"finish":  {"after": "2025-01-02", "before": "2025-01-03"}}
   */
  async getRecords(filter: IRecordFilter) {
    const conditions = getRecordQueryConditions(filter);
    const rows = await this.conn!.records.findMany({
      where: {
        ...conditions,
      },
      select: {
        id: true,
        error: true,
        finishTime: true,
        itemId: true,
        itemValue: true,
        task: {
          select: {
            id: true,
            taskName: true,
            taskDescription: true,
          },
        },
      },
    });
    return rows;
  }
}

import { Router } from "express";
import { IRoutes } from "../@types/routes";
import { IExtendResponse } from "../@types/response";
import { StatusCodes } from "http-status-codes";
import { tasks } from "../tasks";
import { logger } from "../utils/logger";
import { DB } from "../utils/db";
import { dataValidator } from "../utils/data";
import { taskFilter } from "../utils/filter";
import dayjs from "dayjs";
import { timeConvertor } from "../utils/time";
import { ScheduleJobs } from "../scheduleJobs";
import { scheduleTask } from "../scheduler";

export const taskRoutes: Router = Router();
const db = DB.init();

// Schedule a task via post request
taskRoutes.post(IRoutes.task, async (req, _res) => {
  const { taskName, taskDescription, data, executeTime } = req.body;
  const res = _res as IExtendResponse;
  let errorMessage;

  const { isValid, error } = dataValidator(data);
  if (isValid) {
    const availableTasks = tasks.map((task) => task.taskName);
    if (availableTasks.includes(taskName)) {
      // Execotor function of a task, the param is the each item of data array
      const executor = tasks.find(
        (task) => task.taskName === taskName
      )!.executor;

      const { isValid, error, formattedTime, dayjsObject } =
        timeConvertor(executeTime);
      if (isValid) {
        try {
          // Write the created task into db
          const newTask = await db.createTask(
            taskName,
            taskDescription,
            formattedTime!,
            JSON.stringify(data)
          );
          scheduleTask(dayjsObject?.toDate()!, data, executor, newTask.id);
          logger.info(`[Task] ${formattedTime}`);
          res.jr({
            code: 200,
            message: `[Task] ${formattedTime}`,
          });
        } catch (e) {
          logger.error(e);
          res.jr({
            code: StatusCodes.BAD_REQUEST,
            message: `[Error] Store task failed, name: ${taskName}`,
          });
        }
      } else {
        errorMessage = `[Error] ${error}`;
        logger.error(errorMessage);
        res.jr({
          code: StatusCodes.BAD_REQUEST,
          error: errorMessage,
        });
      }
    } else {
      errorMessage = `[Error] Task not exists, name: ${taskName}`;
      logger.error(errorMessage);
      res.jr({
        code: StatusCodes.BAD_REQUEST,
        error: errorMessage,
      });
    }
  } else {
    logger.error(`[Error] error`);
    res.jr({
      code: StatusCodes.BAD_REQUEST,
      error: error,
    });
  }
});

// List tasks filtered by conditions
taskRoutes.get(IRoutes.task, async (req, _res) => {
  const res = _res as IExtendResponse;
  const filter = taskFilter(req.query?.filter?.toString() || "{}");
  const tasks = (await db.getTasks(filter)).map((task) => {
    return {
      ...task,
      executeTime: dayjs(task.executeTime).format("YYYY-MM-DD HH:mm:ss"),
      startTime: task.startTime
        ? dayjs(task.startTime).format("YYYY-MM-DD HH:mm:ss")
        : null,
      finishTime: task.finishTime
        ? dayjs(task.finishTime).format("YYYY-MM-DD HH:mm:ss")
        : null,
    };
  });
  res.jr({
    code: 200,
    data: tasks,
  });
});

// Delete task by id
taskRoutes.delete(IRoutes.task_id, async (req, _res) => {
  const res = _res as IExtendResponse;
  const id = parseInt(req.params.id);

  if (!isNaN(id)) {
    const db = DB.init();
    const jobs = ScheduleJobs.init();
    const deletedTask = await db.deleteTaskById(id);
    const activatedJob = jobs.jobList.find((job) => job.taskId === id);
    if (activatedJob) {
      activatedJob.jobInstance.cancel();
    }
    res.jr({
      code: 200,
      data: deletedTask,
    });
  } else {
    res.jr({
      code: StatusCodes.BAD_REQUEST,
      error: "Task id is incorrect",
    });
  }
});

// Reschedule waiting state task
taskRoutes.put(IRoutes.task, async (req, _res) => {
  let errorMessage;
  const res = _res as IExtendResponse;
  const { taskId, executeTime } = req.body;
  if (!isNaN(parseInt(taskId))) {
    const { isValid, error, dayjsObject, formattedTime } =
      timeConvertor(executeTime);
    if (isValid) {
      const rescheduleResult = await db.rescheduleTask(
        taskId,
        dayjsObject!.toDate()
      );
      if (rescheduleResult.isSuccessful) {
        logger.info(`[Reschedule] task: ${taskId}, time: ${formattedTime}`);
      }
      res.jr({
        code: 200,
        message: `Rescheduled task ${taskId}`,
        data: rescheduleResult,
      });
    } else {
      errorMessage = `[Error] ${error}`;
      logger.error(errorMessage);
      res.jr({
        code: StatusCodes.BAD_REQUEST,
        error: errorMessage,
      });
    }
  } else {
    errorMessage = `[Error] Incorrect task id`;
    logger.error(errorMessage);
    res.jr({
      code: StatusCodes.BAD_REQUEST,
      error: errorMessage,
    });
  }
});

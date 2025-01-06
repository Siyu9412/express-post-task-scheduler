import scheduler from "node-schedule";
import { ITaskDataItem } from "./@types/task";
import { ScheduleJobs } from "./scheduleJobs";
import { DB } from "./utils/db";
import { logger } from "./utils/logger";

/**
 * Schedule a task and wait for executing, return the job
 * @param date the date time to start task
 * @param data array with the params for task, for example: [{ id:1, value:1 }, { id:2, value:2 }, { id:3, value:3 }]
 * @param executor the callback function to execute, for example: (index: number) => { console.log(index) }
 */

export function scheduleTask(
  date: Date,
  data: ITaskDataItem[],
  executor: (...args: any[]) => any,
  taskId: number
) {
  const job = scheduler.scheduleJob(date, async () => {
    const db = DB.init();
    await db.startTask(taskId);

    for (const { id, value } of data) {
      try {
        await executor(value);
        await db.markItemSuccessful(taskId, id);
      } catch (e: any) {
        logger.error(e?.message);
        await db.markItemFailed(taskId, id, e?.message || "unknown error");
      }
    }
    await db.finishTask(taskId);
  });
  ScheduleJobs.appendJob(taskId, job, executor);
}

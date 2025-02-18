import { Job } from "node-schedule";
import { IJob } from "./@types/job";

/**
 * Store and control the generated schedule jobs from node-schedule
 */
export class ScheduleJobs {
  private static instance: ScheduleJobs | undefined = undefined;

  /**
   * The array to store jobs generated by node-schedule's scheduleJob method
   */
  jobList: IJob[] = [];

  /**
   * Create or get exist instance of the class
   */
  static init() {
    if (ScheduleJobs.instance === undefined) {
      const jobs = new ScheduleJobs();
      ScheduleJobs.instance = jobs;
    }
    return ScheduleJobs.instance;
  }

  /**
   * Push a new job inside the list from the params and returned instance of node-schedule's scheduler.scheduleJob
   * @param taskId
   * @param jobInstance
   * @param executor
   */
  static appendJob(
    taskId: number,
    jobInstance: Job,
    executor: (...args: any[]) => any
  ) {
    const jobs = ScheduleJobs.init();
    jobs.jobList.push({
      taskId,
      jobInstance,
      executor,
    });
  }
}

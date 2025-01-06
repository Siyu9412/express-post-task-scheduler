import { Job } from "node-schedule";

export type IJob = {
  taskId: number;
  executor: (...args: any[]) => any;
  jobInstance: Job;
};

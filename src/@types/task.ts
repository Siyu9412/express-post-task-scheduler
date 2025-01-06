export type ITask = {
  taskName: string;
  executor: (...args: any) => any;
};

export type ITaskDataItem = {
  id: string;
  value: any;
};

export type ITaskFilter = {
  status?: "waiting" | "executing" | "finished";
  taskName?: string;
  taskDescription?: string;
  execute?: ITimeRange;
  start?: ITimeRange;
  finish?: ITimeRange;
};

export type IRecordFilter = {
  taskName?: string;
  taskId?: number;
  status?: "successful" | "failed";
  finish?: ITimeRange;
};

export type ITimeRange = {
  after: string | undefined;
  before: string | undefined;
  at: string | undefined;
};

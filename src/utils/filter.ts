import { IRecordFilter, ITaskFilter, ITimeRange } from "../@types/task";
import { timeConvertor } from "./time";

/**
 * If execute | start | finish exists and the time format is valid, generate the object
 */
export function timeRangeObject(timeRange: any): ITimeRange | undefined {
  let after: string | undefined = undefined,
    before: string | undefined = undefined,
    at: string | undefined = undefined;

  // If after or before exists
  if (typeof timeRange?.after === "string") {
    const { isValid, formattedTime } = timeConvertor(timeRange.after, false);
    if (isValid) after = formattedTime;
  }
  if (typeof timeRange?.before === "string") {
    const { isValid, formattedTime } = timeConvertor(timeRange.before, false);
    if (isValid) before = formattedTime;
  }
  // If at exists, ignore after and before
  // Because of precision, at is converted to after and before
  if (typeof timeRange?.at === "string") {
    const { isValid, dayjsObject, formattedTime } = timeConvertor(
      timeRange.at,
      false
    );
    if (isValid) {
      after = formattedTime;
      before = dayjsObject?.add(1, "second").format("YYYY-MM-DD HH:mm:ss");
    }
  }

  if (after || before || at) {
    return { after, before, at };
  }
}

/**
 * Generate the filter object for getTasks method inside DB
 */
export function taskFilter(filter: string): ITaskFilter {
  const filterObject: ITaskFilter = {
    status: undefined,
    taskName: undefined,
    taskDescription: undefined,
    execute: undefined,
    start: undefined,
    finish: undefined,
  };

  try {
    const parsedFilter = JSON.parse(filter);
    // status
    if (
      ["waiting", "executing", "finished"].includes(
        parsedFilter?.status?.toLowerCase()
      )
    ) {
      filterObject.status = parsedFilter.status.toLowerCase();
    }
    // taskName
    if (typeof parsedFilter?.taskName === "string") {
      filterObject.taskName = parsedFilter.taskName;
    }
    // taskDescription
    if (typeof parsedFilter?.taskDescription === "string") {
      filterObject.taskDescription = parsedFilter.taskDescription;
    }
    // execute time range
    if (parsedFilter?.execute) {
      const executeTimeRange = timeRangeObject(parsedFilter.execute);
      if (executeTimeRange) {
        filterObject.execute = executeTimeRange;
      }
    }
    // start time range
    if (parsedFilter?.start) {
      const startTimeRange = timeRangeObject(parsedFilter.start);
      if (startTimeRange) {
        filterObject.start = startTimeRange;
      }
    }
    // finish time range
    if (parsedFilter?.finish) {
      const finishTimeRange = timeRangeObject(parsedFilter.finish);
      if (finishTimeRange) {
        filterObject.finish = finishTimeRange;
      }
    }
    return filterObject;
  } catch {
    return filterObject;
  }
}

/**
 * To generate the object fits Prisma query structure
 * @param filter The returned value of taskFilter
 */
export function getTasksQueryConditions(filter: ITaskFilter) {
  const executeTime = timeRangeObject(filter.execute);
  const startTime = timeRangeObject(filter.start);
  const finishTime = timeRangeObject(filter.finish);

  const conditions: any = {
    taskName: {
      contains: filter.taskName,
    },
    taskDescription: {
      contains: filter.taskDescription,
    },
  };

  const executeTimeConditions = [];
  const startTimeConditions = [];
  const finishTimeConditions = [];

  if (filter.status === "waiting") {
    executeTimeConditions.push({
      executeTime: {
        gt: new Date(),
      },
    });
  } else if (filter.status === "executing") {
    startTimeConditions.push({
      startTime: {
        lte: new Date(),
      },
      finishTime: null,
    });
  } else if (filter.status === "finished") {
    finishTimeConditions.push({
      finishTime: {
        lte: new Date(),
      },
    });
  }
  executeTimeConditions.push({
    executeTime: {
      gte: executeTime?.after ? new Date(executeTime.after) : undefined,
      lte: executeTime?.before ? new Date(executeTime.before) : undefined,
    },
  });
  startTimeConditions.push({
    startTime: {
      gte: startTime?.after ? new Date(startTime.after) : undefined,
      lte: startTime?.before ? new Date(startTime.before) : undefined,
    },
  });
  finishTimeConditions.push({
    finishTime: {
      gte: finishTime?.after ? new Date(finishTime.after) : undefined,
      lte: finishTime?.before ? new Date(finishTime.before) : undefined,
    },
  });
  conditions.AND = [
    ...executeTimeConditions,
    ...startTimeConditions,
    ...finishTimeConditions,
  ];
  return conditions;
}

/**
 * Generate the filter object for getTasks method inside DB
 */
export function recordFilter(filter: string): IRecordFilter {
  const filterObject: IRecordFilter = {
    status: undefined,
    taskName: undefined,
    taskId: undefined,
    finish: undefined,
  };

  try {
    const parsedFilter = JSON.parse(filter);
    // status
    if (
      ["successful", "failed"].includes(parsedFilter?.status?.toLowerCase())
    ) {
      filterObject.status = parsedFilter.status.toLowerCase();
    }
    // taskName
    if (typeof parsedFilter?.taskName === "string") {
      filterObject.taskName = parsedFilter.taskName;
    }
    // taskId
    if (typeof parsedFilter?.taskId === "number") {
      filterObject.taskId = parsedFilter.taskId;
    }
    // finish time range
    if (parsedFilter?.finish) {
      const finishTimeRange = timeRangeObject(parsedFilter.finish);
      if (finishTimeRange) {
        filterObject.finish = finishTimeRange;
      }
    }
    return filterObject;
  } catch {
    return filterObject;
  }
}

/**
 * To generate the object fits Prisma query structure
 * @param filter The returned value of taskFilter
 */
export function getRecordQueryConditions(filter: IRecordFilter) {
  const condition: any = {
    taskId: filter.taskId,
    task: {
      taskName: {
        contains: filter.taskName,
      },
    },
  };
  // status
  if (filter.status === "failed") {
    condition.error = {
      not: {
        equals: null,
      },
    };
  } else if (filter.status === "successful") {
    condition.error = {
      equals: null,
    };
  }
  // finish
  const finishTime = timeRangeObject(filter.finish);
  if (finishTime) {
    condition.finishTime = {
      gte: finishTime.after ? new Date(finishTime.after) : undefined,
      lte: finishTime.before ? new Date(finishTime.before) : undefined,
    };
  }
  return condition;
}

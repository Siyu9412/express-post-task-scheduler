import express, { Router, Request, Response, NextFunction } from "express";
import { config } from "dotenv";
import { taskRoutes } from "./routes/task";
import { jsonResponse } from "./middleware/jsonResponse";
import { secretGuard } from "./middleware/secretGuard";
import { tasks as _tasks } from "./tasks";
import { ITask } from "./@types/task";
import { DB } from "./utils/db";
import { recordRoutes } from "./routes/record";
config();

/**
 * To return the instance includes endpoint for schedule tasks and secret validate middleware
 * @param route The prefix of express route, default value is /scheduler
 */
export function postTaskScheduler(route = "/scheduler") {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      const router = Router();
      DB.init().loadUnfinshedTasks();
      // Register Middleware
      router.use(express.json());
      router.use(jsonResponse);
      router.use(secretGuard);
      router.use(route, taskRoutes);
      router.use(route, recordRoutes);

      router(req, res, next);
    } catch (e) {
      next(e);
    }
  };
}

/**
 * To prepare available tasks
 * @param tasks The task name and executor
 * @example
 * setTasks([{
 *   taskName: "Count",
 *   executor: async (index) => console.log(`Count: ${index}`),
 * }]);
 */
export function setTasks(tasks: ITask[]) {
  _tasks.push(...tasks);
}

export { DB };

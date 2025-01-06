import { Router } from "express";
import { IRoutes } from "../@types/routes";
import { IExtendResponse } from "../@types/response";
import { recordFilter } from "../utils/filter";
import { DB } from "../utils/db";
import dayjs from "dayjs";

export const recordRoutes: Router = Router();
const db = DB.init();

// Filter the records related to task
recordRoutes.get(IRoutes.record, async (req, _res) => {
  const res = _res as IExtendResponse;
  const filter = recordFilter(req.query?.filter?.toString() || "{}");
  const records = (await db.getRecords(filter)).map((record) => {
    return {
      ...record,
      finishTime: dayjs(record.finishTime).format("YYYY-MM-DD HH:mm:ss"),
    };
  });
  res.jr({
    code: 200,
    data: records,
  });
});

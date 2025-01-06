import { postTaskScheduler, setTasks } from "../dist/esm";
import express from "express";

const app = express();
app.use(postTaskScheduler());

setTasks([
  {
    taskName: "Count",
    executor: async (index) => console.log(`Count: ${index}`),
  },
]);

app.listen(3000, () => {
  console.log(`Server is running at http://localhost:3000`);
});

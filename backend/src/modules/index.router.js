import connectDb from "../../DB/connection.js";
import todoRouter from "./todos/todo.router.js";
import cors from "cors";

const initApp = async (app, express) => {
  const corsOptions = {
    origin: "*",
    optionsSuccessStatus: 200,
  };
  connectDb();
  app.use(cors(corsOptions));
  app.use(express.json());
  app.use("/todos", todoRouter);
};

export default initApp;

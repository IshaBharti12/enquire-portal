import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./db/connectDB.js";
import adminRouter from "./routes/admin.routes.js";
import queryRouter from "./routes/query.routes.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/admin", adminRouter);
app.use("/query", queryRouter);

connectDB();

const port = 3000;
app.listen(port, (req, res) => {
  console.log(`Server is Running on ${port} Number`);
});

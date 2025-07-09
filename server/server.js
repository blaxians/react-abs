import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import appRouter from "./routes/api/auth/auth.js";

dotenv.config();

const appInstance = express();
const PORT = process.env.APP_PORT || 5010;

appInstance.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

appInstance.use(cookieParser());
appInstance.use(express.json());
appInstance.use(express.urlencoded({ extended: true }));

appInstance.use("/api/auth", appRouter);

appInstance.get("/", (_req, res) => {
  res.send("🚀 Server is alive");
});

appInstance.listen(PORT, () => {
  console.log(`✅ Express server running at http://localhost:${PORT}`);
});

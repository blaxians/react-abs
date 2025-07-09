import express from "express";
import AuthController from "../../../controllers/api/AuthController.js";

const authController = new AuthController();
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.use((req, res, next) => {
  console.log(`[${req.method}] ${req.originalUrl}`);
  next();
});

router.post("/login", authController.login);
router.get("/verifyToken", authController.verifyTokenController);
router.get("/logout", authController.logoutController);

router.get("*", (_req, res) => {
  res.status(404).json({
    success: false,
    message: "",
    data: null,
    error: {
      code: 404,
      message: "Page not found!",
    },
  });
});

export default router;

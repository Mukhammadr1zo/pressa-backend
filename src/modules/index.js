import { Router } from "express";
import authRouter from "./auth/router.js";
import adminRouter from "./admin/router.js";
import publishRouter from "./publish/router.js";


const router = Router();

router.use("/auth", authRouter);
router.use("/admin", adminRouter);
router.use("/posts", publishRouter);

export default router

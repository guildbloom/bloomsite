import { Router } from "express";
import { authenticatedRequest } from "./middleware/authenticatedRequest";
import authRoute from "./controllers/authController";
import userRoute from "./controllers/userController";
import guildRoute from "./controllers/guildController";

const router = Router();

router.use(authRoute);
router.use(authenticatedRequest(), userRoute);
router.use(authenticatedRequest(), guildRoute);

export default router;

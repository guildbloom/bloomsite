import { Router } from "express";
import { authenticatedRequest } from "./middleware/authenticatedRequest";
import authController from "./controllers/authController";
import userController from "./controllers/userController";
import guildController from "./controllers/guildController";
import fundingController from "./controllers/fundingController";

const router = Router();

router.use(authController);
router.use(authenticatedRequest(), userController);
router.use(authenticatedRequest(), guildController);
router.use(authenticatedRequest(), fundingController);

export default router;

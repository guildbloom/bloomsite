import { Router } from "express";
import { paginateCollection } from "../middleware/paginateCollection";

const router = Router();

router.get("/guilds", paginateCollection("guilds"));

export default router;

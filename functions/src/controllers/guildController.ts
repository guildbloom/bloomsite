import { Router } from "express";
import { listGuilds } from "../store/guilds";
import { store } from "../app";
import { paginateCollection } from "../middleware/paginateCollection";

const router = Router();

router.get("/guilds", paginateCollection("guilds"));

export default router;

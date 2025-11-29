import { Router } from "express";
import { getBills } from "../controllers/Bill";

const router = Router();

router.post('/bills', getBills);

export default router;
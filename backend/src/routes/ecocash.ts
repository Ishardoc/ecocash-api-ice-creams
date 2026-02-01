import { Router } from "express";
import { handleEcocashCallback } from "../controllers/handleCallbacks";

const router = Router();

router.post('/api/ecocash/callback', handleEcocashCallback)

export default router;
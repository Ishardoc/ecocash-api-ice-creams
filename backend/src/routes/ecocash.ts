import { Router } from "express";
import { handleEcocashCallback } from "../controllers/handleCallbacks";

const router = Router();

router.post('/payments/eco-callback', handleEcocashCallback)

export default router;
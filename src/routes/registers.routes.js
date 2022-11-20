import { Router } from "express";
import { insertRegister, getRegisters } from "../controllers/registers.controller.js";
import { registerSchemaValidation } from "../middlewares/registerSchemaValidation.middleware.js";

const router = Router();

router.post("/register", registerSchemaValidation, insertRegister);
router.get("/register", getRegisters);

export default router;
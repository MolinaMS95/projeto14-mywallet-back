import { Router } from "express";
import { insertRegister, getRegisters } from "../controllers/registers.controllers.js";
import { registerSchemaValidation } from "../middlewares/registerSchemaValidation.middleware.js";
import { userTokenValidation } from "../middlewares/userTokenValidation.middleware.js";

const router = Router();

router.get("/registers", userTokenValidation, getRegisters);
router.post("/registers", registerSchemaValidation, userTokenValidation, insertRegister);

export default router;
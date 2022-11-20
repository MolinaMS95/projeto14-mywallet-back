import { Router } from "express";
import { signUp, signIn } from "../controllers/users.controller.js";
import { userSchemaValidation } from "../middlewares/userSchemaValidation.middleware.js";
import { signInValidation } from "../middlewares/signInValidation.middleware.js";
import { userExistsValidation } from "../middlewares/userExistsValidation.middleware";

const router = Router();

router.post("/signup", userSchemaValidation, userExistsValidation, signUp);
router.post("/login", signInValidation, signIn);

export default router;

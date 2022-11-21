import { registerSchema } from "../models/register.model.js";

export function registerSchemaValidation(req, res, next) {
  const register = req.body;

  const { error } = registerSchema.validate(register, { abortEarly: false });

  if (error) {
    const errors = error.details.map((detail) => detail.message);
    return res.status(400).send(errors);
  }

  res.locals.register = register;

  next();
}
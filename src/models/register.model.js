import joi from "joi";

export const registerSchema = joi.object({
  description: joi.string().required().max(25),
  value: joi.number().required(),
  type: joi.string().valid("entrada", "saida").required(),
});

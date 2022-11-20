import joi from "joi";

export const postsSchema = joi.object({
  description: joi.string().required(),
  value: joi.number().required(),
  type: joi.string().valid("entrada", "saida").required(),
});
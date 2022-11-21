import { usersCollection } from "../database/db.js";


export async function userExistsValidation(req, res, next) {
  const { email } = res.locals.user;

  const userExists = await usersCollection.findOne({ email });
  if (userExists) {
    return res.sendStatus(409);
  }

  next();
}
import { usersCollection } from "../database/db";


export async function userExistsValidation(req, res, next) {
  const { email } = req.user;

  const userExists = await usersCollection.findOne({ email });
  if (userExists) {
    return res.sendStatus(409);
  }

  res.locals.user = userExists;

  next();
}
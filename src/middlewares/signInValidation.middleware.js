import { usersCollection } from "../database/db.js";
import bcrypt from "bcrypt";

export async function signInValidation(req, res, next) {
  const { email, password } = req.body;

  const userExists = await usersCollection.findOne({ email });
  if (!userExists) {
    return res.sendStatus(401);
  }

  const passwordOk = bcrypt.compareSync(password, userExists.password);
  if (!passwordOk) {
    return res.sendStatus(401);
  }

  res.locals.user = userExists;

  next();
}

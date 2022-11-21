import { usersCollection, sessionsCollection } from "../database/db.js";
import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";
import { ObjectId } from "mongodb";

export async function signUp(req, res) {
  const user = res.locals.user;
  const hashPassword = bcrypt.hashSync(user.password, 10);
  try {
    await usersCollection.insertOne({ ...user, password: hashPassword });
    res.sendStatus(201);
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

export async function signIn(req, res) {
  const user = res.locals.user;
  const token = uuidV4();

  try {
    const sessionExists = await sessionsCollection.findOne({ userId: new ObjectId(user._id) });
    if (sessionExists) {
      await sessionsCollection.deleteOne({ userId: new ObjectId(user._id) });
    }
    await sessionsCollection.insertOne({ token, userId: user._id});
    res.send({token, name: user.name});
  } catch (err) {
    console.log(err);
    res.sendStatus(500);
  }
}

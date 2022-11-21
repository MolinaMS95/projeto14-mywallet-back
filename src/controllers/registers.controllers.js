import { registersColletction } from "../database/db.js";
import { ObjectId } from "mongodb";
import dayjs from "dayjs";

export async function insertRegister(req, res) {
  const user = res.locals.user;
  const register = res.locals.register;

  try {
    await registersColletction.insertOne({
      ...register,
      date: dayjs().format("DD/MM"),
      userId: user.userId,
    });
    return res.sendStatus(201);
  } catch (err) {
    res.sendStatus(500);
  }
}

export async function getRegisters(req, res) {
  const user = res.locals.user;

  try {
    const registers = await registersColletction
      .find({ userId: new ObjectId(user.userId) })
      .toArray();
    res.send(registers);
  } catch (err) {
    res.sendStatus(500);
  }
}

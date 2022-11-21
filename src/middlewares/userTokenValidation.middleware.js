import { sessionsCollection } from "../database/db.js";

export async function userTokenValidation(req, res, next) {
    const { authorization } = req.headers;

    const token = authorization?.replace("Bearer ", "");
    if (!token) {
      return res.sendStatus(401);
    }

    const userSession = await sessionsCollection.findOne({token});
    if (!userSession) {
        return res.sendStatus(401);
    }

    res.locals.user = userSession;

    next();
  }
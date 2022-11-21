import express from "express";
import cors from "cors";
import usersRouters from "./routes/users.routes.js";
import registersRouters from "./routes/registers.routes.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(usersRouters);
app.use(registersRouters);

app.listen(5000);

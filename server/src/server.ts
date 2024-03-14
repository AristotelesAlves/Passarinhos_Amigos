import Express from "express";
import cors from "cors";
import { routerUsers } from "./routers/routerUsers";

const app = Express();

app.use(Express.json());
app.use(cors());
app.use(routerUsers);
app.listen((8080), () => console.log('Servidor rodando na porta 8080'))

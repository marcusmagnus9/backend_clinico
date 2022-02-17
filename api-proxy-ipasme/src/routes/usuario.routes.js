import { Router } from "express";
const router = Router();
import * as user from "../controllers/usuario.ctrl";
import * as auth from "../controllers/auth.controller";

    router.post("/", user.crearUsuario);
    router.post("/login", auth.loginUsuario);
  
export default router;
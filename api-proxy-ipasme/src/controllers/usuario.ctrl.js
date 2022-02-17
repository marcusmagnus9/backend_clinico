import { getConnection } from "../data/low.config";
import { v4 } from "uuid";
import bcrypt from "bcryptjs";


export const crearUsuario = async (req, res) => {
    const salt = await bcrypt.genSalt(10);  
    const newUser = {
        id: v4(),
        usuario: req.body.usuario,
        password: await bcrypt.hash(req.body.password, salt),
        roles: req.body.roles,
    };  
    try {
      getConnection().get("Users").push(newUser).write();  
      res.json(newUser);
    } catch (error) {
      return res.status(500).send(error);
    }
};
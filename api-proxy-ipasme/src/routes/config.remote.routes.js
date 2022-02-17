import { Router } from "express";
const router = Router();
import { authJwt } from "../middlewares";
import * as configCtrl from "../controllers/config.remote.controller";

router.post('/',[authJwt.verifyToken, authJwt.isAdmin], configCtrl.crearIpasme);
router.get('/',[authJwt.verifyToken, authJwt.isAdmin], configCtrl.obtenerIpasme);
router.get('/:id',[authJwt.verifyToken, authJwt.isAdmin], configCtrl.obtenerIpasmeId);
router.put('/:id',[authJwt.verifyToken, authJwt.isAdmin], configCtrl.actualizarIpasmeId);
router.delete('/:id',[authJwt.verifyToken, authJwt.isAdmin], configCtrl.borrarIpasmeId);

export default router;


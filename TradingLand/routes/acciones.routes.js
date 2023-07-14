import { Router } from "express";
import { obtenerAcciones,agregarAcciones,borrarAcciones,actualizarAcciones } from "../controllers/acciones.controllers.js";

const router = Router();

router.get("/",obtenerAcciones);
router.post("/",agregarAcciones);
router.delete("/:id",borrarAcciones);
router.put("/:id",actualizarAcciones)

export default router;
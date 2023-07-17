import { Router } from "express";
import { getAcciones,addAcciones,deleteAcciones,getAccion,updAcciones } from "../controller/acciones.controller.js";

const router = Router();

router.get("/",getAcciones);
router.post("/add",addAcciones);
router.delete("/del/:id",deleteAcciones);
router.get("/:id",getAccion);
router.put("/upd/:id",updAcciones)

export default router;
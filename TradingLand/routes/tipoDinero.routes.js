import { Router } from "express";
import { getTipo,addTipo,delTipo,updTipo, getOne } from "../controller/tipoDinero.controller.js";

const router = Router();

router.get("/",getTipo);
router.post("/",addTipo);
router.delete("/:id",delTipo);
router.put("/:id",updTipo);
router.get("/:id",getOne);

export default router;
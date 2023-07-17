import { Router } from "express";
import { getTipoDinero,addTipoDinero,deleteTipoDinero,getOneTipoDinero,updTipoDinero } from "../controller/tipoDinero.controller.js";

const router = Router();

router.get("/",getTipoDinero);
router.post("/add",addTipoDinero);
router.delete("/del/:id",deleteTipoDinero);
router.get("/:id",getOneTipoDinero);
router.put("/upd/:id",updTipoDinero);

export default router;
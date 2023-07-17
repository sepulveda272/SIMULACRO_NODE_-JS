import TipoDinero from "../models/tipoDinero.js";

const getTipoDinero = async (req,res)=>{
    try {
        const tipoDinero = await TipoDinero.find();
        res.send(tipoDinero);
    } catch (error) {
        res.status(404);
        res.send({error:"no funcionaaaaa"})
    }
}

const addTipoDinero = async (req,res)=>{
    const tipoDinero = new TipoDinero(req.body);
    try {
        const nuevo = await tipoDinero.save();
        res.send(nuevo)
    } catch (error) {
        res.status(404);
        res.send({error:"no funcionaaaaa"})
    }
}

const deleteTipoDinero = async (req,res)=>{
    try {
        const dato = await TipoDinero.deleteOne({_id:req.params.id})
        res.send(dato)
    } catch (error) {
        res.status(404);
        res.send({error:"no funcionaaaaa"})
    }
}
const getOneTipoDinero = async (req,res)=>{
    try {
        const dato = await TipoDinero.findOne({_id:req.params.id})
        res.send(dato); 
    } catch (error) {
        res.status(404);
        res.send({error:"no funcionaaaaa"})
    }
}

const updTipoDinero = async (req,res)=>{
    try {
        const dato = await TipoDinero.findOne({_id:req.params.id});
        if(req.body.tipo){
            dato.tipo=req.body.tipo;
        }
        await dato.save();
        res.send(dato)
    } catch (error) {
        res.status(404);
        res.send({error:"no funcionaaaaa"})
    }
}


export {
    getTipoDinero,
    addTipoDinero,
    deleteTipoDinero,
    getOneTipoDinero,
    updTipoDinero
}
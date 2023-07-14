import TipoDinero from "../models/tipoDinero.js";

const getTipo = async (req,res)=>{
    try {
        const tipoDinero = await TipoDinero.find();
        res.send(tipoDinero);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"})
    }
}

const addTipo = async (req,res)=>{
    const tipoDinero = new TipoDinero(req.body);
    try {
        const nuevo = await tipoDinero.save();
        res.send(nuevo)
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"})
    }
}

const delTipo = async (req,res)=>{
    try {
        const dato = await TipoDinero.deleteOne({_id:req.params.id})
        res.send(dato)
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"})
    }
}

const getOne = async (req,res)=>{
    try {
        const dato = await TipoDinero.findOne({_id:req.params.id})
        res.send(dato); 
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"})
    }
}

const updTipo = async (req,res)=>{
    try {
        const dato = await TipoDinero.findOne({_id:req.params.id});
        if(req.body.tipo){
            dato.tipo=req.body.tipo;
        }
        await dato.save();
        res.send(dato)
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"})
    }
}


export {
    getTipo,
    addTipo,
    delTipo,
    updTipo,
    getOne
}
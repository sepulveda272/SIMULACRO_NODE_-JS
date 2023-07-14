import Acciones from "../models/acciones.js";

const getDato = async (req,res)=>{
    try {
        const accion = await Acciones.find();
        res.send(accion);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const addDato = async (req,res)=>{
    const accion = await Acciones(req.body);
    try {
        const nuevo = await accion.save();
        res.send(nuevo);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const delDato = async (req,res)=>{
    try {
        const accion = await Acciones.deleteOne({_id:req.params.id})
        res.send(accion);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const getOne = async (req,res)=>{
    try {
        const accion = await Acciones.findOne({_id:req.params.id});
        res.send(accion);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const updOne = async (req,res)=>{
    try {
        const accion = await Acciones.findOne({_id:req.params.id});
        if(req.body.nombre){
            accion.nombre = req.body.nombre
        }
        if(req.body.valor){
            accion.valor = req.body.valor
        }
        if(req.body.cantidad){
            accion.cantidad = req.body.cantidad
        }
        await accion.save();
        res.send(accion);

    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

export{
    getDato,
    addDato,
    delDato,
    getOne,
    updOne
}
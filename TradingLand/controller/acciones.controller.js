import Acciones from "../models/acciones.js";

const getAcciones = async (req,res)=>{
    try {
        const accion = await Acciones.find();
        res.send(accion);
    } catch (error) {
        res.status(404);
        res.send({error:"no funcionaaa"});
    }
}

const addAcciones = async (req,res)=>{
    const accion = await Acciones(req.body);
    try {
        const nuevo = await accion.save();
        res.send(nuevo);
    } catch (error) {
        res.status(404);
        res.send({error:"no funcionaaa"});
    }
}

const deleteAcciones = async (req,res)=>{
    try {
        const accion = await Acciones.deleteOne({_id:req.params.id})
        res.send(accion);
    } catch (error) {
        res.status(404);
        res.send({error:"no funcionaaa"});
    }
}

const getAccion = async (req,res)=>{
    try {
        const accion = await Acciones.findOne({_id:req.params.id});
        res.send(accion);
    } catch (error) {
        res.status(404);
        res.send({error:"no funcionaaa"});
    }
}

const updAcciones = async (req,res)=>{
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
        res.send({error:"no funcionaaa"});
    }
}

export{
    getAcciones,
    addAcciones,
    deleteAcciones,
    getAccion,
    updAcciones
}
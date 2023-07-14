import Dinero from "../models/dinero.js";

const getDato = async (req,res)=>{
    try {
        const dinero = await Dinero.find();
        res.send(dinero);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const addDato = async (req,res)=>{
    const dinero = await Dinero(req.body);
    try {
        const nuevo = await dinero.save();
        res.send(nuevo);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const delDato = async (req,res)=>{
    try {
        const dinero = await Dinero.deleteOne({_id:req.params.id})
        res.send(dinero);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const getOne = async (req,res)=>{
    try {
        const dinero = await Dinero.findOne({_id:req.params.id});
        res.send(dinero);
    } catch (error) {
        res.status(404);
        res.send({error:"No funca"});
    }
}

const updOne = async (req,res)=>{
    try {
        const dinero = await Dinero.findOne({_id:req.params.id});
        if(req.body.nombre){
            dinero.nombre = req.body.nombre
        }
        if(req.body.precio){
            dinero.precio = req.body.precio
        }
        if(req.body.cantidad){
            dinero.cantidad = req.body.cantidad
        }
        await dinero.save();
        res.send(dinero);

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
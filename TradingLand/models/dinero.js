import mongoose from "mongoose";

const dineroSchema = mongoose.Schema({
    nombre:{
        type:String,
        required:true,
        trim:true
    },
    precio:{
        type:String,
        required:true,
        trim:true
    },
    cantidad:{
        type:String,
        required:true,
        trim:true
    }
},
{
    timestamps: true
});

const Dinero = mongoose.model('dinero',dineroSchema,'dinero');

export default Dinero;
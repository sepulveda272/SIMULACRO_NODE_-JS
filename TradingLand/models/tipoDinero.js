import mongoose from "mongoose";

const tipoDineroSchema = mongoose.Schema({
    tipo:{
        type:String,
        required:true,
        trim:true
    }
},
{
timestamps: true
})

const TipoDinero = mongoose.model('tipoDinero',tipoDineroSchema,'tipoDinero');

export default TipoDinero;
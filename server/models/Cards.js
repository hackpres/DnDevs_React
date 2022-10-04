import { Schema, model } from "mongoose";

const cardSchema = new Schema(
{
    name:{
        type: String,
        required: true,
        unique: true,
    },
    description:{
        type: String,
        required: true,
    },
    active:{
        type: Boolean,
    },
   
},

{

    toJSON:{
        virtuals: true,
    }
}


);

const Cards = model('Cards', cardSchema);

export default Cards;
const { Schema, model } = require('mongoose');

const imageSchema = new Schema({
  idleImg: {
    type: String,
    required: true,
  },
  attackImg: {
    type: String,
    required: true,
  },
  takeHitImg: {
    type: String,
    required: true,
  },
  deathImg: {
    type: String,
    required: true,
  },
});


const bossSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        attack: {
            type: Number,
            required: true,
            validate: {
                validator: Number.isInteger,
            },
        },
        heal: {
            type: Number,
            required: true,
            validate: {
                validator: Number.isInteger,
            },
        },
        health: {
            type: Number,
            required: true,
            default: 100,
            validate: {
                validator: Number.isInteger,
            },
        },
        idle:{
          type: String,
          required: true,
        },
        death: {
          type: String,
          required: true
        },
        idlePixel:{
          type: String,
          require: true
        },
        deathPixel:{
          type: String,
          require: true
        }
    },
    // {
    //     toJSON: {
    //         virtuals: true,
    //     },
    // }
);

 

const Bosses = model("Bosses", bossSchema);

module.exports = Bosses;
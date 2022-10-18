const { Schema, model } = require('mongoose');

const cardSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    modifier:{
      type: String,
      required: true,
    },
    value:{
      type: Number,
      required: true,
    },
    value2:{
      type: Number,
      required: false
    },
    codeSnippet:{
      type: String,
      required: true
    },
    shopDescription:{
      type: String,
      required: true
    }
  
  },

  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  // }
);

const Cards = model("Cards", cardSchema);

module.exports = Cards;

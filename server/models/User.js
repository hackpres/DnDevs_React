const { Schema, model } = require('mongoose');
const cardSchema = require('./Cards');
const bcrypt = require('bcryptjs');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    attack:{
        type: Number
    },
    defense:{
        type: Number
    },
    health:{
        type:Number,
        default: 100,
    },
    savedCards: [cardSchema], 
  },
  // {
  //   toJSON: {
  //     virtuals: true,
  //   },
  // }
);

userSchema.pre('save', async function (next){
    if (this.isNew || this.isModified('password')){
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }
    next();
});

userSchema.methods.isCorrectPassword = async function (password){
    return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
const { Schema, model } = require('mongoose');
const cardSchema = require('./Cards');
const bcrypt = require('bcryptjs');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: [3, 'Must be at least 3 characters long']
    },
    password: {
      type: String,
      required: true,
      validate: {
        validator: function(v) {
          return /^(?=.*\d{1})(?=.*[a-z]{1})(?=.*[A-Z]{1})(?=.*[!@#$%^&*{|}?~_=+.-]{1})(?=.*[^a-zA-Z0-9])(?!.*\s).{8,32}$/.test(v);
        },
        message: props => `${props.value} is not a valid password!`
      },
      required: [true, 'Password required']
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
    gender:{
      type: String
    },
    avatar: {
      type: String
    },
    wins:{
      type: Number,
      default: 0
    },
    losses:{
      type: Number,
      default: 0
    },
    savedCards: [], 
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
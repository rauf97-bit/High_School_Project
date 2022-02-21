import mongoose from 'mongoose'
// Schema Model for Database
const userSchema = mongoose.Schema({
  name: { 
    type : String,
    required : [true, 'Please fill out your name']
  },
  email : {
    type : String,
    required : true,
    unique : true
  },
  password : {
    type : String,
    required : true
  }
}, {
  timestamps : true
})

export const User = mongoose.model('User', userSchema)
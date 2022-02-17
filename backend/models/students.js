import mongoose from 'mongoose'
// Schema Model for Database
const studentSchema = mongoose.Schema({
  name: { 
    type : String,
    required : [true, 'Please fill out required fields']
  },
  class : {
    type : String,
    required : true
  },
  major : {
    type : String,
    required : true
  }
}, {
  timestamps : true
})

export const Students = mongoose.model('Students', studentSchema)
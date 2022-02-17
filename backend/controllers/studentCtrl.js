import asyncHandler from 'express-async-handler'
import { Students } from '../models/students.js'


const getStd = asyncHandler( async( req, res) => {
  const std = await Students.find({})
  res.status(200).json(std)
})
const postStd = asyncHandler( async ( req, res) => {
  
  if(!req.body.name || !req.body.class || !req.body.major ){
    res.status(400)
    throw new Error('Please Include Input Fields ') 
  }
  const std = await Students.create({
    name : req.body.name,
    class : req.body.class,
    major : req.body.major,
  })
  res.status(200).json(std)
  
})
const deleteStd = asyncHandler( async ( req, res) => {
  const std = await Students.findById(req.params.id)
  if (!std) {
    res.status(400)
    throw new Error('User not Found')
  }
  await std.remove()
  res.status(200).json(req.params.id)
})
const updateStd = asyncHandler( async ( req, res) => {
  const std = await Students.findById(req.params.id)
  if (!std) {
    res.status(400)
    throw new Error('User not Found')
  }
  const updatedStd = await Students.findByIdAndUpdate(req.params.id, req.body, {new : true})

  res.status(200).json(updatedStd)
})

export {
  getStd,
  postStd,
  deleteStd,
  updateStd
};

import express from 'express'
import {
  getStd,
  postStd,
  deleteStd,
  updateStd } from '../controllers/studentCtrl.js'
const router = express.Router()

router.route('/').get(getStd).post(postStd)

router.route('/:id').delete(deleteStd).put(updateStd)


export default router
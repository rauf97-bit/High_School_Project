import express from 'express'
import {
  getUser,
  registerUser,
  loginUser
} from '../controllers/userCtrl.js'

  // Instantiate Express router
const router = express.Router()

router.route('/').post(registerUser)
router.route('/me').get(getUser)
router.route('/login').post(loginUser)


export default router
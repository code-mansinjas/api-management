import { Router, Response } from 'express'
const router = Router()
import AuthController from '../controller/auth'

router.post('/login',AuthController.login)

export default router
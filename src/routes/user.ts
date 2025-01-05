import { Router, Response } from 'express'
const router = Router()

import userController from '../controller/user'

router.get('/', userController.get);

router.post('/', userController.add)

router.put('/:id', userController.updateById)

router.delete('/:id', userController.deleteById);

router.put('/restore/:id', userController.deleteById);

router.post('/login', userController.login)

export default router
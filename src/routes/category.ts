import { Router, Response } from 'express'
const router = Router()

import categoryController from '../controller/category'

router.get('/', categoryController.get);

router.post('/', categoryController.add)

router.post('/bulk-create', categoryController.addBulk)

router.put('/:id', categoryController.updateById)

router.delete('/:id', categoryController.deleteById);

router.put('/restore/:id', categoryController.deleteById);

export default router
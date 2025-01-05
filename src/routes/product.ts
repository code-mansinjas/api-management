import { Router, Response } from 'express'
const router = Router()

import productController from '../controller/product'

router.get('/', productController.get);

router.post('/', productController.add)

router.post('/bulk-create', productController.addBulk)

router.put('/:id', productController.updateById)

router.delete('/:id', productController.deleteById);

router.put('/restore/:id', productController.deleteById);

export default router
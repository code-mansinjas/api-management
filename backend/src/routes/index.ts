import { Router } from 'express'
import userRoute from './user'
import productRoute from './product'
import categoryRoute from './category'

const router = Router()

router.use('/user', userRoute);
router.use('/category', categoryRoute);
router.use('/product', productRoute);

export default router
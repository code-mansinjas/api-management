import { Router } from 'express'
import userRoute from './user'
import productRoute from './product'
import categoryRoute from './category'
import authRoute from './auth'

const router = Router()

router.use('/user', userRoute);
router.use('/category', categoryRoute);
router.use('/product', productRoute);
router.use('/auth', authRoute);

export default router
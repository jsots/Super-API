import { Router } from 'express'
import characterRoutes from './character.js'
import userRoutes from './user.js'

const router = Router()

router.get('/', (req, res) => res.send('This is the api root!'))

router.use('/', characterRoutes)
router.use('/', userRoutes)

export default router

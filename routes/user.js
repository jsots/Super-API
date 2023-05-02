import { Router } from 'express'
import * as controllers from '../controllers/user.js'

const router = Router()

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)
router.get('/verify', controllers.verify)
router.get('/account/:username', controllers.oneUser)
router.get('/usernames', controllers.getAllUsernames);
router.delete("/users", controllers.deleteAllUsers);
router.delete("/users/:username", controllers.deleteUserByUsername);

// router.post('/change-password', controllers.changePassword)

export default router



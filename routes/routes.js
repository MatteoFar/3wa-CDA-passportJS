import express from 'express'
import home from '../controllers/home.js'
import login from '../controllers/login.js'
import passport from 'passport'
import logged from '../controllers/logged.js'
import secureRoute from '../middleware/secureRoute.js'

const router = express.Router()

router.get("/", home)
router.get("/logged", secureRoute,logged) 
router.post("/login", passport.authenticate("local",{
    successRedirect: '/logged',
    failureRedirect: '/'
  }))

router.post('/auth/facebook', passport.authenticate('facebook'))

export default router
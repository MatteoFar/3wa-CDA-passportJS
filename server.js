import express from "express";
import dotenv from "dotenv"
import router from "./routes/routes.js";
import passport from "passport";
import session from "express-session";
import initializePassport from "./passport-config.js";
import initializePassportFacebook from "./passport-facebook-config.js";

initializePassport() //for basic login

initializePassportFacebook() // for facebook login

dotenv.config()

const app = express()
const PORT = 8001

app.use(express.urlencoded({extended: false}))

app.use(session({ 
    secret: "your secret line of secretness"
 }));

app.use(passport.initialize());
app.use(passport.session());

app.use("/",router)

app.use((req,res) => {
    res.status(404).send("Erreur, page introuvable")
})

app.listen(PORT, () => {
    console.log(`Express server listening on http://localhost:${PORT}`)
})
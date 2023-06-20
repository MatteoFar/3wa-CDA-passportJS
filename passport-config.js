import express from "express"
import passport from "passport"
import LocalStrategy from "passport-local"
import crypto from "node:crypto"
import { fileURLToPath } from "node:url"
import path from "node:path"
import fs from "fs"

export default function initializePassport() {
    const __dirname = path.dirname(fileURLToPath(import.meta.url))

    passport.use(new LocalStrategy({        
        usernameField: "username",
        passwordField: "password"
    },
    function (username, password, done) {
        const userFile = path.join(__dirname, ".", "data", "users.json")
        const users = JSON.parse(fs.readFileSync(userFile, "utf-8"))

        console.log(username, password)

        const m = users.filter((e) => e.username === username)

        if(m.length === 0) {
            console.log("utilisateur introuvable !")
            return done(null, false, { message: "User does not exist"});
        } 
        if(m[0].password !== password) {
            console.log("Mot de pass incorrect !")
            return done(null, false, { message: "password is not valid"});
        }

        return done(null, true)
    }
    ))

    passport.serializeUser(function(user, done) {
        done(null, user);
      });
      
    passport.deserializeUser(function(user, done) {
        done(null, user);
      });
}


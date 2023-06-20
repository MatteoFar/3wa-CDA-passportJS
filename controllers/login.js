import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default function login(req, res) {
    try {
        const userFile = path.join(__dirname, "..", "data", "users.json")
        const users = JSON.parse(fs.readFileSync(userFile, "utf-8"))

        console.log(req.body)
        console.log(users)

        res.status(200).send("test")
    } catch (error) {
        console.log(error)
        res.status(500).send("Error")
    }
}
import express from "express";
import cors from "cors"
import "dotenv/config"

const app = express()
app.use(cors("*"))
app.use(express.json())

const PORT = process.env.PORT

app.get("/", (req, res) => {
    res.json({message:"Hello world"})
})

app.listen(PORT, () => {
    console.log(`*************SERVER IS RUNNING AT http://localhost:${PORT}****************`)
})
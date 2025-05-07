//config the .env file 
import "./config/env.config.js"

import express from "express"

export const app = express()

//connect the database
import "./config/mongodb.config.js"
import cors from "cors"
import { DATA_LIMIT } from "./constant.js" 
import cookieParser from "cookie-parser"

const api = process.env.API_URL || '/api/v1'

app.use(cors())

app.use(express.json({ limit: DATA_LIMIT }));
app.use(express.urlencoded({ extended: true, limit: DATA_LIMIT }));
app.use(express.static('public'));
app.use(cookieParser());




app.get('/', (req, res) => {
    res.send('Hello World!')
})

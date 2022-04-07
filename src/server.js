import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import initWebRoutes from './route/web';
import connectDB from './config/connectDB';
require('dotenv').config();

let app = express();

//config app

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

viewEngine(app);
initWebRoutes(app);
connectDB(app);

const server = require('http').createServer();
let port = process.env.PORT || 8000;
//Port === undefined => port = 6969

app.listen(port, () => {
    //callback
    console.log("Hotel Management is runing on the port : " + port)
})

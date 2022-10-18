import express from "express";
import {readFileSync} from "fs";
import bodyParser from 'body-parser';
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const loginRouter = express.Router();

loginRouter.get('/', (req, res) => {
    const html = readFileSync("./public/login.html", "utf8")
    res.end(html)
});

loginRouter.post('/', urlencodedParser, (req, res) => {
    console.log(req.body)
    res.end('hello')

})

export {loginRouter};
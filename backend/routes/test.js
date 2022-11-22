import express from "express";
import {readFileSync} from "fs";
import bodyParser from 'body-parser';
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const testRouter = express.Router();

testRouter.get('/', (req, res) => {
    console.log(req.cookies)
    const html = readFileSync("./public/index.html", "utf8")
    res.end(html)
});

export {testRouter};
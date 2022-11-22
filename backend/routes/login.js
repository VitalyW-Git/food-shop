import express from "express";
import {readFileSync} from "fs";
import bodyParser from 'body-parser';
import {createToken} from '../utilits/jwt.js'
import jwtConfig from '../config/jwt.js'
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const loginRouter = express.Router();

loginRouter.get('/', (req, res) => {
    const html = readFileSync("./backend/assets/login.html", "utf8")
    res.end(html)
});

loginRouter.post('/', urlencodedParser, (req, res) => {

    const token = createToken({ id: req.body.password });
    res.cookie('refreshToken', token,{
        httpOnly: true,
        secure: true,
        maxAge: 3600,
        path: '/'
    });
    res.redirect('/')
})

export {loginRouter};
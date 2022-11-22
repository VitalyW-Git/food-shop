import express from "express";
import {readFileSync} from "fs";
import bodyParser from 'body-parser';
import {createToken} from '../utilits/jwt.js'
import jwtConfig from '../config/jwt.js'
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const registrationRouter = express.Router();

registrationRouter.get('/', (req, res) => {
    const html = readFileSync("./backend/assets/registration.html", "utf8")
    res.end(html)
});

registrationRouter.post('/', urlencodedParser, (req, res) => {

    const token = createToken({ id: req.body.password });
    res.cookie('refreshToken', token,{
        httpOnly: true,
        secure: true,
        maxAge: 3600,
        path: '/'
    });
    res.redirect('/')
})

export {registrationRouter};
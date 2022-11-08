import express from "express";
import {readFileSync} from "fs";
import bodyParser from 'body-parser';
import {createToken} from '../utilits/jwt.js'
import jwtConfig from '../config/jwt.js'
const urlencodedParser = bodyParser.urlencoded({ extended: false })

const loginRouter = express.Router();

loginRouter.get('/', (req, res) => {
    const html = readFileSync("./public/registration.html", "utf8")
    res.end(html)
});

loginRouter.post('/', urlencodedParser, (req, res) => {

    const token = createToken({ id: req.body.password });

    res.cookie('refreshToken', token,{
        httpOnly: true,
        secure: true,
        maxAge: 3600,
        path: '/test'
    });

    res.redirect('/test')

    // const object = res.json({
    //     access_token: token,
    //     token_type: 'Bearer',
    //     expires_in: jwtConfig.ttl
    // });

})

export {loginRouter};
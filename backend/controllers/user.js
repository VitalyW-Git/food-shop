import {insertUser, checkUser} from '../models/user.js';
import {createToken} from '../utilits/jwt.js'

export function createUser(req, res, next) {
    const {name, email, password} = req.body

    const token = createToken({ password });

    insertUser(name, email, password, token)
        .then(user => {
            res.json(user)
        })
        .catch(err => {
            console.log(`При создании записи ошибка на стороне сервера: ${err.message}!`)
            res.status(500).send(err.message)
        })
}
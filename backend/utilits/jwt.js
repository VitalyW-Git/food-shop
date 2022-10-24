import jwt from 'jsonwebtoken';
import jwtConfig from '../config/jwt.js';

const createToken = data => jwt.sign(data, jwtConfig.secret, { expiresIn: jwtConfig.ttl });

export {createToken}
const jwt = require('express-jwt');

function authJwt() {
  const secret = process.env.secret || 'asdasdjklans';
  const api = process.env.API_URL;
  return jwt
    .expressjwt({
      secret,
      algorithms: ['HS256'],
    })
    .unless({
      path: [`/users/login`, `/users/register`],
    });
}

module.exports = authJwt;

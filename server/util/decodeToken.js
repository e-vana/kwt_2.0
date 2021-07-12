const jwt = require('jsonwebtoken');


const decodeToken = async function(token){
  var tokenBearer = token;
  var split = tokenBearer.split(' ');
  var token = split[1];

  var decoded = await jwt.verify(token, process.env.JWT_SECRET);
  return decoded.username;
}

module.exports = decodeToken;
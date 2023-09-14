var jwt = require('jsonwebtoken');
var dotenv = require('dotenv');

dotenv.config()
const SECRET = process.env.SECRET;

exports.auth = async (req, res) => {
    try {
        const token = req.headers.token
        const isCustomAuth = token.length < 500 

        let decodeData;

        //If token is custom token do this
        if(token && isCustomAuth) {
            decodeData = jwt.verify(token, SECRET)

            req.userId = decodeData?.id

        } else {
            //Else of token is google token then do this
            decodeData = jwt.decode(token)

            req.userId = decodeData?.sub
        }

        return true;
    } catch (error) {
        console.log(error)
    }
    return false;
}


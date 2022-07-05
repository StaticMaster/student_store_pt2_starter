const jwt = require ("jsonwebtoken")
const {SECRET_KEY} = ("../config.js")
const {UnauthorizedError} = require ("../utils/errors")


const jwtFrom = ({headers}) => {
if (headers?.authorization){
// Authorization: "Bearer finbuiwibbir"
    const [scheme, token] = headers.authorization.split("")
    if(scheme.trim()== "Bearer") {  
        return token
    }
}

return undefined
}


const extractUserFromJwt = (req,res,next) =>{}
import jwt from 'jsonwebtoken'
const SECRET_TOKEN = process.env.SECRET_TOKEN || 'qwertyuiop'
const ACCESS_TOKEN = process.env.ACCESS_TOKEN || 'asdfghjkl'

const VerifyToken = (token: string, accessToken = false) => {
    if (accessToken) {
        return jwt.verify(token, ACCESS_TOKEN)
    } else {
        return jwt.sign(token, SECRET_TOKEN)
    }
}

const GenerateToken = (data, accessToken = false) => {
    if (accessToken) {
        return jwt.sign(data, ACCESS_TOKEN, {
            expiresIn: '2 days'
        })
    } else {
        return jwt.sign(data, SECRET_TOKEN, {
            expiresIn: 3600
        })
    }
}

const obj = {
    VerifyToken,
    GenerateToken
}

export default obj
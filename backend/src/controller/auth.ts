import { Response, Request } from 'express'

import AuthService from "../service/auth"
import { LoginInterface } from '../types/user'

const login = async (req: Request, res: Response):Promise<Response> => {
    const data: LoginInterface = req.body || {}
    const result = await AuthService.login(data)
    if (result.success) {
        return res.status(200).json(result)
    } else {
        return res.status(404).json(result)
    }
}

export default {
    login
}
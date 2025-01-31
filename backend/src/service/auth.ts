import AuthService from '../service/category'
import GlobalResponse from '../types/response'
import { LoginInterface, SignUpInterface } from '../types/user'

const login = async ({email, password, phone}:LoginInterface): Promise<GlobalResponse> => {
    return { success: true }
}

const signUp = async ({ email, firstName, lastName, password, phone }: SignUpInterface): Promise<GlobalResponse> => {

    return { success: true }
}

export default {
    login
}
import User from '../models/user'
import GlobalResponse from '../types/response'
import UserAttributes from '../types/user'
import { Op } from 'sequelize'
import * as bcrypt from 'bcrypt'
import JWT from '../../utils/jwt'


const get = async (): Promise<GlobalResponse> => {
    const result = await User.findAll()
    const resultCount = await User.count()
    if (result && result.length) {
        return { success: true, data: result, totalCount: resultCount }
    } else {
        return { success: false, data: result, totalCount: resultCount }
    }
}

const add = async (data: Partial<UserAttributes>): Promise<GlobalResponse> => {
    const result = await User.create(data)
    if (result) {
        return { success: true, data: result }
    } else {
        return { success: false, data: result }
    }
}

const updateById = async (id: number, data: Partial<UserAttributes>): Promise<GlobalResponse> => {
    const result = await User.update(data, {
        where: { id }
    })
    if (result && result[0] == 1) {
        return { success: true }
    } else {
        return { success: false }
    }

}

const deleteById = async (id: number): Promise<GlobalResponse> => {
    const result = await User.destroy({ where: { id } })
    if (result) {
        return { success: true }
    } else {
        return { success: false }
    }
}

const restoreById = async (id: number): Promise<GlobalResponse> => {
    const result = await User.restore({ where: { id } })
    return { success: true }
}

const login = async ({ email = undefined, phone = undefined, password }): Promise<GlobalResponse> => {
    const whereOption = { email, phone }
    if (!(email || phone)) {
        return { success: false, message: "Invalid Email and Phone Number" }
    }
    if (!email) { delete whereOption.email }
    if (!phone) { delete whereOption.phone }

    const result = await User.findOne({
        where: {
            [Op.or]: whereOption
        }
    })
    if (!result) {
        return { success: false, message: "User Not Found" }
    }
    if (!(bcrypt.compareSync(password,result.password()))) {
        return { success: false, message: "User Authentication Failed" }
    }
    const { email:tokenEmail,firstName,id,lastName,phone:tokenPhone } = result.dataValues
    const tokenData = {email:tokenEmail, firstName, id, lastName, phone: tokenPhone}
    const accessToken = JWT.GenerateToken(tokenData)
    const refreshToken = JWT.GenerateToken(tokenData, true)
   
    return {
        success: true,
        message: "User Logged In",
        data: {
            accessToken,
            refreshToken
        }

    }

}

export default {
    get, add, updateById, deleteById, restoreById, login
}
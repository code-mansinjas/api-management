import { Response, Request } from 'express'
import userService from '../service/user'

const get = async (req: Request, res: Response): Promise<Response> => {
    const result = await userService.get()
    if (result.success) {
        return res.status(200).json(result)
    } else {
        return res.status(404).json(result)
    }
}

const add = async (req: Request, res: Response): Promise<Response> => {
    const result = await userService.add(req.body)
    if (result.success) {
        return res.status(201).json(result)
    } else {
        return res.status(404).json(result)
    }
}

const updateById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const result = await userService.updateById(+id, req.body)
    if (result.success) {
        return res.status(200).json(result)
    } else {
        return res.status(404).json(result)
    }

}

const deleteById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const result = await userService.deleteById(+id)
    if (result.success) {
        return res.status(204).json(result)
    } else {
        return res.status(404).json(result)
    }
}

const restoreById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const result = await userService.restoreById(+id)
    if (result.success) {
        return res.status(200).json(result)
    } else {
        return res.status(404).json(result)
    }
}

const login = async (req: Request, res: Response): Promise<Response> => {
    const { email, phone, password } = req.body;
    const result = await userService.login({ email, phone, password })
    if (result.success) {
        return res.status(200).json(result)
    } else {
        return res.status(404).json(result)
    }
}

export default {
    get, add, updateById, deleteById, restoreById, login
}
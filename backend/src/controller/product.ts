import { Response, Request } from 'express'
import productService from '../service/product'

const get = async (req: Request, res: Response): Promise<Response> => {
    const result = await productService.get(req)
    if (result.success) {
        return res.status(200).json(result)
    } else {
        return res.status(404).json(result)
    }
}

const add = async (req: Request, res: Response): Promise<Response> => {
    const result = await productService.add(req.body)
    if (result.success) {
        return res.status(201).json(result)
    } else {
        return res.status(404).json(result)
    }
}

const addBulk = async (req: Request, res: Response) : Promise<Response> => {
    const result = await productService.addBulk(req.body)
    if (result.success) {
        return res.status(201).json(result)
    } else {
        return res.status(404).json(result)
    }
}

const updateById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const result = await productService.updateById(+id, req.body)
    if (result.success) {
        return res.status(200).json(result)
    } else {
        return res.status(404).json(result)
    }

}

const deleteById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const result = await productService.deleteById(+id)
    if (result.success) {
        return res.status(204).json(result)
    } else {
        return res.status(404).json(result)
    }
}

const restoreById = async (req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const result = await productService.restoreById(+id)
    if (result.success) {
        return res.status(200).json(result)
    } else {
        return res.status(404).json(result)
    }
}

export default {
    get, add, updateById, deleteById, restoreById, addBulk
}
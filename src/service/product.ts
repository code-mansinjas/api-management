import Product from '../models/product'
import GlobalResponse from '../types/response'
import ProductAttributes from '../types/product'
import Category from '../models/category'
import { Response, Request } from 'express'
import { QueryExtractor } from "../utils/helper"

const get = async (req: Request): Promise<GlobalResponse> => {
    const { include, ...rest } = QueryExtractor(req)
    const result = await Product.findAll({
        ...include([
            {
                model: Category,
                as: 'category_data'
            }
        ]),
        ...rest
    })
    const resultCount = await Product.count({})
    if (result && result.length) {
        return { success: true, data: result, totalCount: resultCount }
    } else {
        return { success: false, data: result, totalCount: resultCount }
    }
}

const add = async (data: Partial<ProductAttributes>): Promise<GlobalResponse> => {
    const result = await Product.create(data)
    if (result) {
        return { success: true, data: result }
    } else {
        return { success: false, data: result }
    }
}

const addBulk = async (data: Partial<ProductAttributes>[]): Promise<GlobalResponse> => {
    const result = await Product.bulkCreate(data)
    if (result && result.length) {
        return { success: true, data: result }
    } else {
        return { success: false, data: result }
    }
}

const updateById = async (id: number, data: Partial<ProductAttributes>): Promise<GlobalResponse> => {
    const result = await Product.update(data, {
        where: { id }
    })
    if (result && result[0] == 1) {
        return { success: true }
    } else {
        return { success: false }
    }
}

const deleteById = async (id: number): Promise<GlobalResponse> => {
    const result = await Product.destroy({ where: { id } })
    if (result) {
        return { success: true }
    } else {
        return { success: false }
    }
}

const restoreById = async (id: number): Promise<GlobalResponse> => {
    const result = await Product.restore({ where: { id } })
    return { success: true }
}

export default {
    get, add, updateById, deleteById, restoreById, addBulk
}
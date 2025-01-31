import Category from '../models/category'
import GlobalResponse from '../types/response'
import CategoryAttributes from '../types/category'
import { Response, Request } from 'express'
import { QueryExtractor } from '../utils/helper'
import Product from '../models/product'

const get = async (req: Request): Promise<GlobalResponse> => {
    const { include, ...rest } = QueryExtractor(req)
    
    const result = await Category.findAll({
        ...include([
            {
                model: Product,
                as: 'product_data'
            }
        ]),
        ...rest
    })
    const resultCount = await Category.count()
    if (result && result.length) {
        return { success: true, data: result, totalCount: resultCount }
    } else {
        return { success: false, data: result, totalCount: resultCount }
    }
}

const add = async (data: Partial<CategoryAttributes>): Promise<GlobalResponse> => {
    const result = await Category.create(data)
    if (result) {
        return { success: true, data: result }
    } else {
        return { success: false, data: result }
    }
}

const addBulk = async (data: Partial<CategoryAttributes>[]): Promise<GlobalResponse> => {
    const result = await Category.bulkCreate(data)
    if (result && result.length) {
        return { success: true, data: result }
    } else {
        return { success: false, data: result }
    }
}

const updateById = async (id: number, data: Partial<CategoryAttributes>): Promise<GlobalResponse> => {
    const result = await Category.update(data, {
        where: { id }
    })
    if (result && result[0] == 1) {
        return { success: true }
    } else {
        return { success: false }
    }
}

const deleteById = async (id: number): Promise<GlobalResponse> => {
    const result = await Category.destroy({ where: { id } })
    if (result) {
        return { success: true }
    } else {
        return { success: false }
    }
}

const restoreById = async (id: number): Promise<GlobalResponse> => {
    const result = await Category.restore({ where: { id } })
    return { success: true }
}

export default {
    get, add, updateById, deleteById, restoreById, addBulk
}
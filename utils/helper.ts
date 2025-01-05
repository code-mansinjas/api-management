import { Response, Request } from 'express'
import { Includeable } from 'sequelize';

export const QueryExtractor = (req: Request) => {
    const { page = 1, limit = 10, field = "", include = false } = req.query || {};


    const offset = Number(Number(limit) * (Number(page) - 1));
    const attributes = field.toString().split(",").map(str => str.trim())

    const IncludeFun = (obj: Array<any>) => {
        if(!include){
            return {}
        }
        return {
            include: obj
        }
    }

    const res = {
        include: IncludeFun,
        limit: Number(limit),
        offset,
        attributes
    }

    if(!field){
        delete res.attributes
    }

    return res 
}
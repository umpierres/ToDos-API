import { NextFunction,Request,Response } from "express";

export function validateTitleNote(req:Request, res: Response, next: NextFunction){
    const {title} = req.query

    if(title && typeof title !== 'string') {
        return res
			.status(400)
			.json({success: false, message: 'Filtro invalido.' });
    }
}
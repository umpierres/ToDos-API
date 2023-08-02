import { NextFunction,Request,Response } from "express";
import { UpdateNoteDTO } from "../../usecases";

export function validateUpdateNote(req:Request, res: Response, next: NextFunction){
    const note: UpdateNoteDTO = req.body;

	if (!note.description || !note.title) {
		return res
			.status(400)
			.json({ message: 'Insira todos os dados para atualizar a nota.' });
	}


	next();
}
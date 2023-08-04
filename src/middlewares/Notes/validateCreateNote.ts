import { NextFunction,Request,Response } from "express";
import { CreateNoteDTO } from "../../usecases";

export function validateCreateNote(req:Request, res: Response, next: NextFunction){
    const note: CreateNoteDTO = req.body;

	if (!note.description || !note.title || !note.owner || !note.archived || !note.favorite) {
		return res
			.status(400)
			.json({ message: 'Insira todos os dados para criar a nota.' });
	}


	next();
}
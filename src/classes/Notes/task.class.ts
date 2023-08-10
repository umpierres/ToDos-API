import { BaseClass } from "../BaseClass/baseClass.class";
import { User, UserJSON } from "../User/user.class";
import { Response } from "express";

type updateNoteDTO = {
	title?: string,
	description?: string,
    favorite?: boolean, 
	archived?: boolean, 
    date: Date, 
}

export type NoteJSON = {
    id: string
    title:string,
    description: string,
    favorite: boolean,
    archived: boolean,
    date: Date, 
    owner: Omit<UserJSON, 'password'>,
}

export class Note extends BaseClass {
    
    private _date: Date
	constructor(
        private _title: string,
		private _description: string,
		private _favorite: boolean = false,
		private _archived: boolean = false,
		private _owner: Omit<User, 'password'>,
        ) {
		super();
        this._date = new Date()
	}


	public toJSON() {
		return {
			id: this._id,
			title: this._title,
			description: this._description,
            favorite: this._favorite, 
			archived: this._archived, 
            date: this._date, 
            owner:{
				id: this._owner.toJSON().id,
				email: this._owner.toJSON().email,
			},
		};
	}

    public updateNote(newInfo: updateNoteDTO, res: Response) {
        if(newInfo.title) {
            if(newInfo.title.length < 3) {
                return res
                .status(400)
                .json({ success: false, message: 'O titulo é muito curto.' });
            }
            this._title = newInfo.title
        }
        if(newInfo.description) {
            if(newInfo.description.length < 3 || newInfo.description.length > 100) {
                return res
                .status(400)
                .json({success: false, message: 'A descrição é muito curta ou muito longa.' });
            }
            this._description = newInfo.description
        }
        if(newInfo.archived) {
            this._archived = newInfo.archived
        }
        if(newInfo.favorite) {
            this._favorite = newInfo.favorite
        }
        if(newInfo.date) {
            this._date = newInfo.date
        }
        return res
        .status(200)
        .json({success: true, message: 'Nota atualizada com sucesso!' });
    }
}
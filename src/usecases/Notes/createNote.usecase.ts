import { Note, User } from '../../classes';
import { NoteRepository } from '../../repositories';

export type NoteDTO = {
    title:string,
    description: string,
    owner: User,
    favorite: boolean,
    archived: boolean,
}

export type ReturnCreate = {
	success: boolean;
	message: string;
	data?: Note 
};

export class CreateNote{
    execute(data: NoteDTO): ReturnCreate{
        const repository = new NoteRepository();

        const newNote = repository.createNote(data)

        return {
            success:true,
            message: "Nota cadastrado com sucesso.",
            data: newNote,
        }
    }
}
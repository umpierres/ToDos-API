import { Note, User } from '../../classes';
import { NoteRepository } from '../../repositories';

export type CreateNoteDTO = {
    title:string,
    description: string,
    owner: User,
    favorite: boolean,
    archived: boolean,
}

export type ReturnCreateNote = {
	success: boolean;
	message: string;
	data?: Note 
};

export class CreateNote{
    execute(data: CreateNoteDTO): ReturnCreateNote{
        const repository = new NoteRepository();

        const newNote = repository.createNote(data)

        return {
            success:true,
            message: "Nota cadastrado com sucesso.",
            data: newNote,
        }
    }
}
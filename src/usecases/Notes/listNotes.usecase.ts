import { Note } from '../../classes';
import { NoteRepository } from '../../repositories';

export type ReturnList = {
    success: boolean;
	message: string;
	data?: Note[];
};

export class ListNotes {
    execute(owner: string): ReturnList {
        const repository = new NoteRepository();
        const currentUserNotes = repository.listNotes(owner);

        return{
			success: true,
			message: "Nota cadastrada com sucesso",
            data: currentUserNotes
    }
        
    }
}

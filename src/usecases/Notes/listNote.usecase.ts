import { Note, User } from '../../classes';
import { NoteRepository } from '../../repositories';

export type ReturnList = {
    success: boolean;
    message: string;
    data?: Note[];
};

export class ListNotes {
    execute(owner: User): ReturnList {
        const repository = new NoteRepository();

        const notes = repository.listNotes(owner);

        return {
            success: true,
            message: "Notas encontradas com sucesso.",
            data: notes,
        };
    }
}

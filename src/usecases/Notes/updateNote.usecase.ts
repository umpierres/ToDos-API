import { Note, User } from '../../classes';
import { NoteRepository } from '../../repositories';
import { NoteDTO } from './createNote.usecase';

export type ReturnUpdate = {
    success: boolean;
    message: string;
    data?: Note;
};

export class UpdateNote {
    execute(id: string, data: NoteDTO): ReturnUpdate {
        const repository = new NoteRepository();

        const updatedNote = repository.updateNote(id, data);

        return {
            success: true,
            message: "Nota atualizada com sucesso.",
            data: updatedNote,
        };
    }
}
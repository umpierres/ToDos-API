import { Note } from '../../classes';
import { NoteRepository } from '../../repositories';

export type UpdateNoteDTO = {
    title:string,
    description: string,
}

export type ReturnUpdate = {
    success: boolean;
    message: string;
    data?: Note;
};

export class UpdateNote {
    execute(id: string, data: UpdateNoteDTO): ReturnUpdate {
        const repository = new NoteRepository();

        const updatedNote = repository.updateNote(id, data);

        return {
            success: true,
            message: "Nota atualizada com sucesso.",
            data: updatedNote,
        };
    }
}
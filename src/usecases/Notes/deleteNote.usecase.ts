import { Note } from '../../classes';
import { NoteRepository } from '../../repositories';

export type ReturnDelete = {
    success: boolean;
    message: string;
    data?: Note;
};

export class DeleteNote {
    execute(id: string): ReturnDelete {
        const repository = new NoteRepository();

        const deletedNote = repository.deleteNote(id);

        return {
            success: true,
            message: "Nota excluída com sucesso.",
            data: deletedNote,
        };
    }
}

import { NoteRepository } from '../../repositories';

export type ReturnDelete = {
    success: boolean;
    message: string;
}

export class DeleteNote {
    execute(id: string): ReturnDelete {
        const repository = new NoteRepository();

      repository.deleteNote(id);

        return {
            success: true,
            message: "Nota excluída com sucesso.",

        };
    }
}

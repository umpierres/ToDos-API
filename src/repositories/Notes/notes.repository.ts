import { notes } from '../../database';
import { Note, NoteJSON, User } from '../../classes';
import { UpdateNoteDTO } from '../../usecases';

// separar as filtragens, desse jeito não tá legal


export type CreateNoteDTO = {
    title:string,
    description: string,
    favorite: boolean,
    archived: boolean,
    owner: Omit<User, 'password'>,
}

export type Filter = {
    title?: string;
    favorite?: boolean;
    archived?: boolean;
}

export class NoteRepository {
    //ok
    createNote(dados: CreateNoteDTO) : Note {
            const note = new Note(dados.title, dados.description, dados.favorite, dados.archived, dados.owner);
            notes.push(note);
            
            return note;
    }
    //ok
    listNotes(ownerID: string, filter?:Filter) : NoteJSON[] {
        return notes
        .filter((note) => {
            const { owner, title, archived, favorite} = note.toJSON();
            if (filter) {
                if (
                    (filter.title && title !== filter.title) ||
                    (filter.archived !== undefined && archived !== filter.archived) ||
                    (filter.favorite !== undefined && favorite !== filter.favorite)
                ) {
                    return false;
                }
            }

            return owner.id === ownerID;
        })
        .map((n) => n.toJSON());
    }

    updateNote(id: string, dados: UpdateNoteDTO) {
        const noteIndex = notes.findIndex((note) => note.toJSON().id === id);
    
        if (noteIndex === -1) {
            throw new Error("Nota não encontrada.");
        }
        return notes[noteIndex]
    }

    //ok
    deleteNote(id: string) {
        const noteIndex = notes.findIndex((note) => note.toJSON().id === id);

        if (noteIndex === -1) {
            throw new Error("Nota não encontrada.");
        }

       notes.splice(noteIndex, 1)[0];
    }

}

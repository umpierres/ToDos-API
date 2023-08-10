import { notes } from '../../database';
import { Note, NoteJSON, User } from '../../classes';
import { UpdateNoteDTO } from '../../usecases';

export type CreateNoteDTO = {
    title:string,
    description: string,
    favorite: boolean,
    archived: boolean,
    owner: Omit<User, 'password'>,
}

export class NoteRepository {
    //ok
    createNote(dados: CreateNoteDTO) : Note {
            const note = new Note(dados.title, dados.description, dados.favorite, dados.archived, dados.owner);
            notes.push(note);
            
            return note;
    }
    //ok
    listNotes(ownerID: string) : NoteJSON[] {
        return notes.filter((note) => note.toJSON().owner.id === ownerID).map((n) => n.toJSON());
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

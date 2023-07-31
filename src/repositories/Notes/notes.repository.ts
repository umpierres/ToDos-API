import { notes } from '../../database';
import { Note, User } from '../../classes';
import { NoteDTO } from '../../usecases';

export class NoteRepository {
    listNotes(owner: User) {
        const currentUserNotes = notes.filter((note) => note.toJson().owner === owner);

        return currentUserNotes;
    }

    createNote(dados: NoteDTO) {
        const note = new Note(dados.title, dados.description, dados.owner, dados.archived, dados.favorite);

        notes.push(note);
        return note;
    }

    updateNote(id: string, dados: NoteDTO) {
        const noteIndex = notes.findIndex((note) => note.getId() === id);
    
        if (noteIndex === -1) {
            throw new Error("Nota não encontrada.");
        }
    
    }

    deleteNote(id: string) {
        const noteIndex = notes.findIndex((note) => note.getId() === id);

        if (noteIndex === -1) {
            throw new Error("Nota não encontrada.");
        }

        const deletedNote = notes.splice(noteIndex, 1)[0];

        return deletedNote;
    }

}

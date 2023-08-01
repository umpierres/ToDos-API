import { notes } from '../../database';
import { Note, User } from '../../classes';
import { CreateNoteDTO, UpdateNoteDTO } from '../../usecases';

export class NoteRepository {
    //ok
    createNote(dados: CreateNoteDTO) {
            const note = new Note(dados.title, dados.description, dados.owner, dados.archived, dados.favorite);
    
            notes.push(note);
            return note;
    }
    //ok
    listNotes(owner: User) {
        const currentUserNotes = notes.filter((note) => note.toJson().owner === owner);

        return currentUserNotes;
    }

    updateNote(id: string, dados: UpdateNoteDTO) {
        const noteIndex = notes.findIndex((note) => note.getId() === id);
    
        if (noteIndex === -1) {
            throw new Error("Nota não encontrada.");
        }

        if(!dados.description || !dados.title){
            throw new Error("Campo obrigatorio.");
        }

        notes[noteIndex].setTitle(dados.title);
        notes[noteIndex].setDescription(dados.description);

        return notes[noteIndex]
    }

    //ok
    deleteNote(id: string) {
        const noteIndex = notes.findIndex((note) => note.getId() === id);

        if (noteIndex === -1) {
            throw new Error("Nota não encontrada.");
        }

        const deletedNote = notes.splice(noteIndex, 1)[0];

        return deletedNote;
    }

}

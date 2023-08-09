import { notes } from '../../database';
import { Note, User } from '../../classes';
import { CreateNoteDTO, UpdateNoteDTO } from '../../usecases';

export class NoteRepository {
    //ok
    createNote(dados: CreateNoteDTO) {
            const note = new Note(dados.title, dados.description, dados.favorite, dados.archived, dados.owner);
    
            notes.push(note);
            
            return note.toJSON;
    }
    //ok
    listNotes(ownerID: string) {
        const currentUserNotes = notes.filter((note) => note.toJSON().owner.getId() === ownerID);

        return currentUserNotes;
    }

    archiveNote(noteID: string) {
		const noteIndex = notes.findIndex(
			(note) => note.toJSON().id === noteID
		);

		if (noteIndex === -1) {
			throw new Error("Nota não encontrada");
		}

		notes[noteIndex].setArchived();

		return notes[noteIndex];
	}


    updateNote(id: string, dados: UpdateNoteDTO) {
        const noteIndex = notes.findIndex((note) => note.getId() === id);
    
        if (noteIndex === -1) {
            throw new Error("Nota não encontrada.");
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

       notes.splice(noteIndex, 1)[0];
    }

}

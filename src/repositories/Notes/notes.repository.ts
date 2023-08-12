import { notes } from '../../database';
import { Note, NoteJSON, User } from '../../classes';

export type CreateNoteDTO = {
    title:string,
    description: string,
    favorite: boolean,
    archived: boolean,
    owner: Omit<User, 'password'>,
}
export type UpdateNoteDTO = {
    noteID: string,
    title?:string,
    description?: string,
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
    listNotes(ownerID: string, filter:Filter) : NoteJSON[] {
        const { title, archived, favorite} = filter;

        if (!title && archived === undefined && favorite === undefined) {
            return notes.map(note => note.toJSON()); 
        }

        let filteredList = [...notes]
        if (title !== undefined) {
            filteredList = filteredList.filter(n => n.toJSON().title.startsWith(title));
        }
    
        if (archived !== undefined) {
            filteredList = filteredList.filter(n => n.toJSON().archived === archived);
        }

        if (favorite !== undefined) {
            filteredList = filteredList.filter(n => n.toJSON().favorite === favorite);
        }
    
        return filteredList.map(note => note.toJSON())
    }

    public findNoteByID(
		ownerID: string,
		noteID: string
	): NoteJSON | undefined {
		return notes
			.find(
				(note) =>
                    note.toJSON().owner.id === ownerID &&
                    note.toJSON().id === noteID
			)
			?.toJSON();
	}

    updateNote(data: UpdateNoteDTO) : NoteJSON {
        const noteIndex = notes.findIndex((note) => note.toJSON().id === data.noteID);
    
        notes[noteIndex].updateNoteDetails({
            title: data.title,
            description: data.description,
        })

        return notes[noteIndex].toJSON()
    }

    //ok
    deleteNote(noteID: string) {
        const noteIndex = notes.findIndex((note) => note.toJSON().id === noteID);

       const [deletedNote] = notes.splice(noteIndex, 1);
       return deletedNote.toJSON()
    }

}

import { Filter, NoteRepository, UserRepository } from '../../repositories';
import { ReturnNote } from './createNote.usecase';

export class ListNotes{
    private filter: Filter
    constructor(filterQuery: Filter) {
		this.filter = filterQuery;
	}
    execute(ownerID: string) : ReturnNote {
        const noteRepository = new NoteRepository()
        const userRepository = new UserRepository();
        const currentUser = userRepository.findUserByID(ownerID)

        if(!currentUser) {
            return {
				success: false,
				message: 'Usuário não encontrado.',
			}; 
        }

        const notesCurrentUser = noteRepository.listNotes(ownerID, this.filter);

        return {
            success:true,
            message: "Notas listadas com sucesso.",
            data: {
                notes: notesCurrentUser
            },
        }
    }
}
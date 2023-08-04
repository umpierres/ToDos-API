import { Note } from '../../classes';
import { NoteRepository } from '../../repositories';

export type FilterDTO = {
    title?: string, favorite?: boolean, archived?:boolean, date?:Date
}

export type ReturnList = {
    success: boolean;
	message: string;
	data?: Note[];
};

export class ListNotes {
    execute(ownerID: string, filters: FilterDTO): ReturnList {
		const repository = new NoteRepository();

		let currentUserNotes = repository.listNotes(ownerID);

		if (filters?.title) {
			currentUserNotes = currentUserNotes.filter((note) =>
				note.toJSON().title.includes(filters.title!)
			);
		}


		if (filters?.archived != undefined) {
			currentUserNotes = currentUserNotes.filter(
				(note) => note.toJSON().archived == filters.archived
			);
		}
		if (filters?.favorite != undefined) {
			currentUserNotes = currentUserNotes.filter(
				(note) => note.toJSON().favorite == filters.favorite
			);
		}
		if (filters?.date != undefined) {
			currentUserNotes = currentUserNotes.filter(
				(note) => note.toJSON().date == filters.date
			);
		}

		return {
			success: true,
			message: "Notas encontradas!",
			data: currentUserNotes,
		};
	}
}

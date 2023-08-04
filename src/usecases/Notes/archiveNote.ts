import { Note } from "../../classes";
import { NoteRepository } from "../../repositories/Notes/notes.repository";

type ReturnArchive = {
	success: boolean;
	message: string;
	data?: Note;
};

export class ArchiveNote {
	execute(noteID: string): ReturnArchive {
		const repository = new NoteRepository();

		const arquivedNote = repository.archiveNote(noteID);

		return {
			success: true,
			message: "Nota arquivada com sucesso",
			data: arquivedNote,
		};
	}
}
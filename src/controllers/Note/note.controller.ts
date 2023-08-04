import { Request, Response } from "express"
import { CreateNote, DeleteNote, FilterDTO, ListNotes, UpdateNote } from "../../usecases";
import { ArchiveNote } from "../../usecases/Notes/archiveNote";

export class NoteController {

    create(req: Request, res:Response){
        const {title, description, favorite, archived,owner} = req.body

        const usecase = new CreateNote();

        const response = usecase.execute({ title, description, favorite, archived, owner} )

        if(!response.success){
            return res.status(400).json(response);
        }

        return res.status(201).json(response);
    }

    update(req: Request, res:Response){
        const {id, data} = req.body

        const usecase = new UpdateNote();

        const response = usecase.execute(id, data)

        if(!response.success){
            return res.status(400).json(response);
        }

        return res.status(201).json(response);
    }
    listNotes(req: Request, res:Response){
        const { ownerID } = req.params;

		const { title, archived, favorite, date } = req.query as FilterDTO;

		const usecase = new ListNotes();

		const response = usecase.execute(ownerID, { title, archived, favorite, date });

		if (!response.success) {
			return res
				.status(400)
				.send("Nenhuma nota encontrada!");
		}

		return res.status(200).json(response);
    }

    archive(req: Request, res: Response) {
		const { noteID} = req.params;

		const usecase = new ArchiveNote();

		const response = usecase.execute(noteID);

		if (!response.success) {
			return res.status(400).send("Não foi possivel arquivar a nota");
		}

		res.status(200).json({ message: response.message, data: response.data });
	}

    delete(req: Request, res:Response){
        const {id} = req.body

        const usecase = new DeleteNote();

        const response = usecase.execute(id)

        if(!response.success){
            return res.status(400).json(response);
        }

        return res.status(201).json(response);
    }
}
import { Request, Response } from "express"
import { CreateNote, DeleteNote, ListNotes, UpdateNote } from "../../usecases";
import { Filter } from "../../repositories";

export class NoteController {

    create(req: Request, res: Response) {
        const { ownerID } = req.params
        const { title, description, favorite, archived} = req.body

        const usecase = new CreateNote();

        const response = usecase.execute({ title, description, favorite, archived, ownerID })

        if (!response.success) {
            return res.status(400).json(response);
        }

        return res.status(201).json(response);
    }

    listNotes(req: Request, res: Response) {
        const { ownerID } = req.params
        const filter = req.query 


        const usecase = new ListNotes({
            title: filter.title?.toString(),
            favorite: filter.favorite === 'true',
            archived: filter.archived === 'true',
        });

        const response = usecase.execute(ownerID)

        if (!response.success) {
            return res.status(400).json(response);
        }

        return res.status(201).json(response);
    }

    update(req: Request, res: Response) {
        const { noteID, ownerID } = req.params
        const { title, description} = req.body

        const usecase = new UpdateNote();

        const response = usecase.execute({
            ownerID,
            noteID,
            newInfo: {
                title, description
            }
        })

        if (!response.success) {
            return res.status(400).json(response);
        }

        return res.status(201).json(response);
    }

    delete(req: Request, res: Response) {
        const { noteID, ownerID } = req.params

        const usecase = new DeleteNote();

        const response = usecase.execute({
            ownerID,
            noteID,
        })

        if (!response.success) {
            return res.status(400).json(response);
        }

        return res.status(201).json(response);
    }
}

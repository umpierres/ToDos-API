import { Request, Response } from "express"
import { CreateNote, DeleteNote, ListNotes, UpdateNote } from "../../usecases";

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
        const {owner} = req.body

        const usecase = new ListNotes();

        const response = usecase.execute(owner.id)

        if(!response.success){
            return res.status(400).json(response);
        }

        return res.status(201).json(response);
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
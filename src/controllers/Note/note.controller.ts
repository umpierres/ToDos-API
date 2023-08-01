import { Request, Response } from "express"
import { CreateNote, UpdateNote } from "../../usecases";
import { ListNotes } from "../../usecases/Notes/listNote.usecase";

export class NoteController {

    create(req: Request, res:Response){
        const {title, description,owner, archived, favorite} = req.body

        const usecase = new CreateNote();

        const response = usecase.execute({ title, description, owner, archived , favorite})

        if(!response.success){
            return res.status(400).json(response);
        }

        return res.status(201).json(response);
    }
    list(req: Request, res:Response) {
        const {owner} = req.body

        const usecase = new ListNotes();

        const response = usecase.execute(owner)

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

    delete(req: Request, res:Response){
        const {id} = req.body

        const usecase = new ListNotes();

        const response = usecase.execute(id)

        if(!response.success){
            return res.status(400).json(response);
        }

        return res.status(201).json(response);
    }
}
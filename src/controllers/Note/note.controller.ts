import { Request, Response } from "express"
import { CreateNote, DeleteNote, UpdateNote } from "../../usecases";


export class NoteController {

    create(req: Request, res:Response){
        const {ownerID} = req.params
        const {title, description, favorite, archived} = req.body
        
        const usecase = new CreateNote();

        const response = usecase.execute({ title, description, favorite, archived, ownerID} )

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

        const usecase = new DeleteNote();

        const response = usecase.execute(id)

        if(!response.success){
            return res.status(400).json(response);
        }

        return res.status(201).json(response);
    }
}

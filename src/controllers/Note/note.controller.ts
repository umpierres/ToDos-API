import { Request, Response } from "express"
import { CreateNote } from "../../usecases";

export class NoteController {

    create(req: Request, res:Response){
        const {title, description,owner, archived, favorite} = req.body

        const usecase = new CreateNote();

        const response = usecase.execute({ title, description, owner,archived , favorite})

        if(!response.success){
            return res.status(400).json(response);
        }

        return res.status(201).json(response);
    }

    delete(){}

    update(){}

    list() {}
}
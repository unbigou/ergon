import { IContactInfoRepository } from "../../../interfaces/IContactInfoRepository";
import { Request, Response } from "express";
import { DeleteContactInfoService } from "../../../services/contactInfo/DeleteContactInfoService";

export class DeleteContactInfoController{
    constructor(private contactRepo: IContactInfoRepository){}

    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const deleteContactInfoService = new DeleteContactInfoService(this.contactRepo)
        await deleteContactInfoService.execute({ id })

        return res.status(200)
    }
}
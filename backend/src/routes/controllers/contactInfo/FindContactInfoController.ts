import { Request, Response } from "express";
import { IContactInfoRepository } from "../../../interfaces/IContactInfoRepository";
import { FindContactInfoService } from "../../../services/contactInfo/GetContactInfoService";

export class FindContactInfoController{
    constructor(private contactRepo: IContactInfoRepository){}
    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;

        const findContactInfoService = new FindContactInfoService(this.contactRepo)
        const result = await findContactInfoService.execute()

        res.json(result)

        return res.status(201).send()
    }
}
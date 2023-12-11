import { Request, Response } from "express";
import { IContactInfoRepository } from "../../../interfaces/IContactInfoRepository";
import { IContactInfo } from "../../../interfaces/IContectInfointerface";
import { UpdateContactInfoService } from "../../../services/contactInfo/UpdateContactInfoService";

export class UpdateContactInfoController{
    constructor(private contactRepo: IContactInfoRepository){}

    async handle(req: Request, res: Response): Promise<Response>{
        const { id } = req.params;
        const {email, address, phoneNumber}: IContactInfo = req.body;

        const updateContactInfoService = new UpdateContactInfoService(this.contactRepo)
        await updateContactInfoService.execute(req.body)

        return res.status(201).json()
    }
}
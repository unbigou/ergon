import { IContactInfoRepository } from "../../interfaces/IContactInfoRepository";
import { IContactInfoDeleteRequest } from "../../interfaces/IContectInfointerface";

export class DeleteContactInfoService{
    constructor(private contactRepo: IContactInfoRepository){}

    async execute({ id }: IContactInfoDeleteRequest): Promise<void>{
        await this.contactRepo.findContactInfo()
        await this.contactRepo.delete(id)
    }
}
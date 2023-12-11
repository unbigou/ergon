import { IContactInfoRepository } from "../../interfaces/IContactInfoRepository";
import { IContactInfo } from "../../interfaces/IContectInfointerface";

export class FindContactInfoService{
    constructor(private contactRepo: IContactInfoRepository){}
    
    async execute(): Promise<IContactInfo>{
        const result = await this.contactRepo.findContactInfo()
        return result
    }
}
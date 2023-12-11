import { ContactInfo } from "../../entities/contactInfo";
import { IContactInfoRepository } from "../../interfaces/IContactInfoRepository";
import { IContactInfo, IContactInfoCreateRequest } from "../../interfaces/IContectInfointerface";

export class CreateContactInfoService{
    constructor(private contactRepo: IContactInfoRepository){}

    async execute({ email, phoneNumber, address }: IContactInfoCreateRequest): Promise<IContactInfo>{
        const contactInfo = new ContactInfo({email, phoneNumber, address})
        const result = await this.contactRepo.insert(contactInfo.toJson())

        return result
    }
}
import { add } from "date-fns";
import { ContactInfo } from "../../entities/contactInfo";
import { IContactInfoRepository } from "../../interfaces/IContactInfoRepository";
import { IContactInfoUpdateRequest } from "../../interfaces/IContectInfointerface";

export class UpdateContactInfoService{
    constructor(private contactRepo: IContactInfoRepository){}

    async execute({ id, email, address, phoneNumber}: IContactInfoUpdateRequest): Promise<void>{
        const result = await this.contactRepo.findContactInfo()

        const contactInfo = new ContactInfo({
            email: email || result.email,
            address: address || result.address,
            phoneNumber: phoneNumber || result.phoneNumber
        }, result.id)

        await this.contactRepo.update(contactInfo.toJson(), id)
    }
}
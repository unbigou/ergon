import { IContactInfo } from "./IContectInfointerface";

export interface IContactInfoRepository{
    findContactInfo(): Promise<IContactInfo>
    insert(props: IContactInfo): Promise<IContactInfo>
    update(props: IContactInfo, id: string): Promise<void>
    delete(id:string): Promise<void>
}
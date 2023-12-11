import { PrismaClient } from "@prisma/client";
import { IContactInfoRepository } from "../interfaces/IContactInfoRepository";
import { IContactInfo } from "../interfaces/IContectInfointerface";
import { AppError } from "../errors/AppError";

const prisma = new PrismaClient();

export class ContactInfoRepository implements IContactInfoRepository {
  async findContactInfo(): Promise<IContactInfo> {
    const result = await prisma.contactInfo.findFirst();

    return result || ({} as IContactInfo);
  }

  async insert(props: IContactInfo): Promise<IContactInfo> {
    const result = await prisma.contactInfo.create({
      data: props,
    });
    return result;
  }

  async update(props: IContactInfo, id: string): Promise<void> {
    await prisma.contactInfo.update({
      where: { id },
      data: props,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.contactInfo.delete({
      where: { id },
    });
  }
}

import { IUserRepository } from '../interfaces/IUserRepository';
import { IUser } from '../interfaces/IUserInterfaces';
import { PrismaClient } from '@prisma/client';
import { ICryptoRepository } from '../interfaces/ICryptoRepository';

const prisma = new PrismaClient();

export class UserRepository implements IUserRepository {
  constructor(
    private cryptoRepo: ICryptoRepository,
  ) {}

    async findAll(): Promise<IUser[]> {
        let result = await prisma.user.findMany();
        
        return result;
    }

    async insert(props: IUser): Promise<void> {
        await prisma.user.create({
            data: props,
        });
    }

  async findOneUser(id: string): Promise<IUser> {
    let result = await prisma.user.findUnique({
      where: { id },
    });

    if (!result) throw new Error('User not found');
    return result;
  }

  async update(props: IUser, id: string): Promise<void> {
    props = await this.cryptoRepo.useEncryptoUser(props);
    await prisma.user.update({
      where: { id },
      data: props,
    });
  }

  async delete(id: string): Promise<void> {
    await prisma.user.delete({
      where: { id },
    });
  }

  async findByEmail(email: string): Promise<IUser | null> {
    let result = await prisma.user.findFirst({
      where: { email },
    });
    return result;
  }
}
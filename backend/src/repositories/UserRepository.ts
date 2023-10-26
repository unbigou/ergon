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
    await Promise.all(
      result.map(
        async (user) =>
          (user = { ...user, ...(await this.cryptoRepo.useDecryptoUser(user)) })
      )
      
    );
    return result;
  }

  async insert(props: IUser): Promise<IUser> {
    props = await this.cryptoRepo.useEncryptoUser(props);
    const user = await prisma.user.create({
      data: props,
    });

    return user;
  }

  async findOneUser(id: string): Promise<IUser> {
    let result = await prisma.user.findUnique({
      where: { id },
    });

    if (!result) throw new Error('User not found');
    result = { ...result, ...await this.cryptoRepo.useDecryptoUser(result) };
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

  async findByEmail(email: IUser['email']): Promise<IUser | null> {
    email = await this.cryptoRepo.encrypt(email);
    let result = await prisma.user.findFirst({
      where: { email },
    });
    if(result) result = { ...result, ...await this.cryptoRepo.useDecryptoUser(result) };
    // Verificar uma maneira melho de implementar porque o primeiro caso sempre é null
    // if (!result !== null || result !== null) throw new Error('User not found');
    return result || null;
  }
}
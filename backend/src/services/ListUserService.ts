import { IUserRepository } from '../interfaces/IUserRepository';
import { IUser } from '../interfaces/IUserInterfaces';

export class ListUsersService {
  constructor(private userRepo: IUserRepository) {}
  async execute(): Promise<IUser[]> {
    const result = await this.userRepo.findAll();
    return result;
  }
}

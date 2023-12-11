import { Request, Response } from 'express';
import { IUserRepository } from '../../../interfaces/IUserRepository';
import { CreateUserService } from '../../../services/user/CreateUserService';
import { IHashRepository } from '../../../interfaces/IHashRepository';

export class CreateUserController {
  constructor(
    private userRepo: IUserRepository,
    private hashRepo: IHashRepository
  ) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const {
      name,
      email,
      password,
      permissionId,
      confirmEmail,
      confirmPassword,
      phoneNumber,
      cart
    } = req.body;

    const createUserService = new CreateUserService(
      this.userRepo,
      this.hashRepo
    );

    const user = await createUserService.execute({
      name,
      email,
      password,
      permissionId,
      confirmEmail,
      confirmPassword,
      phoneNumber,
      cart
    });

    return res.status(201).json(user);
  }
}

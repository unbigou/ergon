import {
  validateBirthDate,
  validateConfimPassword,
  validateConfirmEmail,
  validateCpf,
  validateEmail,
  validatePassword,
  validatePhoneNumber,
} from '../utils/validate';
import { User } from '../entities/user';
import { IUserRepository } from '../interfaces/IUserRepository';
import { IUser, IUserCreateRequest } from '../interfaces/IUserInterfaces';
import { AppError } from '../errors/AppError';
import { IHashRepository } from '../interfaces/IHashRepository';

export class CreateUserService {
  constructor(
    private userRepo: IUserRepository,
    private hashRepo: IHashRepository
  ) {}
  async execute({
    name,
    email,
    password,
    userType,
    phoneNumber,
    confirmEmail,
    confirmPassword,
  }: IUserCreateRequest): Promise<IUser> {

    if (!validateEmail(email)) {
      throw new AppError('Email inválido');
    }

    if (!validateConfirmEmail(email, confirmEmail)) {
      throw new AppError('Os emails não são iguais.');
    }

    const userExists = await this.userRepo.findByEmail(email);

    if (userExists !== null) {
      throw new AppError('Usuário já cadastrado');                     
    }

    if (!validatePassword(password)) {
      throw new AppError(
        'A senha deve ter pelo menos uma letra maiúscula, uma letra minúscula, um número e um caractere especial.'
      );
    }

    if (!validateConfimPassword(password, confirmPassword)) {
      throw new AppError('As senhas não são iguais.');
    }

  
    if(phoneNumber !== ''){
    if (!validatePhoneNumber(phoneNumber)) {
      throw new AppError('Telefone inválido');
    }
  }

    password = await this.hashRepo.cryptographie(password);

    const user = new User({
      name,
      email,
      password,
      userType,
      phoneNumber,
    });
  
    
    const userCreated = await this.userRepo.insert(user.toJson());
    return { ...userCreated, password: '' };
  }
}

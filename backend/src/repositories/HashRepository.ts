import { hash, compare } from "bcrypt"
import { IHashRepository } from "../interfaces/IHashRepository"

export class HashRepository implements IHashRepository {
    async cryptographie(password: string): Promise<string> {
        return await hash(password, 8);
    }

    async uncryptographie(password: string, cryptographicPassword: string): Promise<boolean> {
        return compare(password, cryptographicPassword)
    }
}
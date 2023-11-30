import { PrismaClient } from "@prisma/client";
import { IPermissionRepository } from "../interfaces/IPermissionRepository";
import { IPermission } from "../interfaces/IPermission";
import { createUUID } from "../utils/createUUID";

const prisma = new PrismaClient();

export class PermissionRepository implements IPermissionRepository {
    async insert(props: Omit<IPermission, "id">): Promise<IPermission> {
        let data = {
            id: createUUID(),
            ...props
        }
        
        await prisma.permission.create({
            data: {
                ...data
            }   
        })

        return data
    }

    async delete(id: string): Promise<void> {
        await prisma.permission.delete({
            where: { id }
        })
    }
    
    async get(id: string): Promise<IPermission> {
        let result = await prisma.permission.findUnique({
            where: { id }
        })

        if(!result) throw new Error('permission not found');

        return result
    }

    async getAll(): Promise<IPermission[]> {
        return await prisma.permission.findMany()
    }

    async update(props: IPermission): Promise<void> {
        let id = props.id;

        await prisma.permission.update({
            where: { id },
            data: props
        })
    }
}
import { Request, Response, Router, response } from "express";
import { ContactInfoRepository } from "../repositories/ContactInfoRepository";
import { CreateContactInfoController } from "./controllers/contactInfo/CreateContactInfoController";
import { UpdateContactInfoController } from "./controllers/contactInfo/UpdateContactInfoController";
import { FindContactInfoController } from "./controllers/contactInfo/FindContactInfoController";
import { DeleteContactInfoController } from "./controllers/contactInfo/DeleteContactInfoController";
import { resolveController } from "../adapters/resolverController";

export const contactRoute = Router();

const contactRepo = new ContactInfoRepository;
const createContactInfoController = new CreateContactInfoController(contactRepo)
const updateContactInfoController = new UpdateContactInfoController(contactRepo)
const findContactInfoController = new FindContactInfoController(contactRepo)
const deleteContactInfoController = new DeleteContactInfoController(contactRepo)

contactRoute.post('/', resolveController(async(req: Request, res: Response) => {
    return await createContactInfoController.handle(req, res)
}))

contactRoute.get('/', resolveController(async(req: Request, res: Response) => {
    return await findContactInfoController.handle(req, res)
}))

contactRoute.put('/:id', resolveController(async (req: Request, res:Response) => {
    return await updateContactInfoController.handle(req, res)
 }))

contactRoute.delete('/:id', resolveController(async (req: Request, res: Response) => {
    return await deleteContactInfoController.handle(req, res)
}))
import express, { Request, Response } from "express";

export const mainRouter = express.Router();

mainRouter.get('/', (_: Request, res: Response) => {
    res.json({
        project: 'Newhappen Teleterapia',
        accountable: {
        name: "Yuri Baza",
            contact: "yuribaza@newhappen.com.br"
        },
        devs: [
        {
            name: "William Wallace",
            contact: "williamwtr@outlook.com"
        },
        {
            name: "Pedro Gradella",
            contact: "unbigou@gmail.com"
        }
        ]
    })
})
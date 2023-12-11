import { IProductRepository } from "../interfaces/IProductRepository";
import { IUserRepository } from "../interfaces/IUserRepository";
import * as nodemailer from "nodemailer";
import config from "../config/config";

export class NotificationService {
  constructor(
    private userRepo: IUserRepository,
    private productRepo: IProductRepository
  ) {}

  async execute(productId: string): Promise<void> {
    const product = await this.productRepo.findOneProduct(productId);
    const users = await this.userRepo.findByProduct(productId);

    // let product = {
    //     name: "Calcinha Usada",
    //     price: "R$150"
    // }
    // let users = [
    //     {email: 'phps6200@gmail.com'},
    //     {email: 'bostawwtr@gmail.com'}
    // ]

    const transporter = nodemailer.createTransport({
      service: "gmail",
      secure: true,
      port: 465,
      auth: {
        user: config.notification.email,
        pass: config.notification.password,
      },
    });

    users.forEach((user) => {
      const mailOptions = {
        from: "Ergon 👽<${config.notification.email}>",
        to: user.email,
        subject: `O produto ${product.name} está de volta ao estoque!`,
        text: `O produto ${product.name} está de volta ao estoque!, aproveite o preço de ${product.price}!`,
      };

      transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
          console.error(err);
        } else {
          console.log("E-mail enviado: " + info.response);
        }
      });
    });

    return;
  }
}

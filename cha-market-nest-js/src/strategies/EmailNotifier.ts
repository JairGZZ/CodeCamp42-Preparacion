import { INotifier } from 'src/contract/INotifier';
import { RenderedContentDTO } from 'src/DTOs/RenderedContentDTO';
import nodemailer, { Transporter } from 'nodemailer'
import { CustomerDTO } from 'src/DTOs/CustomerDTO';

export class EmailNotifier implements INotifier {
  channel: string = 'email';
  private transporter:Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_FROM,
        pass: process.env.SMTP_PASSWORD,
      },
    });
  }

  async Send(
    renderedDTO: RenderedContentDTO,
    customerDTO: CustomerDTO,
  ): Promise<boolean> {

    try {
      await this.transporter.verify();
    } catch (error) {
      console.error('error en la verificacion de configuracion smtp:', error);
      return false;
    }

    try {
    await this.transporter.sendMail({
      from: process.env.EMAIL_FROM_NAME,
      subject: renderedDTO.subject,
      to: customerDTO.email,
      text: renderedDTO.body,
    });
    } catch (error) {
      console.error('error enviando email:', error);
      return false;
    }
    return true;
  }
}

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
  ): Promise<void> {
    console.log('Sending email with subject:', renderedDTO.subject);
    console.log('Email body:', renderedDTO.body);
    await this.transporter.sendMail({
      from: process.env.EMAIL_FROM_NAME,
      subject: renderedDTO.subject,
      to: customerDTO.email,
      text: renderedDTO.body,
    });
    console.log('Email sent successfully via EmailNotifier strategy.');
  }
}

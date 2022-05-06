import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c7691852ff9adc",
    pass: "1e3e3e34ba8b27"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <teste@email.com>',
      to: 'Igor Gomes da Siva <igor.gds.00@gmail.com>',
      subject,
      html: body
    })
  }
}
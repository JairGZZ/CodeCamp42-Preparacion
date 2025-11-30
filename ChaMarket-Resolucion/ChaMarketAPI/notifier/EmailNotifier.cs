using MailKit.Net.Smtp;
using MailKit.Security;
using MimeKit;

namespace PooRepaso.Chamarket
{
    public class EmailNotifier : INotifier
    {
        private readonly IConfiguration _config;

        public EmailNotifier(IConfiguration config)
        {
            _config = config;
        }

        public void Send(Notification notification)
        {
            var message = new MimeMessage();
            message.From.Add(new MailboxAddress("Sistema", _config["EmailSettings:FromName"]));

            var toEmail = notification.metadata["email"].ToString();
            message.To.Add(MailboxAddress.Parse(toEmail));

            message.Subject = notification.title;
            message.Body = new TextPart("plain") { Text = notification.message };

            using (var client = new SmtpClient())
            {
                client.Connect(
                    "smtp.gmail.com",
                    587,
                    SecureSocketOptions.StartTls
                );

                client.Authenticate(
                    _config["EmailSettings:Username"],
                    _config["EmailSettings:Password"] 
                );

                client.Send(message);
                client.Disconnect(true);
            }
        }
    }
}

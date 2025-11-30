namespace PooRepaso.Chamarket
{
    public class PushNotifier : INotifier
    {
        public void Send(Notification notification)
        {
            Console.WriteLine("Enviando mensaje por Push: " + notification.message);
        }
    }
}
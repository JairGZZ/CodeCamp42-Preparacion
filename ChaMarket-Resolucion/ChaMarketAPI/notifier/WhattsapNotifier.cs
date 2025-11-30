

namespace PooRepaso.Chamarket
{
    public class WhattsapNotifier : INotifier
    {
        public void Send(Notification notification)
        {
            Console.WriteLine("Enviando mensaje por Whattsap: " + notification.message);
        }
       
    }
}
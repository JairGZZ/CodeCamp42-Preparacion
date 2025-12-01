namespace PooRepaso.Chamarket
{
    public class NotificationService
    {
        private readonly Dictionary<string, INotifier> registry;
        private readonly Dictionary<string, List<string>> eventToChannelModel;

        public NotificationService(EmailNotifier email, PushNotifier push, WhatsAppNotifier whattsap)
        {
            registry = new Dictionary<string, INotifier>();
            eventToChannelModel = new Dictionary<string, List<string>>();

            //esto no deberia ir aqui, pero por simplicidad lo dejo asi
            // Registrar notifiers por defecto
            Register("email", email);
            Register("push", push);
            Register("whattsap", whattsap);

            //esto no deberia ir aqui, pero por simplicidad lo dejo asi
            // Mapear eventos por defecto
            MapEventToChannel("OrderCreated", new List<string> { "email", "push" });
            MapEventToChannel("Welcome", new List<string> { "email", "whattsap" });

        }

        public void SendByEvent(string eventName, Notification notification)
        {
            if (eventToChannelModel.ContainsKey(eventName))
            {
                var channels = eventToChannelModel[eventName];
                foreach (var channel in channels)
                {
                    if (registry.ContainsKey(channel))
                    {
                        registry[channel].Send(notification);
                    }
                }
            }
        }

        public void Register(string name, INotifier notifier)
        {
            if (!registry.ContainsKey(name))
            {
                registry.Add(name, notifier);
            }
        }

        public void MapEventToChannel(string eventName, List<string> channels)
        {
            if (!eventToChannelModel.ContainsKey(eventName))
            {
                eventToChannelModel.Add(eventName, channels);
            }
        }
    }

}


namespace PooRepaso.Chamarket
{
    public class Notification
    {
        public string id { get; }
        public string eventType { get; }
        public string title { get;}
        public string message { get; }
        public Dictionary<string, object> metadata { get; }

        public Notification(string id, string eventType, string title, string message, Dictionary<string, object> metadata)
        {
            this.id = id;
            this.eventType = eventType;
            this.title = title;
            this.message = message;
            this.metadata = metadata;
        }
    }
    
}

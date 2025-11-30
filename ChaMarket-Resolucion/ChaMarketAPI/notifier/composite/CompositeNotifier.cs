namespace PooRepaso.Chamarket
{
    public class CompositeNotifier : INotifier
    {
        private List<INotifier> children = new List<INotifier>();

        public void Add(INotifier notifier)
        {
            children.Add(notifier);
        }

        void INotifier.Send(Notification notification)
        {
            foreach (var child in children)
            {
                child.Send(notification);
            }
        }
    }
}
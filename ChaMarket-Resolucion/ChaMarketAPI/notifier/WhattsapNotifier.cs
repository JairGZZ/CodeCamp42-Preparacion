using System.Text;
using System.Text.Json;

namespace PooRepaso.Chamarket
{
    public class WhatsAppNotifier : INotifier
    {
        private readonly IConfiguration _settings;
        private readonly HttpClient _http;

        public WhatsAppNotifier(IConfiguration settings, HttpClient httpClient)
        {
            _settings = settings;
            _http = httpClient;
        }

        public async void Send(Notification notification)
        {
            try
            {
                var phone = notification.metadata["phone"].ToString();

                var payload = new
                {
                    messaging_product = "whatsapp",
                    to = phone,
                    type = "text",
                    text = new { body = notification.message }
                };

                var json = JsonSerializer.Serialize(payload);

                var url = $"https://graph.facebook.com/{_settings["WhatsAppSettings:ApiVersion"]}/{_settings["WhatsAppSettings:PhoneNumberId"]}/messages";

                var request = new HttpRequestMessage(HttpMethod.Post, url);
                request.Headers.Add("Authorization", $"Bearer {_settings["WhatsAppSettings:AccessToken"]}");
                request.Content = new StringContent(json, Encoding.UTF8, "application/json");

                var response = await _http.SendAsync(request);
                var responseContent = await response.Content.ReadAsStringAsync();


                if (!response.IsSuccessStatusCode)
                {
                    Console.WriteLine($"no se pudo enviar el whatsapp: {responseContent} ");
                }
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}

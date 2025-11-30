using Microsoft.AspNetCore.Mvc;
using PooRepaso.Chamarket;

namespace ChaMarketAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class NotificationController : ControllerBase
    {
        private readonly NotificationService _service;

        public NotificationController(NotificationService service)
        {
            _service = service;
        }

        [HttpPost("send/{eventName}")]
        public IActionResult Send(string eventName, [FromBody] Notification notification)
        {
            _service.SendByEvent(eventName, notification);

            return Ok(new
            {
                message = $"Notificación enviada para el evento '{eventName}'"
            });
        }
    }
}

using Microsoft.AspNetCore.SignalR;

namespace HermesServer.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string message, string userName)
        {
            await Clients.All.SendAsync("Receive", message, userName);
        }
    }
}

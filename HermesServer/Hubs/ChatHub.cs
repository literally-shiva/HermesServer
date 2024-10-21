using Microsoft.AspNetCore.SignalR;

using HermesServer.Models;

namespace HermesServer.Hubs
{
    public class ChatHub : Hub
    {
        public async Task SendMessage(string message, string userName)
        {
            await Clients.All.SendAsync("Receive", message, userName);

            using (ApplicationContext db = new ApplicationContext())
            {
                Message newMessage = new Message { Text = message, SenderUserName = userName };

                db.Messages.Add(newMessage);
                db.SaveChanges();
            }
        }
    }
}

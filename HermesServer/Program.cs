using HermesServer.Hubs;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddSignalR();

var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

app.Map("/", async (context) =>
{
    if (context.Request.Path == "/")
    {
        context.Response.Redirect("/html/login.html");
    }
});

app.MapHub<ChatHub>("/chatHub");

app.Run();

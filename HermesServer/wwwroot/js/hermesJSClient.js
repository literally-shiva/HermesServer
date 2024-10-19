const hubConnection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .build();

document.getElementById("sendButton").addEventListener("click", function () {
    let message = document.getElementById("message").value;
    hubConnection.invoke("SendMessage", message)
        .catch(function (err) {
            return console.error(err.toString());
        });
});

hubConnection.on("Receive", function (message) {

    let messageElement = document.createElement("p");
    messageElement.textContent = message;
    document.getElementById("chatroom").appendChild(messageElement);
});

hubConnection.start()
    .then(function () {
        document.getElementById("sendButton").disabled = false;
    })
    .catch(function (err) {
        return console.error(err.toString());
    });
const hubConnection = new signalR.HubConnectionBuilder()
    .withUrl("/chatHub")
    .build();

document.getElementById("sendButton").addEventListener("click", function () {
    const message = document.getElementById("message").value;
    const userName = document.getElementById("userName").value;

    hubConnection.invoke("SendMessage", message, userName)
        .catch(function (err) {
            return console.error(err.toString());
        });
});

hubConnection.on("Receive", function (message, userName) {
    const userNameElem = document.createElement("b");
    userNameElem.textContent = `${userName}: `;

    const elem = document.createElement("p");
    elem.appendChild(userNameElem);
    elem.appendChild(document.createTextNode(message));

    const firstElem = document.getElementById("chatroom").firstChild;
    document.getElementById("chatroom").insertBefore(elem, firstElem);
});

hubConnection.start()
    .then(function () {
        document.getElementById("sendButton").disabled = false;
    })
    .catch(function (err) {
        return console.error(err.toString());
    });
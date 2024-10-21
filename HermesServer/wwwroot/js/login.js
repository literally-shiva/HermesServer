document.getElementById("loginButton").addEventListener("click", function () {
    const userName = document.getElementById("userName").value;
    localStorage.setItem('userName', userName);
    window.location.href = '/html/chat.html'
});
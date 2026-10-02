const messageInput = document.getElementById("messageInput");
const sendButton = document.getElementById("sendButton");
const messages = document.getElementById("messages");
const chatName = document.getElementById("chatName");

// Send message
sendButton.addEventListener("click", sendMessage);

messageInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {

    const messageText = messageInput.value.trim();

    if (messageText === "") {
        return;
    }

    const message = document.createElement("div");

    message.className = "message sent";

    message.textContent = messageText;

    messages.appendChild(message);

    messageInput.value = "";

    messages.scrollTop = messages.scrollHeight;
}


// Open chat
function openChat(name) {

    chatName.textContent = name;

    messages.innerHTML = "";

    const welcomeMessage = document.createElement("div");

    welcomeMessage.className = "message received";

    welcomeMessage.textContent = "Hello! 👋";

    messages.appendChild(welcomeMessage);
}

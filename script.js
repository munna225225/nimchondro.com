document.addEventListener('DOMContentLoaded', () => {
    const message = "On this special day, I hope the world showers you with all the happiness and love you truly deserve. Happy Birthday Othoy! 🎂 So will you be my mine?";
    let i = 0;
    const typing = setInterval(() => {
        document.getElementById('message').textContent += message[i];
        i++;
        if (i >= message.length) clearInterval(typing);
    }, 50);
});

function redClick() {
    alert("Think again!😅");
}

function greenClick() {
    alert("Yay! Thank you!😘");
}
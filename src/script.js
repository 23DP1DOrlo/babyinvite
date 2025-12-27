const photo = document.getElementById("photo");
const fileInput = document.getElementById("fileInput");
const yesBtn = document.getElementById("yesBtn");

yesBtn.addEventListener("click", () => {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.textContent = "💖";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = "24px";
    heart.style.animation = "fall 2s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 2000);
  }
});

const style = document.createElement("style");
style.textContent = `
@keyframes fall {
  to {
    transform: translateY(110vh) rotate(360deg);
  }
}
`;
document.head.appendChild(style);
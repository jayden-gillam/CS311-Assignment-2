const fortuneArray = [
    ["Without a doubt", "Lime"], ["Signs point to yes", "Lime"],
    ["Yes", "Lime"], ["Ask again later", "yellow"], 
    ["Cannot predict now", "yellow"], ["Don't count on it", "red"],
    ["My reply is no", "red"], ["Very doubtful", "red"]
]

const button = document.querySelector("button")
const response = document.getElementById("response")

button.addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * 8);
    const randomFortune = fortuneArray[randomIndex];
    response.innerHTML = randomFortune[0];
    response.style.color = randomFortune[1];
});
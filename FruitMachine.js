const images = ["images/melon", "images/orange", "images/apple", "images/cherries", "images/banana", "images/grapes", "images/lemon", "images/bar"];

const credBox = document.getElementById("box1");
const winBox = document.getElementById("box2");

const ImgReel1 = document.getElementById("slot1");
const ImgReel2 = document.getElementById("slot2");
const ImgReel3 = document.getElementById("slot3");

const plusCredit = document.getElementById("button1");
const spin = document.getElementById("button2");
const collectWinnings = document.getElementById("button3");

const display = document.getElementById("message");

const volume = document.getElementById("volume");

const credSound = new Audio();
const spinSound = new Audio();
const jackpotSound = new Audio();
const winSound = new Audio();
const collectSound = new Audio();

plusCredit.addEventListener("click", addCredit);
spin.addEventListener("click", changeImage);
collectWinnings.addEventListener("click", collect);

let defaultCredit = 0;
let winnings = 0;
let win1 = 10;
let win2 = 5;

spin.disabled = true;
collectWinnings.disabled = true;

display.innerText = "Please Add Credit To Play:";
volume.innerText = "<MAKE SURE VOLUME IS ENABLED>";

function addCredit() {
    defaultCredit++;
    credBox.innerText = defaultCredit;
    display.innerText = defaultCredit + " Credit Available:";
    spin.disabled = false;
    credSound.src = "credit.mp3";
    credSound.play();
    volume.innerText = "";
}

function changeImage() {
    defaultCredit--;
    credBox.innerText = defaultCredit;

    display.innerText = "You have " + defaultCredit + " spins left";

    let reel1 = Math.floor(Math.random() * 8);
    let reel2 = Math.floor(Math.random() * 8);
    let reel3 = Math.floor(Math.random() * 8);

    ImgReel1.setAttribute("src", images[reel1] + ".png");
    ImgReel2.setAttribute("src", images[reel2] + ".png");
    ImgReel3.setAttribute("src", images[reel3] + ".png");

    spinSound.src = "spin.mp3";
    spinSound.play();

    if (defaultCredit == 0) {
        spin.disabled = true;
        display.innerText = "You Have Used All Your Credit, Add Credit To Play:";
    }

    if (reel1 === reel2 && reel1 === reel3) {
        collectWinnings.disabled = false;
        display.innerText = "Congrats, you have won 10 credits!";
        winnings = winnings + win1;
        winBox.innerText = winnings;
        jackpotSound.src = "jackpot.mp3";
        jackpotSound.play();
    } else if (reel2 === reel3) {
        collectWinnings.disabled = false;
        display.innerText = "Congrats, you have won 5 credits!";
        winnings = winnings + win2;
        winBox.innerText = winnings;
        winSound.src = "winSound.mp3";
        winSound.play();
    }
}

function collect() {
    display.innerText = "Your total winnings are: " + winnings + " credits, thanks for playing! ";
    winnings = 0;
    winBox.innerText = 0;
    collectWinnings.disabled = true;
    collectSound.src = "collect.mp3";
    collectSound.play();
}
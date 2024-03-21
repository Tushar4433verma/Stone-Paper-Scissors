let userPts = 0;
let compPts = 0;
let choices = document.querySelectorAll('.choice');
let content = document.querySelector("#content");
let roundsPlayed = 0;
let totalAttempts=5;

let Score = (userPts, compPts) => {
    let userPt = document.getElementById("user-score");
    let compPt = document.getElementById("comp-score");
    userPt.innerText = userPts;
    compPt.innerText = compPts;
    userPt.style.color = "green";
    compPt.style.color = "green";
}

let letsPlayGame = (userChoice, compChoice) => {
    console.log("User Choice is:", userChoice);
    console.log("Comp Choice is:", compChoice);

    if (userChoice === "Paper") {
        if (compChoice === "Paper") {
            content.innerText = `Game Drawn!!! You Choose ${userChoice} and Computer Choose ${compChoice}`;
            content.style.backgroundColor = "#5DB9CB";
        } else if (compChoice === "Scissors") {
            content.innerText = `You Loose!!! You Choose ${userChoice} and Computer Choose ${compChoice}`;
            content.style.backgroundColor = "red";
            content.style.color = "#ffffff";
            compPts++;
        } else {
            content.innerText = `You Won!!! You Choose ${userChoice} and Computer Choose ${compChoice}`;
            content.style.backgroundColor = "green";
            content.style.color = "#ffffff";
            userPts++;
        }
    } else if (userChoice === "Stone") {
        if (compChoice === "Stone") {
            content.style.backgroundColor = "#5DB9CB";
            content.innerText = `Game Drawn!!! You Choose ${userChoice} and Computer Choose ${compChoice}`;
        } else if (compChoice === "Scissors") {
            content.innerText = `You Won!!! You Choose ${userChoice} and Computer Choose ${compChoice}`;
            content.style.backgroundColor = "green";
            content.style.color = "#ffffff";
            userPts++;
        } else {
            content.innerText = `You Loose!!! You Choose ${userChoice} and Computer Choose ${compChoice}`;
            content.style.backgroundColor = "red";
            content.style.color = "#ffffff";
            compPts++;
        }
    } else {
        if (compChoice === "Scissors") {
            content.innerText = `Game Drawn!!! You Choose ${userChoice} and Computer Choose ${compChoice}`;
            content.style.backgroundColor = "#5DB9CB";
        } else if (compChoice == "Paper") {
            content.innerText = `You Won!!! You Choose ${userChoice} and Computer Choose ${compChoice}`;
            content.style.backgroundColor = "green";
            content.style.color = "#ffffff";
            userPts++;
        } else {
            content.style.backgroundColor = "red";
            content.innerText = `You Loose!!! You Choose ${userChoice} and Computer Choose ${compChoice}`;
            content.style.color = "#ffffff";
            compPts++;
        }
    }

   
    roundsPlayed++;
    h.innerText=`Attempts Left:${totalAttempts-roundsPlayed}`;
    Score(userPts, compPts);

    if (roundsPlayed === 5) {
        let message='';
        if (userPts > compPts) {
            message= "You won the game!";
        } else if (userPts < compPts) {
            message= "Computer won the game!";
        } else {
            message= "It's a tie!";
        }

        displayPopup(message);

        // Reset game after 5 rounds
        setTimeout(() => {
           resetGame();
        }, 2000); // Reset after 2 seconds
    }
}

let computerChoice = (userChoice) => {
    let possibleChoices = new Array("Stone", "Paper", "Scissors");
    let randomIndex = Math.floor(Math.random() * 3);
    const randomChoice = possibleChoices[randomIndex];
    letsPlayGame(userChoice, randomChoice);
}

let userChoice = (userCh) => {
    computerChoice(userCh);
}

choices.forEach((choice) => {
    h.innerText=`Attempts Left:${totalAttempts-roundsPlayed}`;
    choice.addEventListener("click", () => {
        const userCh = choice.getAttribute("id");
        userChoice(userCh);
    })
});

let displayPopup = (message) => {
    let popupContent = document.getElementById("popup-content");
    popupContent.innerText = message;
    popup.classList.add("show");
}

let closePopup = () => {
    popup.classList.remove("show");
    h.innerText=`Attempts Left:${totalAttempts-roundsPlayed}`;
}

let resetGame = () => {
    userPts = 0;
    compPts = 0;
    roundsPlayed = 0;
    Score(userPts, compPts);
    content.innerText = "Play your move!!";
    contents.style.backgroundColor = "#ffffff";
    contents.style.color = "#000000";
}

window.onload=()=>{
    displayPopup("You Have 5 Attempts To play!!");
}

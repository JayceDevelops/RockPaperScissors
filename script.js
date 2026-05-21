let humanScore = 0;
let computerScore = 0;

const decisionMade = ((type) => {
    let computerDecision = Math.floor(Math.random() * 3) + 1;
    const Computer = document.querySelector("#ComputerOption > button");
    
    if (computerDecision === 1){
        Computer.className = "rock";
    }
    else if (computerDecision === 2){
        Computer.className = "paper";
    }
    else if (computerDecision === 3){
        Computer.className = "scissors";
    }

    if (computerDecision === 1 && type === "scissors"){
        showModal("Computer");
    }
    else if (computerDecision === 1 && type === "paper"){
        showModal("Human");
    }
    else if (computerDecision === 2 && type === "rock"){
        showModal("Computer");
    }
    else if (computerDecision === 2 && type === "scissors"){
        showModal("Human");
    } 
    else if (computerDecision === 3 && type === "rock"){
        showModal("Human");
    } 
    else if (computerDecision === 3 && type === "paper"){
        showModal("Computer");
    } 
    else {
        showModal("Tie");
    }
});

const showModal = ((winner) => {
    
    const bodyDiv = document.querySelector("body");

    setTimeout(function() {

        if (winner === "Human"){
        const human = document.querySelector("#HumanScore");
        human.textContent = Number(human.textContent) + 1;
        }
        else if (winner === "Computer"){
            const computer = document.querySelector("#ComputerScore");
            computer.textContent = Number(computer.textContent) + 1;
        }
        
        const main = document.querySelector("main");
        main.style.filter = "blur(10px)";
        main.style.pointerEvents = "none";
        main.style.cursor = "not-allowed";

        const modal = document.createElement("div");
        modal.className = "modal";
        bodyDiv.insertBefore(modal, bodyDiv.firstChild);
        
        const heading = document.createElement("h1");
        heading.textContent = "Winner";
        modal.appendChild(heading);

        const winnerText = document.createElement("h1");
        winnerText.id = "winner";
        winnerText.textContent = winner;
        modal.appendChild(winnerText);
        
        const againButton = document.createElement("button");
        againButton.className = "again";
        againButton.textContent = "Play Again";
        modal.appendChild(againButton);

        againButton.addEventListener("click", () => {
            modal.style.display = "none";
            main.style.filter = "none";
            main.style.pointerEvents = "all";
            main.style.cursor = "auto";

            const Computer = document.querySelector("#ComputerOption > button");
            Computer.className = "none";
        });
    }, 750);
});

const rockButton = document.querySelector(".rock");
rockButton.addEventListener("click", () => {
    decisionMade("rock");
});

const paperButton = document.querySelector(".paper");
paperButton.addEventListener("click", () => {
    decisionMade("paper");
});

const scissorsButton = document.querySelector(".scissors");
scissorsButton.addEventListener("click", () => {
    decisionMade("scissors")
});



let results = {
    human: 0,
    computer: 0
};

let convEmoj = {
    "rock": "&#9994",
    "paper": "&#9995",
    "scissors": "&#9996",
};

let resComp = {
    "rock": "paper",
    "paper": "scissors",
    "scissors": "rock",
}

let GlobRes = {
    emoji: convEmoj,
    result: resComp
};
    
let round = 0;

function getComputerChoice() {
    let ind = Math.round(Math.random()*2);
    const valC = ["rock", "paper", "scissors"];
    return valC[ind];
}


function PlayRound(HumanC) {
    let human_val = document.getElementsByClassName("human-val")[0];
    let computer_val = document.getElementsByClassName("computer-val")[0];
    let CompC = getComputerChoice()
    let val_res = ""
    let res = document.getElementsByClassName("res_val")[0];
    
    if ( CompC == HumanC) {
        res.textContent = `It's a tie : ${HumanC}`;
        val_res = "Equal";
    }
    else if (GlobRes.result[HumanC] == CompC) {
        val_res = "Computer";
        res.textContent = `You lose! ${CompC} beat ${HumanC}`;
    }
    else {
        val_res = "Human";
        res.textContent = `You win! ${HumanC} beat ${CompC}`;
    }
    computer_val.innerHTML = `${GlobRes.emoji[CompC]}`
    human_val.innerHTML = `${GlobRes.emoji[HumanC]}`
    UpdateResults(val_res)
}

function UpdateResults(res){
    let round_val = document.getElementsByClassName("round")[0];
    let human_res = document.getElementsByClassName("human-res")[0];
    let computer_res = document.getElementsByClassName("computer-res")[0];
    
    if (res == "Human") {
        results.human += 1;
    }
    else if (res == "Computer") {
        results.computer += 1;
    }
    round += 1;
    round_val.textContent = `${round}`
    human_res.textContent = `${results.human}`
    computer_res.textContent = `${results.computer}`
    if (results.human == 5 || results.computer == 5) {
        EndGame(res);
    }
}

function EndGame(val) {
    let res = document.getElementsByClassName("res_val")[0];
    let human_val = document.getElementsByClassName("human-val")[0];
    let computer_val = document.getElementsByClassName("computer-val")[0];
    // Show the message of the end
    if (val == "Human") {
        res.textContent = `You win!`;
    }
    else if (val == "Computer") {
        res.textContent = `You lose!`;
    }
    res.style["font-weight"] = "bold";
    // Reset score value in memory
    results.human = 0;
    results.computer = 0;
    round = 0;
    // Reset last value
    computer_val.textContent = `x`
    human_val.textContent = `x`
    // Delete buttons allowing to play
    const all_buttons = document.querySelectorAll("button");
    all_buttons.forEach((item) => {
        item.remove();
    })
    // Create a new Button allowing the restart of the game
    const button = document.createElement("button");
    const div = document.getElementsByClassName("bbt")[0];
    button.textContent = "Restart Game ?"

    button.addEventListener("click", RestartGame);
    div.appendChild(button);
    
}

function RestartGame() {
    // Reset Score and Round
    let round_val = document.getElementsByClassName("round")[0];
    let human_res = document.getElementsByClassName("human-res")[0];
    let computer_res = document.getElementsByClassName("computer-res")[0];
    round_val.textContent = `0`
    human_res.textContent = ``
    computer_res.textContent = ``

    // Delete reset button
    const all_buttons = document.querySelector("button");
    all_buttons.remove();
    // Delete ending message
    const res = document.getElementsByClassName("res_val")[0];
    res.textContent = `You have not yet played`;
    // Recreate the buttons to play
    const div = document.getElementsByClassName("bbt")[0];
    for (let key of Object.keys(GlobRes.emoji)){
        const btn_r = document.createElement("button");
        btn_r.innerHTML = GlobRes.emoji[key]
        btn_r.addEventListener("click", () => { PlayRound(key);});
        div.appendChild(btn_r);
    }

}
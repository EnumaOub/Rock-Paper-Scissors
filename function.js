let results = {
    human: 0,
    computer: 0
};
    
let round = 0;

function getComputerChoice() {
    let ind = Math.round(Math.random()*2);
    const valC = ["rock", "paper", "scissors"];
    return valC[ind];
}


function PlayRound(HumanC) {
    console.log(`\n`)
    let CompC = getComputerChoice()
    let val_res = ""
    let res = document.getElementsByClassName("res_val")[0];
    
    if ( CompC == HumanC) {
        console.log(`It's a tie : ${HumanC}`)
        res.textContent = `It's a tie : ${HumanC}`
        val_res = "Equal";
    }
    else if (CompC == "rock"){
        if (HumanC == "scissors") {
            console.log(`You lose! ${CompC} beat ${HumanC}`)
            res.textContent = `You lose! ${CompC} beat ${HumanC}`
            val_res = "Computer";
        }
        else {
            console.log(`You win! ${HumanC} beat ${CompC}`)
            res.textContent = `You win! ${HumanC} beat ${CompC}`
            val_res = "Human";
        }
    }
    else if (CompC == "scissors"){
        if (HumanC == "paper") {
            console.log(`You lose! ${CompC} beat ${HumanC}`)
            res.textContent = `You lose! ${CompC} beat ${HumanC}`
            val_res = "Computer";
        }
        else {
            console.log(`You win! ${HumanC} beat ${CompC}`)
            res.textContent = `You win! ${HumanC} beat ${CompC}`
            val_res = "Human";
        }
    }
    else if (CompC == "paper"){
        if (HumanC == "rock") {
            console.log(`You lose! ${CompC} beat ${HumanC}`)
            res.textContent = `You lose! ${CompC} beat ${HumanC}`
            val_res = "Computer";
        }
        else {
            console.log(`You win! ${HumanC} beat ${CompC}`)
            res.textContent = `You win! ${HumanC} beat ${CompC}`
            val_res = "Human";
        }
    }
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
    round_val.textContent = ``
    human_res.textContent = ``
    computer_res.textContent = ``

    // Delete reset button
    const all_buttons = document.querySelector("button");
    all_buttons.remove();
    // Delete ending message
    const res = document.getElementsByClassName("res_val")[0];
    res.textContent = ``;
    // Recreate the buttons to play
    const div = document.getElementsByClassName("bbt")[0];
    const btn_r = document.createElement("button");
    btn_r.textContent = "rock"
    btn_r.addEventListener("click", () => { PlayRound('rock');});
    div.appendChild(btn_r);
    const btn_p = document.createElement("button");
    btn_p.textContent = "paper"
    btn_p.addEventListener("click",() => { PlayRound('paper');});
    div.appendChild(btn_p);
    const btn_s = document.createElement("button");
    btn_s.textContent = "scissors"
    btn_s.addEventListener("click", () => { PlayRound('scissors');});
    div.appendChild(btn_s);

}
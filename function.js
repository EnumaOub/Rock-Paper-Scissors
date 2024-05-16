// function add7(nb) {
//     return +nb +7;
// }

// function multipy(a, b) {
//     return +a * +b;
// }

// function capitalise(str) {
//     return str.toUpperCase();
// }

// function lastletter(str) {
//     return str.at(-1);
// }


function getComputerChoice() {
    let ind = Math.round(Math.random()*2);
    const valC = ["rock", "paper", "scissors"];
    return valC[ind];
}

function getHumanChoice() {
    let humanC;
    let checkC = true;
    while( checkC ) {
        humanC = prompt( "Rock, Paper or Scissors", "rock" ).toLowerCase();
        if ( humanC == "rock" || humanC == "paper" || humanC == "scissors" ) {
            checkC = false;
        }
    }
    return humanC;
}

function PlayRound(CompC, HumanC) {
    console.log(`\n`)
    if ( CompC == HumanC) {
        console.log(`You put the same Equality : ${HumanC}`)
        alert(`You put the same Equality : ${HumanC}`)
        return "Equal";
    }
    else if (CompC == "rock"){
        if (HumanC == "scissors") {
            console.log(`You lose! ${CompC} beat ${HumanC}`)
            alert(`You lose! ${CompC} beat ${HumanC}`)
            return "Computer";
        }
        else {
            console.log(`You win! ${HumanC} beat ${CompC}`)
            alert(`You win! ${HumanC} beat ${CompC}`)
            return "Human";
        }
    }
    else if (CompC == "scissors"){
        if (HumanC == "paper") {
            console.log(`You lose! ${CompC} beat ${HumanC}`)
            alert(`You lose! ${CompC} beat ${HumanC}`)
            return "Computer";
        }
        else {
            console.log(`You win! ${HumanC} beat ${CompC}`)
            alert(`You win! ${HumanC} beat ${CompC}`)
            return "Human";
        }
    }
    else if (CompC == "paper"){
        if (HumanC == "rock") {
            console.log(`You lose! ${CompC} beat ${HumanC}`)
            alert(`You lose! ${CompC} beat ${HumanC}`)
            return "Computer";
        }
        else {
            console.log(`You win! ${HumanC} beat ${CompC}`)
            alert(`You win! ${HumanC} beat ${CompC}`)
            return "Human";
        }
    }
}

function PlayGame(){
    let HumanS = 0;
    let CompS = 0;
    for (let i=0; i<5; i++) {
        res = PlayRound(getComputerChoice(), getHumanChoice())
        if (res == "Human") {
            HumanS += 1;
        }
        else if (res == "Computer") {
            CompS += 1;
        }
        console.log(`\nGame ${i+1}: the score are ${HumanS} for human against ${CompS} for the computer\n`)
        alert(`Game ${i+1}: the score are ${HumanS} for human against ${CompS} for the computer`)

    }
    if (HumanS > CompS) {
        console.log(`\nYou won ${HumanS}\\${CompS}`)
        alert(`You won ${HumanS}\\${CompS}`)
    }
    else if (HumanS < CompS) {
        console.log(`\nYou lose  ${CompS}\\${HumanS}`)
        alert(`You lose  ${CompS}\\${HumanS}`)
    }
    else {
        console.log(`\nYou have an equal score  ${CompS}\\${HumanS}`)
        alert(`You have an equal score  ${CompS}\\${HumanS}`)
    }
}

PlayGame()
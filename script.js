function AI(){
    let x = Math.ceil(Math.random() * 3);
    if (x == 1){
        return "paper";
    }
    else if (x == 2){
        return "rock";
    }
    else if (x == 3){
        return "scissors";
    }
}

function draw(won, choice, AIchoice){
    document.getElementById("PS").textContent = score[0];
    document.getElementById("AIS").textContent = score[1];
    document.getElementById("playedGame").textContent = won;
    document.getElementById("AIchose").textContent = emojify(AIchoice);
    document.getElementById("Playerchose").textContent = emojify(choice);
}

function emojify(emojifyThis){
    if (emojifyThis == "scissors"){
        return "✂️";
    }
    else if (emojifyThis == "rock"){
        return "🪨";
    }
    else if (emojifyThis == "paper"){
        return "📄";
    }
}

function mainGame(choice){
    let AIchoice = AI();
    if (choice == AIchoice){
        draw("tie", choice, AIchoice)
    }
    else if (choice == "paper" && AIchoice == "rock"){
        score[0]++;
        draw("player won", choice, AIchoice)
    }
    else if (choice == "rock" && AIchoice == "scissors"){
        score[0]++;
        draw("player won", choice, AIchoice)
    }
    else if (choice == "scissors" && AIchoice == "paper"){
        score[0]++;
        draw("player won", choice, AIchoice)
    }
    else{
        score[1]++;
        draw("AI won", choice, AIchoice)
    }
}

score = [0,0];
function computer(){
    let choice = Math.floor(Math.random()*3) + 1 ; 
    switch (choice){
            case 1:
                return "rock"
            case 2:
                return "paper"
            case 3:
                return "scissors"
        }
}
function human(){
    let choice = prompt("enter the choice")
    return choice;
}
function calc() {
    while (true) {
        let c = computer();
        let h = human();

        console.log(`Computer: ${c}, Human: ${h}`);

        if (c === h) continue;

        if (
            (h === "rock" && c === "scissors") ||
            (h === "paper" && c === "rock") ||
            (h === "scissors" && c === "paper")
        ) {
            return true;
        } else {
            return false;
        }
    }
}

if(!calc()){
    console.log("computer wins");
}else{console.log("human wins");}

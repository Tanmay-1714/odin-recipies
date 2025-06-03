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

function calc(h) {
    let c = computer();

    console.log(`Computer: ${c}, Human: ${h}`);

    if (c === h) return 0;

    if (
        (h === "rock" && c === "scissors") ||
        (h === "paper" && c === "rock") ||
        (h === "scissors" && c === "paper")
    ) {
        return 1;
    } else {
        return 2;
    }
}

let score = document.querySelector("#score");

let scoreh =0;
let scorec =0;
function play(given){
    let result = calc(given);
    if(result === 0){
        console.log("draw");
    }
    else{
        if(result === 1){
            scoreh+=1;
            console.log("human wins")
        }
        else{
            scorec+=1;
            console.log("computer wins")
        }
    }
    score.textContent = `score is human(${scoreh}) - computer(${scorec})`;
}

let button1 = document.querySelector("#j");
button1.addEventListener('click',()=>{
    play("scissors");
});

let button2 = document.querySelector("#k");
button2.addEventListener('click',()=>{
    play("paper");
});

let button3 = document.querySelector("#m");
button3.addEventListener('click',()=>{
    play("rock");
});



let gameSeq = [];
let playerSeq = []; 
let btns = ["red","green","yellow","blue"];
let started = false;
let level = 0;
let start = document.querySelector("button");
let heading = document.querySelector("h3");
let btn2 = document.querySelector(".strt");

start.addEventListener("click",function(){
    if(started == false){
        console.log("Game has been started")
        started = true;
    }
    levelUp();
});

function btnFlash(randBtn){
    randBtn.classList.add("flash");
    setTimeout(function(){
        randBtn.classList.remove("flash");
    },100);
}

function levelUp (){
    playerSeq = [];
    level++;
    heading.innerHTML = `Level ${level}`;

    let randomIndex = Math.floor(Math.random()*4);
    let randomColor = btns[randomIndex];
    gameSeq.push(randomColor);
    // console.log(gameSeq);
    let randBtn = document.querySelector(`.${randomColor}`);
    btn2.innerHTML = "Start";
    btnFlash(randBtn);
}

function checkBtn(idx){
    // console.log(`currently you are in level ${level}`);
    // let idx = level - 1;
    if(gameSeq[idx] == playerSeq[idx]){
        // console.log("gr8 it a match move to next level");
        // level++;
        // heading.innerHTML = `Level ${level}`;
        if(gameSeq.length == playerSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        heading.innerHTML = `You Lose!! START the game again<br> <h5>Your score was ${level-1}<h5> `;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white"; 
        },100);
        btn2.innerHTML = "Restart";
        restart();
    }
}

function btnPress(){
    let btn = this;
    // console.log(btn);
    btnFlash(btn);
    
    let userColor = btn.getAttribute("id");
    playerSeq.push(userColor);
    console.log(`gameSeq => ${gameSeq}`);
    console.log(`playerSeq => ${playerSeq}`);
    checkBtn(playerSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function restart() {
    started = false;
    gameSeq = [];
    playerSeq = [];
    level = 0;
};



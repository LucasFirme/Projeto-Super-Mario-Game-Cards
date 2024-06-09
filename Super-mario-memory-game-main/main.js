const cards = document.querySelectorAll(".card");
let firstCard, secondCard;
let hasFlippedCard = false;
let lockBoard = false;


function flipCard() {
    if(lockBoard) return;
    if(this === firstCard) return;
   this.classList.add("flip");
var plop = new Audio("sound/plop.mp3");
   plop.play();



if(!hasFlippedCard){
    hasFlippedCard = true;
    firstCard = this;
    return;
}
secondCard = this;
checkForMatch();
}

function checkForMatch () {
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch ? disableCards() : unflipCards();
}

function disableCards(){
    
    var right = new Audio("sound/right.mp3");
    right.play();
firstCard.removeEventListener("click", flipCard);
secondCard.removeEventListener("click", flipCard);

// style
firstCheck();
secCheck();
}   

function firstCheck(){
    setTimeout(() => {
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.setAttribute("readonly", "readonly");
        checkBox.setAttribute("checked", "checked");
        firstCard.appendChild(checkBox);
        console.log(firstCard);
    },1000);
    }
   

function secCheck(){
    setTimeout(() => {
        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.setAttribute("readonly", "readonly");
        checkBox.setAttribute("checked", "checked");
        secondCard.appendChild(checkBox);
        
resetBoard();
    },1000);
}

function unflipCards(){
lockBoard = true;
    setTimeout(() => {
        
        var wrong = new Audio("sound/wrong.mp3");
   wrong.play();
        shake();
    }, 1000);
    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");
        resetBoard();
    },1500);

function shake(){

    firstCard.classList.add("wrong");
    secondCard.classList.add("wrong");
}
}



//shuffling

(function shuffle(){
    cards.forEach(card => {
        let randomPos = Math.floor(Math.random() * 12);
        card.style.order = randomPos;
    });
})();

function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
  }

cards.forEach(card => card.addEventListener("click", flipCard));


//start over button
const resetGame = document.querySelector("#box");
const form = document.querySelector("#form");

resetGame.addEventListener("click", () => {
location.reload();
});

let player={
    name:"george(hard coded)",
    balance: "100"
};
let sum=0;
let cards=[];
let hasBlackjack = false;
let isAlive = false;
let message="";
let sumEl=document.getElementById("sum-el");
let cardEl=document.getElementById("card-el");
let messageEl=document.getElementById("message-el");
let playerEl=document.getElementById("player-el");


playerEl.textContent=player.name+": $"+player.balance;

function getRandom(){
    let randm=Math.floor(Math.random()*13)+1;
    if(randm===1){
        return 11;
    }
    else if(randm>=11 && randm<=13){
        return 10;
    }
    return randm;
}

function startGame(){
    isAlive=true;
    hasBlackjack=false;
    let firstCard = getRandom();
    let secondCard = getRandom();
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard;
    renderGame();
}


function renderGame(){
    cardEl.textContent="Cards: "
    for(let i=0;i<cards.length;i++){
        cardEl.textContent+=cards[i]+" ";
    }
    sumEl.textContent="Sum: "+sum; 
    if(sum<21){
        message = "Do you want to draw a new card? ";
    }
    else if(sum===21){
        message="You've got a Blackjack! ";
        hasBlackjack=true;
    }
    else{
        message="You're out of game! ";
        isAlive=false;
    }
    messageEl.textContent=message;
}

function newCard(){
    if(isAlive===true && hasBlackjack===false){
        let thirdCard=getRandom();
        sum+=thirdCard;
        cards.push(thirdCard)
        renderGame();
    }
}
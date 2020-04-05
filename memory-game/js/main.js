
let cards = ["queen", "queen", "king", "king"];
let cardsInPlay = [];


function checkForMatch(){
    
    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            return console.log("You found a match!");
        } else {
            return console.log("Sorry, try again.");
        }
    }  
}

function flipCard(cardId){
    
    console.log("User flipped " + cards[cardId]);
    cardsInPlay.push(cards[cardId]);
    
    checkForMatch();
}


flipCard(0);
flipCard(2);



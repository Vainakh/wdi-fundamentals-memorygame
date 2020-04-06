
let cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
        },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
        },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
        },
    {
        rank: "king",
        suit: "diamonds",
        cardImage: "images/king-of-diamonds.png"
    }
];

let cardsInPlay = [];

function flipCard() {

    let cardId = JSON.parse(this.getAttribute('data-id'));
    cardsInPlay.push(cardId.rank);

    this.setAttribute("src", cardId.cardImage);

    if (cardsInPlay.length === 2) {
        if (cardsInPlay[0] === cardsInPlay[1]) {
            alert("You found a match!");
        } else {
             alert("Sorry, try again.");
        }
    }  
}

function createBoard(){
    for (let i = 0; i < cards.length; i ++) {
        let cardElement = document.createElement("img");
        cardElement.setAttribute("src", "images/back.png");
        cardElement.setAttribute('data-id', JSON.stringify(cards[i]));
        cardElement.addEventListener('click', flipCard);
        let gameBoard = document.getElementById('game-board');
        gameBoard.appendChild(cardElement);
    }
}

createBoard();



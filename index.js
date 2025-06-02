
//build a deck, build 52 cards (each with a value and a suit)
let deck = []; // starting off with empty array to hold the deck


class GameOfWar { //using a class to create the game itself and house all of the required methods. 
    constructor() {
        this.deck = [];
        this.players = [];
        this.initGame();
        this.playGame();
    }

    initGame() {
        class Card {
            constructor(value, face, suit,) {
                this.value = value;
                this.face = face;
                this.suit = suit;
            }
        }

        let suits = ['❤️', '🍀', '💎', '♠️']; // setting the four different suits
        let ranks = [2,3,4,5,6,7,8,9,10,'J','Q','K','A']; //creating the card types
        let faces = [2,3,4,5,6,7,8,9,10,11,12,13,14]; //assigning numeric values to all 14 card types for the points comparison
        
    
        //need an array of suits & ranks/values/faces(# value) - HELP! STRUGGLING TO FIGURE OUT HOW TO COUNT POINTS WITH FACES BUT DISPLAY VALUE AS THE EQUIVALENT RANK i.e. it counts a J as an 11 for the point comparison but displays on the console as 'J'
        
        for (let suit of suits) {  // assigning a suit to each of the card numbers. 
            for (let x = 0; x < 13; x++) {
                let card = new Card(faces[x], suit);
                this.deck.push(card);
            }
        }
        //combine with shuffle function 
    
        function shuffle(deck) { //shuffle function that can be called to shuffle players and the deck during game initiation
            for (var i = deck.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = deck[i];
                deck[i] = deck[j];
                deck[j] = temp;
            }
        }
        shuffle(this.deck);

        // make players - name, hand, first(?), score

       class Player{ //created players that have properties of name, hand, score
        constructor() {
            this.name = this.name;
            this.hand = [];
            this.score = 0;
        }
       }

       for (let x = 0; x < 2; x++) { //dealing 26 cards to each player
            let player = new Player('Player${x+1}')
            player.hand = this.deck.splice(0,26)
            this.players.push(player)
       }

      shuffle(this.players); 


    }

    // players show top card from deck
    //we need to loop 26 times 
    //show each players current top card (card at index 1) at each loop

    playGame() {
        console.log(this.players);

        for (let x = 0; x < 26; x++) { //iterating through a loop and pulling the top card (aka the card at index 0) from each players hand each turn
            let p1Card = this.players[0].hand[x]; 
            let p2Card = this.players[1].hand[x];
            console.log(p1Card.value, p2Card.value); //displaying the values of top cards on console
            console.log(this.players[0]); 
            console.log(`Player 1 is playing this card ${p1Card.value} of ${p1Card.face}`); //console logging the value with the face since the comparison is only done with numbers 
            console.log(`Player 2 is playing ${p2Card.value} of ${p2Card.face}`);
        

             //player with higher card wins point

            if (p1Card.value > p2Card.value) { 
                this.players[0].score += 1; //adding 1 point each time player 1 has the higher number in a turn
                console.log(`Player 1 gets a point and their total score is ${this.players[0].score}`);
            } else if (p1Card.value < p2Card.value) { //adding 1 point each time player 2 has the higher number in a turn
                this.players[1].score += 1;
                console.log(`Player 2 gets a point and their total score is ${this.players[1].score}`);
            } else { // tie if the values are equal
                console.log('Its a tie. No point is awarded');
            }
                
        }


    }

     // determine the winner (player with most points). Need to add 1 point to the score of the player that won each round until the end of the 26 rounds. 

     displayWinner() { // comparing the final score at the end of all the loops/rounds
        console.log(this.players);
        if (this.players[0].score > this.players[1].score) {
            console.log(`Player 1 has a score of ${this.players[0].score} and won`);
        } else {
            console.log(`Player 2 has a score of ${this.players[1].score} and won`);
        } 
    }

}

let game = new GameOfWar();

console.log(game.displayWinner())






var compAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
    "r", "s", "t", "u", "v", "w", "x", "y", "z"
]



var wins = 0;
var losses = 0;
var guessesLeft = 10;
var alreadyGuessed = [];

document.onkeyup = function (event) {
    var userGuess = event.key;

    var computerChoice = compAlphabet[Math.floor(Math.random() * compAlphabet.length)];

    var userAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
        "r", "s", "t", "u", "v", "w", "x", "y", "z"
    ]

    if (userAlphabet.indexOf(userGuess) > -1) {

        if (userGuess === computerChoice) {
            wins++;
            guessesLeft = 10;
            alreadyGuessed = [];
        }

        if (userGuess != computerChoice) {
            guessesLeft--;
            alreadyGuessed.push(userGuess);
        }

        if (guessesLeft === 0) {

            guessesLeft = 10;
            losses++;
            alreadyGuessed = [];

        }

        var html =
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>" +
            "<p>Guesses Left: " + guessesLeft + "</p>" +
            "<p>Your Guesses so far: " + alreadyGuessed.join(", ") + "</p>";

        document.querySelector("#score-display").innerHTML = html;

    }

};
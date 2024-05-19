/*-------------- Constants -------------*/

const movieQuestions = [
    {question: "Who directed the movie 'Inception'?", answers: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Quentin Tarantino"], correct: 0},

    { question: "Which movie won the Oscar for Best Picture in 2020?", answers: ["1917", "Joker", "Parasite", "Ford v Ferrari"], correct: 2 },

    {question: "Which film won the first Academy Award for Best Picture?", answers: ["Wings", "Sunrise", "The Jazz Singer", "Metropolis"], correct: 0},

    {question: "In what year was the movie 'The Godfather' released?", answers: ["1972", "1974", "1969", "1976"], correct: 0},

    {question: "Who played the character of 'Gollum' in 'The Lord of the Rings' series?", answers: ["Andy Serkis", "Elijah Wood", "Ian McKellen", "Orlando Bloom"], correct: 0},

    {question: "What is the highest-grossing movie of all time, not adjusted for inflation?", answers: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"], correct: 1},

    {question: "Which director is known for the 'Before' trilogy (Before Sunrise, Before Sunset, Before Midnight)?", answers: ["Richard Linklater", "David Fincher", "Wes Anderson", "Sofia Coppola"], correct: 0},

    {question: "Who composed the score for the film 'The Lion King' (1994)?", answers: ["Hans Zimmer", "John Williams", "Alan Menken", "Danny Elfman"], correct: 0},

    {question: "In which movie does the character Tyler Durden appear?", answers: ["Fight Club", "The Matrix", "Pulp Fiction", "Se7en"], correct: 0},

    {question: "What is the name of the hotel in 'The Shining'?", answers: ["The Overlook Hotel", "The Grand Budapest Hotel", "The Bates Motel", "The Continental"], correct: 0},

];

const videoGameQuestions = [
    { question: "In which year was the first 'Super Mario Bros.' game released?", answers: ["1983", "1985", "1987", "1989"], correct: 1 },

    {question: "Which game features a protagonist named 'J.C. Denton'?", answers: ["Half-Life", "Deus Ex", "Bioshock", "System Shock 2"], correct: 1},

    {question: "In the 'Metal Gear Solid' series, what is the real name of the character known as 'Revolver Ocelot'?", answers: ["Eli", "Kazuhira Miller", "Adamska", "Frank Jaeger"], correct: 2},

    {question: "What is the name of the final boss in 'Doom II'?", answers: ["Spider Mastermind", "The Icon of Sin", "Cyberdemon", "Baron of Hell"], correct: 1},

    {question: "In 'The Legend of Zelda: Majora's Mask', what is the name of the mask that grants Link the ability to become a Fierce Deity?", answers: ["Deku Mask", "Goron Mask", "Zora Mask", "Fierce Deity's Mask"], correct: 3},

    {question: "In 'The Witcher 3: Wild Hunt', what is the name of Geralt's horse?", answers: ["Shadowfax", "Roach", "Bucephalus", "Epona"], correct: 1},

    {question: "What is the primary setting for the game 'Half-Life 2'?", answers: ["Rapture", "City 17", "Black Mesa", "Aperture Science"], correct: 1},

    {question: "In 'Dark Souls', which item allows players to upgrade their weapons at bonfires?", answers: ["Humanity", "Titanite Shard", "Estus Flask", "Ember"], correct: 1},

    {question: "What is the name of the protagonist in 'Red Dead Redemption'?", answers: ["Arthur Morgan", "John Marston", "Jack Marston", "Dutch van der Linde"], correct: 1},

    {question: "In 'Silent Hill 2', what is the name of the main character searching for his wife?", answers: ["Harry Mason", "James Sunderland", "Heather Mason", "Travis Grady"], correct: 1}
];

/*---------- Variables (state) ---------*/

let currentCategory = []; 
let currentQuestionIndex = 0;
let score = 0;


/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/

function startQuiz(category) {

    // randomly shuffle questions based on category
    if (category === 'movie') {
        currentCategory = shuffleArray([...movieQuestions]); 
    } else if (category === 'game') {
        currentCategory = shuffleArray([...videoGameQuestions]);
    }

    // reset score and question index
    score = 0; 
    currentQuestionIndex = 0;

    // hide welcome screen and show quiz screen
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('quiz-screen').style.display = 'block';

    // let the game begin (with the first question)!
    showQuestion();
}

function showQuestion() {
    if (currentQuestionIndex < currentCategory.length) {
        const questionObj = currentCategory[currentQuestionIndex]; // get current question
        document.getElementById('question').innerText = questionObj.question // display current question

        const answersDiv = document.getElementById('answers');
        answersDiv.innerHTML = ''; // clear previous answers
        console.log(currentQuestionIndex)

        questionObj.answers.forEach((answer, index) => {
            const button = document.createElement('button'); // create answers in buttons
            button.innerText = answer;

            button.onClick = () => checkAnswer(index); // add click event to check answers
            answersDiv.appendChild(button);

        });
    } else {
        showResult(); // show result if no more questions are left
    }

}

function checkAnswer(selectedIndex) {

    // check for correct answer and add 1 point if answer is correct
    if (selectedIndex === currentCategory[currentQuestionIndex].correct) {
        score++;
    }
    currentQuestionIndex++;
    showQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showResult() {

    // hide quiz screen, show result screen and show score
    document.getElementById('quiz-screen').style.display = 'none'; 
    document.getElementById('result-screen').style.display = 'block';
    document.getElementById('score').innerText = score;

    // if score > 5, user wins; else, user loses
    if (score > 5) {
        document.getElementById('result-message').innerText = 'Victory!' 
    } else {
        document.getElementById('result-message').innerText = "Defeat... But it's not over yet!"
    }

}

// restart the game
function replay() {
    document.getElementById('result-screen').style.display = 'none';
    document.getElementById('welcome-screen').style.display = 'block';

}

// shuffle questions array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
        return array;

}

/*----------- Event Listeners ----------*/


/*-------------- Constants -------------*/

const movieQuestions = [

    {question: "Who directed the movie 'Inception'?", answers: ["Christopher Nolan", "Steven Spielberg", "James Cameron", "Quentin Tarantino"], correct: 0, image: "images/inception.png"},

    { question: "Which movie won the Oscar for Best Picture in 2020?", answers: ["1917", "Joker", "Parasite", "Ford v Ferrari"], correct: 2, image: "images/oscar.png"},

    {question: "Which film won the first Academy Award for Best Picture?", answers: ["Wings", "Sunrise", "The Jazz Singer", "Metropolis"], correct: 0, image: "images/oscar1.png"},

    {question: "In what year was the movie 'The Godfather' released?", answers: ["1972", "1974", "1969", "1976"], correct: 0, image: "images/godfather.gif"},

    {question: "Who played the character of 'Gollum' in 'The Lord of the Rings' series?", answers: ["Andy Serkis", "Elijah Wood", "Ian McKellen", "Orlando Bloom"], correct: 0, image: "images/gollum.png"},

    {question: "What is the highest-grossing movie of all time, not adjusted for inflation?", answers: ["Avatar", "Avengers: Endgame", "Titanic", "Star Wars: The Force Awakens"], correct: 1, image: "images/highest.jpeg"},

    {question: "Which director is known for the 'Before' trilogy (Before Sunrise, Before Sunset, Before Midnight)?", answers: ["Richard Linklater", "David Fincher", "Wes Anderson", "Sofia Coppola"], correct: 0, image: "images/before.png"},

    {question: "Who composed the score for the film 'The Lion King' (1994)?", answers: ["Hans Zimmer", "John Williams", "Alan Menken", "Danny Elfman"], correct: 0, image: "images/lion.gif"},

    {question: "In which movie does the character Tyler Durden appear?", answers: ["Fight Club", "The Matrix", "Pulp Fiction", "Se7en"], correct: 0, image: "images/fc.gif"},

    {question: "What is the name of the hotel in 'The Shining'?", answers: ["The Overlook Hotel", "The Grand Budapest Hotel", "The Bates Motel", "The Continental"], correct: 0, image: "images/shinning.gif"}

];

const videoGameQuestions = [

    { question: "In which year was the first 'Super Mario Bros.' game released?", answers: ["1983", "1985", "1987", "1989"], correct: 1, image: "images/mario.gif" },

    {question: "Which game features a protagonist named 'J.C. Denton'?", answers: ["Half-Life", "Deus Ex", "Bioshock", "System Shock 2"], correct: 1, image: "images/jcdenton.jpg"},

    {question: "In the 'Metal Gear Solid' series, what is the real name of the character known as 'Revolver Ocelot'?", answers: ["Eli", "Kazuhira Miller", "Adamska", "Frank Jaeger"], correct: 2, image: "images/revolver.gif"},

    {question: "What is the name of the final boss in 'Doom II'?", answers: ["Spider Mastermind", "The Icon of Sin", "Cyberdemon", "Baron of Hell"], correct: 1, image: "images/doom.gif"},

    {question: "In 'The Legend of Zelda: Majora's Mask', what is the name of the mask that grants Link the ability to become a Fierce Deity?", answers: ["Deku Mask", "Goron Mask", "Zora Mask", "Fierce Deity's Mask"], correct: 3, image: "images/mask.gif"},

    {question: "In 'The Witcher 3: Wild Hunt', what is the name of Geralt's horse?", answers: ["Shadowfax", "Roach", "Bucephalus", "Epona"], correct: 1, image: "images/roach.gif"},

    {question: "What is the primary setting for the game 'Half-Life 2'?", answers: ["Rapture", "City 17", "Black Mesa", "Aperture Science"], correct: 1, image: "images/hl2.gif"},

    {question: "In 'Dark Souls', which item allows players to upgrade their weapons at bonfires?", answers: ["Humanity", "Titanite Shard", "Estus Flask", "Ember"], correct: 1, image: "images/ds.gif"},

    {question: "What is the name of the protagonist in 'Red Dead Redemption'?", answers: ["Arthur Morgan", "John Marston", "Jack Marston", "Dutch van der Linde"], correct: 1, image: "images/rdr.gif"},

    {question: "In 'Silent Hill 2', what is the name of the main character searching for his wife?", answers: ["Harry Mason", "James Sunderland", "Heather Mason", "Travis Grady"], correct: 1, image: "images/sh.gif"}

];

const animeQuestions = [

    {question: "What is the name of the main character in the anime 'Baccano!'?", answers: ["Isaac Dian", "Claire Stanfield", "Firo Prochainezo", "Vino"], correct: 2, image: "images/BGBO.gif"},

    {question: "In 'Neon Genesis Evangelion', what is the true form of the being known as Lilith?", answers: ["An Angel", "A Human", "An Alien", "A God"], correct: 1, image: "images/eva.gif"},

    {question: "What is the original Japanese title of the anime 'Attack on Titan'?", answers: ["Shingeki no Kyojin", "Tatakau Kyojin", "Kyojin no Tsubasa", "Kyojin to Senshi"], correct: 0, image: "images/aot.gif"},

    {question: "In 'Fullmetal Alchemist', what is the name of the alchemical process used to create a Philosopher's Stone?", answers: ["Human Transmutation", "Soul Binding", "Alchemy of the Soul", "Truth Alchemy"], correct: 0, image: "images/fullmetal.gif"},

    {question: "Who is the main antagonist in the anime 'Death Note'?", answers: ["Light Yagami", "Ryuk", "L", "Misa Amane"], correct: 0, image: "images/deathnote.gif"},

    {question: "In 'One Piece', what is the name of the island where Luffy finds the One Piece?", answers: ["Raftel", "Marineford", "Skypiea", "Sabaody Archipelago"], correct: 0, image: "images/op.gif"},

    {question: "What is the highest-ranked magic guild in the anime 'Fairy Tail'?", answers: ["Fairy Tail", "Blue Pegasus", "Phantom Lord", "Sabertooth"], correct: 3, image: "images/ft.gif"},

    {question: "In 'Naruto', what is the name of the jutsu used by Kakashi to copy other ninjas' techniques?", answers: ["Sharingan", "Rinnegan", "Byakugan", "Mangekyo"], correct: 0, image: "images/naruto.gif"},

    {question: "In 'My Hero Academia', what is the name of the hero academy where the main characters study?", answers: ["UA High School", "Shiketsu High School", "Ketsubutsu Academy", "Isami Academy"], correct: 0, image: "images/mha.gif"},

    {question: "In 'Code Geass', what is the real name of the character known as Zero?", answers: ["Suzaku Kururugi", "Rolo Lamperouge", "Lelouch Vi Britannia", "Charles Zi Britannia"], correct: 2, image: "images/code.gif"}

];

const musicQuestions = [

    {question: "Which composer wrote the opera 'The Marriage of Figaro'?", answers: ["Ludwig van Beethoven", "Johann Sebastian Bach", "Wolfgang Amadeus Mozart", "Franz Schubert"], correct: 2, image: "images/moz.jpg"},

    {question: "Who was the original lead guitarist for the band Metallica?", answers: ["Kirk Hammett", "James Hetfield", "Dave Mustaine", "Ron McGovney"], correct: 2, image: "images/metallica.gif"},

    {question: "Which album is often regarded as the first concept album in rock music history?", answers: ["Sgt. Pepper's Lonely Hearts Club Band", "Pet Sounds", "In the Court of the Crimson King", "Tommy"], correct: 1, image: "images/rock.jpg"},

    {question: "Who is known as the 'Queen of Soul'?", answers: ["Tina Turner", "Aretha Franklin", "Diana Ross", "Whitney Houston"], correct: 1, image: "images/soul.jpg"},

    {question: "Which jazz musician is famous for playing the trumpet and is often referred to as 'Satchmo'?", answers: ["Duke Ellington", "Miles Davis", "Louis Armstrong", "John Coltrane"], correct: 2, image: "images/louis.jpg"},

    {question: "What was the title of the first full-length album released by The Beatles?", answers: ["Please Please Me", "Help!", "Rubber Soul", "A Hard Day's Night"], correct: 0, image: "images/beatles.gif"},

    {question: "Which band released the album 'The Dark Side of the Moon'?", answers: ["Pink Floyd", "The Rolling Stones", "Led Zeppelin", "The Who"], correct: 0, image: "images/darkside.gif"},

    {question: "Who composed the ballet 'The Rite of Spring'?", answers: ["Igor Stravinsky", "Pyotr Ilyich Tchaikovsky", "Sergei Rachmaninoff", "Claude Debussy"], correct: 0, image: "images/rite.png"},

    {question: "Which artist's real name is Stefani Joanne Angelina Germanotta?", answers: ["Katy Perry", "Madonna", "Lady Gaga", "Adele"], correct: 2, image: "images/gaga.jpg"},

    {question: "Who is the best-selling female artist of all time?", answers: ["Whitney Houston", "Madonna", "Mariah Carey", "Celine Dion"], correct: 1, image: "images/female.jpg"}

];

/*---------- Variables (state) ---------*/

let currentCategory = []; 
let currentQuestionIndex = 0;
let score = 0;
let selectedCategory = '';


/*----- Cached Element References  -----*/


/*-------------- Functions -------------*/

// function to play SFX on button clicks, in victory and defeat screen
function playSound(soundId) {
    document.getElementById(soundId).play();
}

function startQuiz(category) {

    playSound('game-start-sound');
    selectedCategory = category

    // randomly shuffle questions based on category
    if (category === 'movie') {
        currentCategory = shuffleArray([...movieQuestions]); 
    } else if (category === 'game') {
        currentCategory = shuffleArray([...videoGameQuestions]);
    } else if (category === 'anime') {
        currentCategory = shuffleArray([...animeQuestions]);
    } else if (category === 'music') {
        currentCategory = shuffleArray([...musicQuestions]);
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
        document.getElementById('question-image').src = questionObj.image; // display current question image

        const answersDiv = document.getElementById('answers');
        answersDiv.innerHTML = ''; // clear previous answers

        questionObj.answers.forEach((answer, index) => {
            const button = document.createElement('button'); // create answers in buttons
            button.innerText = answer;

            // add click event to check answers
            button.onclick = () => {
                playSound('button-sound');
                checkAnswer(index); 
            }; 
            answersDiv.appendChild(button);

        });
    } else {
        showResult(); // show result if no more questions are left
    }

}

function checkAnswer(selectedIndex) {

    // check for correct answer and add 1 point if answer is correct
    // console.log(selectedIndex)
    // console.log(currentCategory[currentQuestionIndex].correct)

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
        playSound('victory-sound');
    } else {
        document.getElementById('result-message').innerText = "Defeat... But it's not over yet!"
        playSound('defeat-sound');
    }

    saveScore(score, selectedCategory);
    updateScoreboard();

}

// restart the game
function replay() {
    playSound('button-sound');
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

function saveScore(score, category) {
    let scores = getScores();
    let date = new Date().toLocaleString();
    scores.push(`${date} - ${score} - ${category}`);
    localStorage.setItem('scores', scores.join('|'));
}

function getScores() {
    let scores = localStorage.getItem('scores');
    return scores ? scores.split('|') : [];
}

function updateScoreboard() {
    let scores = getScores();
    let scoreboard = document.getElementById('scoreboard');
    scoreboard.innerHTML = '';
    scores.forEach((entry) => {
        let li = document.createElement('li');
        li.innerText = entry;
        scoreboard.appendChild(li);
    });
}

document.addEventListener('DOMContentLoaded', updateScoreboard);


/*----------- Event Listeners ----------*/


const answerBtns = document.querySelectorAll('.container');
const checkmark = document.querySelectorAll('.checkmark');
const input = document.querySelectorAll('.answer');
const correctBtn = document.querySelectorAll('.correct');
const pointsBox = document.querySelector('.points');
const pointsSpan = document.querySelector('.points span');
const checkPointsBtn = document.querySelector('.check-points');
const clearbtn = document.querySelector('.clear');
const correctAnswer = document.querySelector('.show-answer');


function addPoints() {
    const answer1 = document.quiz.group1.value;
    const answer2 = document.quiz.group2.value;
    const answer3 = document.quiz.group3.value;
    const answer4 = document.quiz.group4.value;
    const answer5 = document.quiz.group5.value;
    const answer6 = document.quiz.group6.value;
    const answer7 = document.quiz.group7.value;
    const answer8 = document.quiz.group8.value;

    let points = 0;


    if (answer1 == "1772") {
        points++;
    }
    if (answer2 == "Rosja i Prusy") {
        points++;
    }
    if (answer3 == "123") {
        points++;
    }
    if (answer4 == "11. listopada") {
        points++;
    }
    if (answer5 == "Roman Dmowski") {
        points++;
    }
    if (answer6 == "Józef Piłsudski") {
        points++;
    }
    if (answer7 == "Gabriel Narutowicz") {
        points++;
    }
    if (answer8 == "Józef Heller") {
        points++;
    }
    console.log(points);

    //show points

    checkPointsBtn.addEventListener('click', showPoints = () => {
        pointsSpan.innerHTML = points;
        pointsBox.classList.add('show');
        pointsSpan.style.float = 'right';
        pointsSpan.style.marginLeft = 10 + 'px';
        console.log('ok');
        points = 0;
    });
};

for (let i = 0; i < answerBtns.length; i++) {
    answerBtns[i].addEventListener('click', addPoints);
};

//show correct answers
correctAnswer.addEventListener('click', showAnswer = () => {

    for (let i = 0; i < correctBtn.length; i++) {
        correctBtn[i].style.backgroundColor = 'green';
        console.log('ok');
    }
    for (let i = 0; i < input.length; i++) {
        input[i].checked = false;
    }
});

//clear all

clearbtn.addEventListener('click', clear = () => {
    points = 0;
    pointsBox.classList.remove('show');
    pointsBox.classList.add('hide');

    //console.log(points);
    for (let i = 0; i < correctBtn.length; i++) {
        correctBtn[i].style.backgroundColor = "";
    }
    for (let i = 0; i < input.length; i++) {
        input[i].checked = false;

        answerBtns[i].addEventListener('mouseover', function (e) {
            e.target.style.backgroundColor = 'red';
            e.target.style.content = "";
            setTimeout(function () {
                e.target.style.backgroundColor = "";
                e.target.style.color = "";
            }, 100);
        }, false)
    }
});
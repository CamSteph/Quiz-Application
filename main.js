//variables
const arr_of_questions = [
    {
        'question' : 'What does CSS stand for?',
        'ans-1' : 'Computer Science Sheet',
        'ans-2' : 'Colorful Style Sheets',
        'ans-3' : 'Computer Style Sheets',
        'ans-4' : 'Cascading Style Sheet',
    },
    {
        'question' : 'Which has the correct CSS syntax?',
        'ans-1' : 'Body: color = black;',
        'ans-2' : 'Body{color:  black};',
        'ans-3' : 'Body().color = black;',
        'ans-4' : 'Body.color {black};',
    },
    {
        'question' : 'What do you use to comment in JavaScript?',
        'ans-1' : '# this is a comment #',
        'ans-2' : '<-- this is a comment -->',
        'ans-3' : '% this is a comment%',
        'ans-4' : '/* this is a comment */',
    },
    {
        'question' : 'Where is JavaScript ran primarily?',
        'ans-1' : 'Client/browser',
        'ans-2' : 'Server',
        'ans-3' : 'Narnia',
        'ans-4' : 'Operating System',
    },
    {
        'question' : 'Which heading tag is the largest?',
        'ans-1' : 'H3',
        'ans-2' : 'H1',
        'ans-3' : 'H7',
        'ans-4' : 'H2',
    },
    {
        'question' : 'how do you remove underlining in HTML?',
        'ans-1' : '{text-decoration: double;}',
        'ans-2' : '{text-decoration: none;}',
        'ans-3' : '{text-decoration: strong;}',
        'ans-4' : '{text-decoration: thin;}',
    },
    {
        'question' : 'Which element is used for tables?',
        'ans-1' : 'ul',
        'ans-2' : 'table',
        'ans-3' : 'li',
        'ans-4' : 'body',
    },
    {
        'question' : 'Which method turns strings to numbers in JavaScript?',
        'ans-1' : 'parseString();',
        'ans-2' : 'parseInt();',
        'ans-3' : 'isNan();',
        'ans-4' : 'turnToNumber();',
    },
    {
        'question' : 'when was JavaScript created?',
        'ans-1' : '1930',
        'ans-2' : '2003',
        'ans-3' : '1972',
        'ans-4' : '1995',
    },
];

const next_btn = document.querySelector('#next-btn');
let current_question = document.querySelector('#question');
let answer_one = document.getElementById('ans-1');
let answer_two = document.getElementById('ans-2');
let answer_three = document.getElementById('ans-3');
let answer_four = document.getElementById('ans-4');
let input_one = document.getElementById('input-1');
let input_two = document.getElementById('input-2');
let input_three = document.getElementById('input-3');
let input_four = document.getElementById('input-4');
let count = 0;
let rightAnswers = 0;
let quiz_over_span = document.getElementById('quiz-over-span');
const quiz_over_section = document.getElementById('quiz-over-section');
const quiz_over_rating = document.getElementById('quiz-over-rating');
const try_again_btn = document.getElementById('try-again-btn');

const arr_of_answers = [
    'C','D','B','D','A','B','B','B','B','D'
];

let arr_of_submissions = [];

//functions

const generateQuestions = () => {

};

const pushAnswers = (ans) => {
    arr_of_submissions.push(ans.innerText.split('')[0]);
};

const nextQuestion = () => {
    if(!input_one.checked && !input_two.checked && !input_three.checked && !input_four.checked) return;
    count += 1;
    if(count <= 9){
        input_one = document.getElementById('input-1');
        input_two = document.getElementById('input-2');
        input_three = document.getElementById('input-3');
        input_four = document.getElementById('input-4');

        if(input_one.checked) pushAnswers(answer_one);
        if(input_two.checked) pushAnswers(answer_two);
        if(input_three.checked) pushAnswers(answer_three);
        if(input_four.checked) pushAnswers(answer_four);

        current_question.innerHTML = `${count + 1}.) ${arr_of_questions[count - 1].question}`;
        answer_one.innerHTML = `<input type="radio" id="input-1">A.) ${arr_of_questions[count - 1]["ans-1"]}</input>`;
        answer_two.innerHTML = `<input type="radio" id="input-2">B.) ${arr_of_questions[count - 1]["ans-2"]}</input>`;
        answer_three.innerHTML = `<input type="radio" id="input-3">C.) ${arr_of_questions[count - 1]["ans-3"]}</input>`;
        answer_four.innerHTML = `<input type="radio" id="input-4">D.) ${arr_of_questions[count - 1]["ans-4"]}</input>`;

        input_one.checked = false;
        input_two.checked = false;
        input_three.checked = false;
        input_four.checked = false;
    }
    else{
        for(i = 0; i <=  arr_of_answers.length; i++){
            if(arr_of_submissions[i] == arr_of_answers[i]){
                rightAnswers += 1;
            }
        }
        quiz_over_span.innerText = rightAnswers * 10;
        switch (rightAnswers * 10){
            case 100:
                quiz_over_rating.innerHTML = '<i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>';
                break;
            case 90:
                quiz_over_rating.innerHTML = '<i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star-half"></i>';
                break;
            case 80:
                quiz_over_rating.innerHTML = '<i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>';
                break;
            case 70:
                quiz_over_rating.innerHTML = '<i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star-half"></i>';
                break;
            case 60:
                quiz_over_rating.innerHTML = '<i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star"></i>';
                break;
            case 50:
                quiz_over_rating.innerHTML = '<i class="fas fa-star"></i> <i class="fas fa-star"></i> <i class="fas fa-star-half"></i>';
                break;
            case 40:
                quiz_over_rating.innerHTML = '<i class="fas fa-star"></i> <i class="fas fa-star"></i>';
                break;
            case 30:
                quiz_over_rating.innerHTML = '<i class="fas fa-star"></i> <i class="fas fa-star-half"></i>';
                break;
            case 20:
                quiz_over_rating.innerHTML = '<i class="fas fa-star"></i>';
                break;
            case 10:
                quiz_over_rating.innerHTML = '<i class="fas fa-star-half"></i>';
                break;
            case 0:
                quiz_over_rating.innerHTML = '';
                break;
        }
        // quiz_over_section.style.minHeight = '82vh';
        quiz_over_section.style.display = 'flex';
        // quiz_over_section.style.flexDirection = 'column';
        // quiz_over_section.style.alignItems = 'center';
        // quiz_over_section.style.justifyContent = 'space-between';
        // quiz_over_section.style.padding = '20% 0%';
        // quiz_over_section.style.position = 'relative';
        // quiz_over_section.style.top = '12vh';
    }
};

const selectRadioOne = () => {
    input_two = document.getElementById('input-2');
    input_three = document.getElementById('input-3');
    input_four = document.getElementById('input-4');
    if(!input_two.checked && !input_three.checked && !input_four.checked){
        input_one = document.getElementById('input-1');
        input_one.checked = true;
    }
    else{
        input_two.checked = false;
        input_three.checked = false;
        input_four.checked = false;
        selectRadioOne();
    }
};

const selectRadioTwo = () => {
    input_one = document.getElementById('input-1');
    input_three = document.getElementById('input-3');
    input_four = document.getElementById('input-4');
    if(!input_one.checked && !input_three.checked && !input_four.checked){
        input_two = document.getElementById('input-2');
        input_two.checked = true;
    }
    else{
        input_one.checked = false;
        input_three.checked = false;
        input_four.checked = false;
        selectRadioTwo();
    }
};

const selectRadioThree = () => {
    input_one = document.getElementById('input-1');
    input_two = document.getElementById('input-2');
    input_four = document.getElementById('input-4');
    if(!input_one.checked && !input_two.checked && !input_four.checked){
        input_three = document.getElementById('input-3');
        input_three.checked = true;
    }
    else{
        input_one.checked = false;
        input_two.checked = false;
        input_four.checked = false;
        selectRadioThree();
    }
};

const selectRadioFour = () => {
    input_one = document.getElementById('input-1');
    input_two = document.getElementById('input-2');
    input_three = document.getElementById('input-3');
    if(!input_one.checked && !input_two.checked && !input_three.checked){
        input_four = document.getElementById('input-4');
        input_four.checked = true;
    }
    else{
        input_one.checked = false;
        input_two.checked = false;
        input_three.checked = false;
        selectRadioFour();
    }
};

const reloadPage = () => {
    location.reload();
};

// event listeners

next_btn.addEventListener('click', nextQuestion);
answer_one.addEventListener('click', selectRadioOne);
answer_two.addEventListener('click', selectRadioTwo);
answer_three.addEventListener('click', selectRadioThree);
answer_four.addEventListener('click', selectRadioFour);
try_again_btn.addEventListener('click', reloadPage);
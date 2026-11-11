const heading = document.querySelector('h1');
console.log(heading);

const paragraph = document.querySelector('p');
console.log(paragraph);
// paragraph.classList.remove('styled-paragraph');

function toggleStyle(){
    paragraph.classList.toggle('styled-paragraph');
}

const toggleButton = document.querySelector('.toggle-button');
toggleButton.addEventListener('click', toggleStyle);


const paragraphAll = document.querySelectorAll('p');
console.log(paragraphAll);

const booksRead = 10;
const heading2 = document.querySelector(".card");
console.log(heading2);

function addTextContent(){
    heading2.textContent = `I have read ${booksRead} books about DOM`;
}

heading2.classList.add('styled-title')

const placeholder = document.querySelector("#placeholder");
console.log(placeholder);
placeholder.textContent = 'I love using DOM!';


const name = "Manasseh";

const tips = document.querySelector('.tips');
const addTips = () => {
    tips.innerHTML = `
    <li>Kindly revise for your exams early enough</li>
    <li>Arrive to the exam room 30 minutes before time</li>
    <li>contact ${name} if you have issues with the exam card</li>
    `
}

const tipsButton = document.querySelector('.tips-button');
tipsButton.addEventListener('click', addTips);

const item = document.createElement('li'); // create the element
item.textContent = "Add flour and sugar, mux it together until consistent"; // add the text to the newly created element
item.classList.add('item1'); // add a class name to the created element
document.querySelector('.procedure').append(item); // append the element to another one in the HTML


const input = document.querySelector('.search-input');
input.addEventListener('input', () => {
    console.log(`you typed: ${event.target.value}`);
})

const submitButton = document.querySelector('button[type=submit]')
submitButton.addEventListener('click', () => {
    event.preventDefault()
})
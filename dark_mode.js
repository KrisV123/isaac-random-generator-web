let darkModeOn = 0;

const darkMode = document.querySelector('.js-dark-mode-button');
const body = document.querySelector('.js-body');
const nadpis = document.querySelector('.js-nadpis');
const charName = document.querySelector('.js-character-name');
const darkModeButtonText = document.querySelector('.js-dark-mode-button');
const darkModeRandomCharacterField = document.querySelector('.js-random-character-field');

darkMode.addEventListener("click", ()=>{
  if(darkModeOn === 1){
    darkModeOn = 0;
    body.classList.remove('body-black');
    nadpis.classList.remove('text-white');
    charName.classList.remove('text-white');
    //darkModeRandomCharacterField.classList.remove('random-character-field-dark');
    darkModeButtonText.innerHTML = 'Dark Mode: OFF';
  }else{
    darkModeOn = 1;
    body.classList.add('body-black');
    nadpis.classList.add('text-white');
    charName.classList.add('text-white');
    //darkModeRandomCharacterField.classList.add('random-character-field-dark');
    darkModeButtonText.innerHTML = 'Dark Mode: ON';
  }
});
let randomNum;
let normalCharacters = 0;
let taintedCharacters = 0;
let easyCharacters = 0;
let hardCharacters = 0;
let funnyCharacters = 0;
let notFunnyCharacters = 0;
const element = document.querySelector('.js-random-character-field');
let findHard;
let randomButtonOn = 1;

function getRandomInt(max){
  return Math.floor(Math.random() * max) + 1; 
}

function addPicture(){
  document.querySelector('.js-random-character-field').innerHTML = '';

  let img = document.createElement('img');
  img.src = `character_pictures/${randomNum}.webp`;
  document.querySelector(`.js-random-character-field`).appendChild(img);
  img.style.height = '185px';
}

function getObjectByValue(array, key, value){
  return array.find(obj => obj[key] === value);
}

function addName(){
  let findName = getObjectByValue(characters, 'numberId', randomNum);
  document.querySelector('.js-character-name').innerHTML = findName.name;
}

function addHard(){
  let findHard = getObjectByValue(characters, 'numberId', randomNum);
  return findHard;
  //console.log(findHard.hard);
}

function actualButtonStatus(){
  console.log('normal');
  console.log(normalCharacters);
  console.log('tainted');
  console.log(taintedCharacters);
  console.log('easy');
  console.log(easyCharacters);
  console.log('hard');
  console.log(hardCharacters);
  console.log('funny');
  console.log(funnyCharacters);
  console.log('not funny');
  console.log(notFunnyCharacters);
  console.log('');
}

function filler(){
  if(normalCharacters === 1){
    randomNum = getRandomInt(17);
  }
  if(taintedCharacters === 1){
    randomNum = getRandomInt(17) + 17;
  }
  if(easyCharacters === 1){
    let hardness = 1;

    while(hardness === 1){
      randomNum = getRandomInt(34);
      hardness = addHard().hard;
    }
    hardness = 1;
  }
  if(hardCharacters === 1){
    let hardness = 0;

    while(hardness === 0){
      randomNum = getRandomInt(34);
      hardness = addHard().hard;
    }
    hardness = 0;
  };
  if(normalCharacters === 0 && taintedCharacters === 0 && easyCharacters === 0 && hardCharacters === 0){
    randomNum = getRandomInt(34);
  };
  addPicture();
  document.querySelector('.js-character-name').innerHTML = '???';
  if(audioOn === 1){
    addClickySound();
    playClickyAudio();
  }
}

function callFunctionMultipleTimes(func, times) {
  let count = 0;
  let intervalId = setInterval(function() {
      func();
      count++;
      if (count === times) {
          clearInterval(intervalId);
      }
  }, 200);
}
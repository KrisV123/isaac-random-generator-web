let audio;
var clickyAudio;
let audioOn = 1;

function playAudio(){
  audio.play();
}

function cancelAudio(){
  audio.pause();
  audio.currentTime = 0;
}

function addClickySound(){
  return clickyAudio = new Audio(`sounds/clicky_sound.wav`);
}

addClickySound();

function playClickyAudio(){
  clickyAudio.play();
}

function addMusicToCharacter(num){
  //console.log(num);
  if(num === 1){
    return audio = new Audio(`sounds/Canny/Canny_10.wav`);
  }
  if(num === 2){
    return audio = new Audio(`sounds/Canny/Canny_1.wav`);
  }
  if(num === 3){
    return audio = new Audio(`sounds/Canny/Canny_3.wav`);
  }
  if(num === 4){
    return audio = new Audio(`sounds/Canny/Canny_2.wav`);
  }
  if(num === 5){
    return audio = new Audio(`sounds/Uncanny/Uncanny_1.wav`);
  }
  if(num === 6){
    return audio = new Audio(`sounds/Canny/Canny_1.wav`);
  }
  if(num === 7){
    return audio = new Audio(`sounds/Canny/Canny_2.wav`);
  }
  if(num === 8){
    return audio = new Audio(`sounds/Canny/Canny_5.wav`);
  }
  if(num === 9){
    return audio = new Audio(`sounds/Canny/Canny_2.wav`);
  }
  if(num === 10){
    return audio = new Audio(`sounds/Canny/Canny_1.wav`);
  }
  if(num === 11){
    return audio = new Audio(`sounds/Uncanny/Uncanny_2.wav`);
  }
  if(num === 12){
    return audio = new Audio(`sounds/Canny/Canny_4.wav`);
  }
  if(num === 13){
    return audio = new Audio(`sounds/Canny/Canny_1.wav`);
  }
  if(num === 14){
    return audio = new Audio(`sounds/not_funny.wav`);
  }
  if(num === 15){
    return audio = new Audio(`sounds/Canny/Canny_1.wav`);
  }
  if(num === 16){
    return audio = new Audio(`sounds/Canny/Canny_3.wav`);
  }
  if(num === 17){
    return audio = new Audio(`sounds/Uncanny/Uncanny_6.wav`);
  }
  if(num === 18){
    return audio = new Audio(`sounds/Canny/Canny_5.wav`);
  }
  if(num === 19){
    return audio = new Audio(`sounds/Canny/Canny_1.wav`);
  }
  if(num === 20){
    return audio = new Audio(`sounds/Uncanny/Uncanny_4.wav`);
  }
  if(num === 21){
    return audio = new Audio(`sounds/Canny/Canny_2.wav`);
  }
  if(num === 22){
    return audio = new Audio(`sounds/piece_of_dogshit.wav`);
  }
  if(num === 23){
    return audio = new Audio(`sounds/with_my_boys.wav`);
  }
  if(num === 24){
    return audio = new Audio(`sounds/Canny/Canny_1.wav`);
  }
  if(num === 25){
    return audio = new Audio(`sounds/Canny/Canny_2.wav`);
  }
  if(num === 26){
    return audio = new Audio(`sounds/Uncanny/Uncanny_3.wav`);
  }
  if(num === 27){
    return audio = new Audio(`sounds/Uncanny/Uncanny_1.wav`);
  }
  if(num === 28){
    return audio = new Audio(`sounds/Uncanny/Uncanny_8.wav`);
  }
  if(num === 29){
    return audio = new Audio(`sounds/Canny/Canny_8.wav`);
  }
  if(num === 30){
    return audio = new Audio(`sounds/Canny/Canny_1.wav`);
  }
  if(num === 31){
    return audio = new Audio(`sounds/Canny/Canny_3.wav`);
  }
  if(num === 32){
    return audio = new Audio(`sounds/Canny/Canny_1.wav`);
  }
  if(num === 33){
    return audio = new Audio(`sounds/Canny/Canny_4.wav`);
  }
  if(num === 34){
    return audio = new Audio(`sounds/Uncanny/Uncanny_7.wav`);
  }
}
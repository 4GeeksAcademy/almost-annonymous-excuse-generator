import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ['A Florida Man', 'My evil twin', 'An army of angry goldfish', 'A group of grumpy giraffes', 'The police'];
  let action = ['stole', 'set fire to', 'accidentally sacrificed', 'lost their minds to', 'soaked in water'];
  let when = ['while I was sleeping', 'in the middle of broad daylight', 'when dinosaurs roamed the Earth', 'while I used the bathroom','before the aliens took over'];
  let what = ['my phone', 'my dignity', 'my legs', 'my project', 'my computer'];

  let background = ["rgb(248, 11, 11)", "rgb(6, 28, 224)", "rgb(0, 247, 0)", "rgb(208, 255, 0)", "rgb(148, 64, 226)"]

  function getRandomIndex (a, b) {
    return Math.floor(Math.random() * (b - a + 1));
  }
  function getRandomExcuse (anyArray) {
    return anyArray[getRandomIndex(0, anyArray.length - 1)];
  }
  function getRandomColor (background) {
    return background[getRandomIndex(0, background.length - 1)];
  }

  let excuse = '';
  let segmentsArrays = [who, action, when, what]; 
  for (const segmentArray of segmentsArrays) {
    let randomSegment = getRandomExcuse(segmentArray); 
    excuse = excuse + ' ' + randomSegment; 
  }

  document.querySelector("#excuse").innerHTML = excuse;
  document.body.style.backgroundColor = getRandomColor(background);
};

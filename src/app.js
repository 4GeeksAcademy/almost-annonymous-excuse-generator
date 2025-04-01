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

  function getRandomIndex (a, b) {
    return Math.floor(Math.random() * (a - b) + b);
  }
  function getRandomExcuse (anyArray) {
    let a = 0;
    let b = 4;
    let random = getRandomIndex (a, b);
    return anyArray[random];
  }
  document.querySelector("#excuse").innerHTML = getRandomExcuse(who) + ' ' + getRandomExcuse(action) + ' ' + getRandomExcuse(what) + ' ' + getRandomExcuse(when) + '!';

};

import { Pet } from './../src/tamagotchi.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  const newPet = new Pet ();
  $("#x").delay(500).fadeIn(200);
  $("#treme").delay(750).slideDown(500).fadeIn(200);
  $('#start-form').submit(function(event) {
    event.preventDefault();
    const inputtedName = $('#choose-name').val();
    $('#choose-name').val("");

    let request = new XMLHttpRequest();
   const url = `ttps://media2.giphy.com/media/IMfi5ugpf3W1y/giphy.gif?cid=fbae6a30166fe662a1c667475689e7ee6817f9b22053f3c6&rid=giphy.gif&api_key=${process.env.API_KEY}&limit1`;

   request.onreadystatechange = function() {
     if (this.readyState === 4 && this.status === 200) {
       const response = JSON.parse(this.responseText);
       getElements(response);
     }
   }

   request.open("GET", url, true);
   request.send();

  const getElements = function(response) {
    $("#fun").attm(response.url)
  }

    $(".pet-name").html(inputtedName);

    $('#game-play').show();
    $('#name-display').show();
    $('#start').hide();

    setInterval( () => {
      $('#hunger-counter').html(newPet.feedLevel);
      $('#fun-counter').html(newPet.playLevel);
      $('#energy-counter').html(newPet.sleepLevel);
    }, 1000);

    setInterval( () => {
      if (newPet.gameStatus() === false) {
        $("#end").show();
        $("#game-play").hide();
      }
    }, 1000);


    $("#hunger-button").click(function(){
      newPet.clickFeed();
    });

    $("#fun-button").click(function(){
      newPet.clickPlay();
    });

    $("#energy-button").click(function(){
      newPet.clickSleep();
    });

    newPet.playTimer();
    newPet.sleepTimer();
    newPet.feedTimer();

    $("#restart-button").click(function(){
      location.reload();
    });

  });
});

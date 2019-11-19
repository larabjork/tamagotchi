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

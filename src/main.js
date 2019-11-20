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
    //
    // var xhr = $.get(`http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=${process.env.API_KEY}&limit=5`);
    // xhr.done(function(data) { console.log("success got data", data); });

    // let request = new XMLHttpRequest();
    // const url = `http://api.giphy.com/v1/gifs/IMfi5ugpf3W1y/&api_key=${process.env.API_KEY}`;

    // xhr.onreadystatechange = function() {
    //   if (this.readyState === 4 && this.status === 200) {
    //     let response = JSON.parse(this.responseText);
    //     getElements(response);
    //   }
    // };

    // xhr.open("GET", url, true);
    // xhr.send();

    // const getElements = function(response) {
    // $('.showRyan').html(`Ryan's picture goes here: ${response.data.url}`);
    // };

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

import { Pet } from './../src/tamagotchi.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
  const newPet = new Pet ();
  $('#start-form').submit(function(event) {
    event.preventDefault();
    const inputtedName = $('#name').val();
    $('#name').val("");

    $('#game-play').show();
    $('#start').hide();

    




  });
});

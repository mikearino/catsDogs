const CatFacts = require('./catOut')
const DogPics = require('./dogOut')
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(function() {
  $('#catScraps').submit(function(event) {
    event.preventDefault();

    let catService = new CatFacts();
    let catPromise = catService.getCat();

    catPromise.then(function(response) {
      let body = JSON.parse(response);
      const randomNum = Math.floor(Math.random() * body.all.length) + 0;
      $('.catPut').text(body.all[randomNum].text);
    }, function(error) {
      $('.catPut').text('There was an error dummy!');
    });

    let dogService = new DogPics();
    let dogPromise = dogService.getDog();

    dogPromise.then(function(response) {
      let body = JSON.parse(response);
      $('.dogPut').html(`<img src="${body.url}">`);
    }, function(error) {
      $('.dogPut').text('There was an error dummy!');
    });




  });
});

import {promise} from './../js/betterDoctor.js';
import apiKey from './../.env';


$(document).ready(function() {
  $('#nameSearch').click(function() {
    event.preventDefault();
    let name = $('#name').val();
    let newSearchName = promise(name);

$(document).ready(function() {
  $('#symptomSearch').click(function() {
    event.preventDefault();
    let symptom = ('#symptomSearch').val();
    // $('#name').val("");

    $('#result').empty();

    let newSearch = promise(symptom);

    newSearch.then(function(response){

        let body = JSON.parse(response);
        if (body.data.length < 1) {
        $('#result').text("No doctors found.");
        }
        for (let i = 0; i < body.data.length; i++){
        //JSON Keys
        let profile = body.data[i].profile;
        let practices = body.data[i].practices;
        let category = body.data[i].category;
        //JSON Values
        let last_name = profile.last_name;


        $('#result').append(`Last name: ${last_name}`);

        $('#result').append(`Doctors in PDX: ${profile}`);

        $('#result').append(`Doctors that can treat your symptoms: ${category}`);

        if (`${last_name} && ${first_name}` === null) {
          $('#result').append(`<p>Sorry, no doctors were found matching ${name}.</p>`);
        }else {
          $('#result').append(`Doctors matching ${name}: ${last_name}, ${first_name}`);
        }
      }
    },
      function(error) {
        $('#result').text("There was an error processing your request. Please try again.");
        });
      });
    });
  });
});

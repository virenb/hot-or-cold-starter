$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

});

  $(function() {
    var secretNumber = parseInt(Math.random() * 100, 10);
    //alert(secretNumber);
    $('form').click(function(e) {
      
    });
  });

// main function to start a new game
//function newGame()

// give user feedback with their guesses, if else if statments 
// ice cold (50 away), cold (30-50 away)
//  warm (20-30 away), hot (10-20), very hot (1-10 range)
//  user guesses, span#count
//  ensure valid inputs by user
//  add userguesses to ul#guessList li
//  div#feedback the hot, warm, cold, etc should go here

// this will submit users guess and put into list
$(document).ready(function() {
    $("#guessButton").click(function() {
        alert('clicked!');
      });
  });


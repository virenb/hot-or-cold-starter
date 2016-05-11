$(document).ready(function() {

    /*--- Display information modal box ---*/
    $(".what").click(function() {
        $(".overlay").fadeIn(1000);

    });

    /*--- Hide information modal box ---*/
    $("a.close").click(function() {
        $(".overlay").fadeOut(1000);
    });

    newGame();

});
var alreadyGuessed = [];
      function newGame() {
          var counter = 0
          alreadyGuessed = [];
          $("#guessButton").prop("disabled", false);
          var magicNumber = parseInt(Math.random() * 100, 10);
          //alert(magicNumber);

          $("form").off("submit").submit(function(e) {
              // Prevent submission.
              e.preventDefault();
              var curNum = parseInt($("#userGuess").val(), 10);
              // Add the value to array.
              counter++;
              $("#count").text(counter);
              if (alreadyGuessed.indexOf(curNum) >= 0)
                  alert("You already guessed it at attempt #" + (alreadyGuessed.indexOf(curNum) + 1));
              else {
                  alreadyGuessed.push(curNum);
                  $("#guessList").append('<li>' + curNum + '</li>');
                  if (curNum == magicNumber) {
                      $("#feedback").text("You won at attempt #" + alreadyGuessed.length);
                      $("#guessButton").prop("disabled", true);
                      $(".new").click(function(e) {
                        e.preventDefault();
                          newGame();
                          $('#guessList').empty();
                          $("form")[0].reset();
                      });
                  } else if (curNum > 100) {
                      alert("This is too big, try again");
                  } else {
                      // Tell Hot or Cold.
                      // If the difference is within 10, it is hot.
                      // Else it is cold.
                      if (Math.abs(magicNumber - curNum) <= 10)
                          stat = "hot";
                      else if (Math.abs(magicNumber - curNum) <= 20)
                          stat = "very warm";
                      else if (Math.abs(magicNumber - curNum) <= 30)
                          stat = "warm";
                      else if (Math.abs(magicNumber - curNum) <= 50)
                          stat = "cold";
                      if (Math.abs(magicNumber - curNum) > 50)
                          stat = "ice cold"
                      $("#feedback").text("Sorry! Try again. It is " + stat + ".");
                      $("#guessList").length;
                  }
              }
              $("#userGuess").val("");

          });
      }
// cannot click new game until this one is finished
// once first game is over, new game is clicked, but cannot enter any input


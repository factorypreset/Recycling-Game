Template.screens.rendered = function() {

  var screenArea = document.getElementById("popup-screens");
  var introScreen = document.getElementById("introScreen");
  var endScreen = document.getElementById("endScreen");

  var startBtn = document.getElementById("start-button");
  startBtn.addEventListener( "click", startGame, false );

  var saveBtn = document.getElementById("save-button");
  saveBtn.addEventListener( "click", saveScore, false );

  var playAgainBtn = document.getElementById("playAgain-button");
  playAgainBtn.addEventListener( "click", startGame, false );

  var endGameBtn = document.getElementById("end-button");
  endGameBtn.addEventListener( "click", reSet, false );

  var nameField = document.getElementById("user-name");

  function startGame(){
    reSet();

    //remove screens if they are visible
    if (introScreen.getAttribute("class") === "screen"){
      introScreen.setAttribute("class", "no-screen");
    }

    if (endScreen.getAttribute("class") === "screen"){
      endScreen.setAttribute("class", "no-screen");
    }

    if (screenArea.getAttribute("class") === ""){
      screenArea.setAttribute("class", "invisible");
    }

    displayNewItem();
    startCountDown();
  }

  function displayEndScreen() {
    theItemTarget.removeAttribute("class");
    theItemTarget.setAttribute("draggable", "false");
    if (screenArea.getAttribute("class") === "invisible"){
      screenArea.setAttribute("class", "");
    }
    //determine which end screen message to post
    if ( getScore() < 100 ){ //try harder
      endScreen.setAttribute("class", "screen");
      document.getElementById("saveScoreOpt").innerHTML = "Your score is<br><span class='large black-score'>" + getScore() + "</span> <br> Play again to improve your score!";
        saveBtn.setAttribute("class", "invisible");
        nameField.setAttribute("class", "invisible");
      } else if ( getScore() >= 100 ){ //well done
          endScreen.setAttribute("class", "screen");
          document.getElementById("saveScoreOpt").innerHTML = "Your score is<br> <span class='large high-score'>" + getScore() + "</span> <br> Nice job! Add your name to the leader board or play again!";
            //} else if ( getScore() >= 100 && isHighScore() ){ //congrats, yours is a top score
      //endScreen.setAttribute("class", "screen");
    //  document.getElementById("saveScoreOpt").innerHTML = "Your score is<br> <span class='large high-score'>" + getScore() + "</span> <br> Nice job! Add your name to the leader board or play again!";
        saveBtn.setAttribute("class", " ");
        nameField.setAttribute("class", " ");
      }
  }

  function reSet(){
    if ( count !== 20 ){
      count = 20;
    }
    //reset counter to 20 seconds
    theCount.innerHTML = 20;

    //reset score to zero
    theScore.innerHTML = 0;
    theScore.setAttribute("class", "black-score");

    sprite.setAttribute("class", "");

    //add intro screen
    if (introScreen.getAttribute("class") === "no-screen"){
      introScreen.setAttribute("class", "screen");
    }

    //remove end screen if it's visible
    if (endScreen.getAttribute("class") === "screen"){
      endScreen.setAttribute("class", "no-screen");
    }

    //reset score color
    if (theScore.getAttribute("class") === "green-score"){
      theScore.setAttribute("class", "black-score");
    }

  }

};

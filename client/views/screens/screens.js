Template.screens.saveScoreOptMsg = function() {
  return Session.get("saveScoreOptMsg") || "";
}

Template.screens.events = {
  'click .start-button': function(event) {

    var count = 20;
    Session.set("count", count);
    Session.set("score", 0);

    $("#popup-screens").toggleClass("invisible");


    // FIXME: displayNewItem() not available here
    // figure out how to call out to a different template/widget/thing
    //displayNewItem();

    // TODO: move this to an event on the bins view
    var setNewItem = function() {
      var items = Items.find();
      var i = Math.floor(Math.random() * items.count());
      var item = items.fetch()[i];
      Session.set("itemBin", item.bin);
      Session.set("itemSrc", item.src);
    }();

    // TODO: move this to a UI helper
    var displayEndScreen = function() {
      if (Session.get("score") < 100) {
        $("#popup-screens").toggleClass("invisible");
        $("#introScreen").removeClass("screen").addClass("no-screen");
        $("#endScreen").removeClass("no-screen").addClass("screen");
        Session.set("saveScoreOptMsg", "Your score is<br><span class='large black-score'>" + Session.get("score") + "</span> <br> Play again to improve your score!");
        $("#save-button").hide();
        $("#user-name").hide();
      } else if (Session.get("score") >= 100) {
        $("#endscreen").addClass("screen");
        Session.set("saveScoreOptMsg", "Your score is<nr><span class='large high-score'>" + Session.get("score") + "</span><br>Nice job! Add your name to the leader board or play again!");
        $("#save-button").show();
        $("#user-name").show();
      }
    };

    var timer = function() {
      if (count > 0) {
        count--;
        Session.set("count", count);
      } else {
        Meteor.clearInterval(interval);
        displayEndScreen();
        if (Session.get("score") >= 150) {
          // FIXME: startSpriteAnimation();
        }
      }
    };

    var interval = Meteor.setInterval(timer, 1000);

  },

  'click #end-button': function(event) {
    Session.set('count', 20);
    Session.set('score', 0);

    // FIXME: sprite not defined here
    //sprite.setAttribute("class", "");

    // reset some screen classes
    $("#introScreen").toggleClass("no-screen").toggleClass("screen");
    $("#endScreen").toggleClass("no-screen").toggleClass("screen");
    $("#score").toggleClass("green-score").toggleClass("black-score");
  }
}


var letterlength = document.querySelectorAll(".drum").length;

for(var i = 0; i < letterlength; i ++)
document.querySelectorAll(".drum")[i].addEventListener("click", function () {
  var buttoninnerhtml = this.innerHTML;
var click = buttoninnerhtml;

buttonanimation(buttoninnerhtml);

  switch(click) {
    case "w":
      new Audio("crash.mp3").play();
      break;
    case "a":
      new Audio("kick-bass.mp3").play();
      break;
    case "s":
      new Audio("snare.mp3").play();
      break;
    case "d":
      new Audio("tom-1.mp3").play();
      break;
    case "j":
      new Audio("tom-2.mp3").play();
      break;
    case "k":
      new Audio("tom-3.mp3").play();
      break;
    case "l":
      new Audio("tom-4.mp3").play();
      break;

      default: console.log(key);
  }

});


document.addEventListener("keypress", function (event) {
  var key = event.key;

buttonanimation(event.key);
  switch(key) {
    case "w":
      new Audio("crash.mp3").play();
      break;
    case "a":
      new Audio("kick-bass.mp3").play();
      break;
    case "s":
      new Audio("snare.mp3").play();
      break;
    case "d":
      new Audio("tom-1.mp3").play();
      break;
    case "j":
      new Audio("tom-2.mp3").play();
      break;
    case "k":
      new Audio("tom-3.mp3").play();
      break;
    case "l":
      new Audio("tom-4.mp3").play();
      break;

      default: console.log(key);
  }

})

function buttonanimation(currentkey){
  var activebutton = document.querySelector("."+currentkey);
  activebutton.classList.add("pressed");
  setTimeout(function() {
    activebutton.classList.remove("pressed");
  }, 100);
}

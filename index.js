//adds listener to buttons and calls make sound function if button clicked
for (i = 0; i < document.querySelectorAll("button").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
    });
}

//adds listener to document for key press.  On key press, it will call makeSound function
document.addEventListener("keydown", function(event) {
  var keyPressed = event.key;
  makeSound(keyPressed);
  buttonAnimation(keyPressed);
});


//Make sound function that will play approach sounds based on the key pressed or button clicked
function makeSound(trigger) {
  switch (trigger) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var kickbass = new Audio("sounds/kick-bass.mp3");
      kickbass.play();
      break;

    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    default:
      console.log("An exception occurred");
  }
}


function buttonAnimation(currentKey) {
  document.querySelector("." + currentKey).classList.add("pressed");
  setTimeout(function () {
     document.querySelector("." + currentKey).classList.remove("pressed");
  }, 100);
}



// this.style.color = "white";


//----------------This is same code as above but with a named function instead of anonymous func------//
// for (i = 0; i < document.querySelectorAll("button").length; i++ ) {
//   document.querySelectorAll("button")[i].addEventListener("click",handleClick);
//
//   function handleClick(){
//     alert("I got clicked");
//   }
//
// }

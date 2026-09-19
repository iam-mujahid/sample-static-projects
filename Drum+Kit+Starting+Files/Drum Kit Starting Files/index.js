//creating code to play sound when user clicks the button
numberOfButtons = document.querySelectorAll("button").length;
for (i=0; i<numberOfButtons; i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        let buttonInnerHTML = this.innerHTML;
        // console.log(buttonInnerHTML)
        playSound(buttonInnerHTML);
        //creating code to play animation when button clicked 
        buttonAnimations(buttonInnerHTML)
    })
}
//creating code to play when user press the required keys either in lower or upper
document.addEventListener("keydown",(event)=>{
    playSound(event.key);
    //creating code to play animation when key pressed
    buttonAnimations(event.key) 

})

//creating code to play animation when button clicked 



//creating function for animation when user give input as required to play sound
const buttonAnimations = (currentKey) => {
    let activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add("pressed")//this will add the style but itwil stay but we need it only some time
    //crating a function that removes the style after some time
    setTimeout(() => {
        activeButton.classList.remove("pressed");
    },150);


}

//  lets make it in  singlefunction
const playSound = (key) =>{
    let standardKey = key.toLowerCase()//making user input to lower thus it works for lower and upper case keys
    switch (standardKey) {
        case "w":
            var sound1 = new Audio("./sounds/tom-4.mp3");
            sound1.play();
            break;
        case "a":
            var sound2 = new Audio("./sounds/tom-3.mp3");
            sound2.play();
            break;
        case "s":
            var sound3 = new Audio("./sounds/tom-2.mp3");
            sound3.play();
            break;
        case "d":
            var sound4 = new Audio("./sounds/tom-1.mp3");
            sound4.play();
            break;
        case "j":
            var sound5 = new Audio("./sounds/snare.mp3");
            sound5.play();
            break;
        case "k":
            var sound6 = new Audio("./sounds/crash.mp3");
            sound6.play();
            break;
        case "l":
            var sound7 = new Audio("./sounds/kick-bass.mp3");
            sound7.play();
            break;
        case "control":
            var sound15 = new Audio("./sounds/piano.mp3");
            sound15.play();
            break;
        default:
            console.log(key);
    }
}



























































// for (var i = 0; i < numberOfButtons; i++) {
//   document.querySelectorAll("button")[i].addEventListener("click", function () {
//     var buttonHTML = this.innerHTML;
//     switch(buttonHTML){
//         case "w":
//             var sound1 = new Audio("./sounds/tom-4.mp3")
//             sound1.play();
//             break;
//         case "a":
//             var sound2 = new Audio("./sounds/tom-3.mp3")
//             sound2.play();
//             break;

//         case "s":
//             var sound3 = new Audio("./sounds/tom-2.mp3")
//             sound3.play();
//             break;

//         case "d":
//             var sound4 = new Audio("./sounds/tom-1.mp3")
//             sound4.play();
//             break;

//         case "j":
//             var sound5 = new Audio("./sounds/snare.mp3")
//             sound5.play();
//             break;

//         case "k" :
//             var sound6 = new Audio("./sounds/crash.mp3")
//             sound6.play();
//             break;

//         case "l":
//             var sound7 = new Audio("./sounds/kick-bass.mp3")
//             sound7.play();
//             break;

//         default:
//             console.log(buttonHTML)

//     }
//   });
// }
// document.addEventListener("keydown", function (mujahid) {
//     if (mujahid.key === "w" || mujahid.key === "W") {
//         var sound1 = new Audio("./sounds/tom-4.mp3");
//         sound1.play();
//     } else if (mujahid.key === "a" || mujahid.key === "A") {
//         var sound2 = new Audio("./sounds/tom-3.mp3");
//         sound2.play();
//     } else if (mujahid.key === "s" || mujahid.key === "S") {
//         var sound3 = new Audio("./sounds/tom-2.mp3");
//         sound3.play();
//     } else if (mujahid.key === "d" || mujahid.key === "D") {
//         var sound4 = new Audio("./sounds/tom-1.mp3");
//         sound4.play();
//     } else if (mujahid.key === "j" || mujahid.key === "J") {
//         var sound5 = new Audio("./sounds/snare.mp3");
//         sound5.play();
//     } else if (mujahid.key === "k" || mujahid.key === "K") {
//         var sound6 = new Audio("./sounds/crash.mp3");
//         sound6.play();
//     } else if (mujahid.key === "l" || mujahid.key === "L") {
//         var sound7 = new Audio("./sounds/kick-bass.mp3");
//         sound7.play();
//     } else if (mujahid.key === "Control") {
//         var sound15 = new Audio("./sounds/piano.mp3");
//         sound15.play();
//     } else {
//         console.log(mujahid.key);
//     }
// });
// document.addEventListener("keydown", function (mujahid) {
//     var key = mujahid.key.toLowerCase(); // Convert the key to lowercase for uniform comparison

//     switch (key) {
//         case "w":
//             var sound1 = new Audio("./sounds/tom-4.mp3");
//             sound1.play();
//             break;
//         case "a":
//             var sound2 = new Audio("./sounds/tom-3.mp3");
//             sound2.play();
//             break;
//         case "s":
//             var sound3 = new Audio("./sounds/tom-2.mp3");
//             sound3.play();
//             break;
//         case "d":
//             var sound4 = new Audio("./sounds/tom-1.mp3");
//             sound4.play();
//             break;
//         case "j":
//             var sound5 = new Audio("./sounds/snare.mp3");
//             sound5.play();
//             break;
//         case "k":
//             var sound6 = new Audio("./sounds/crash.mp3");
//             sound6.play();
//             break;
//         case "l":
//             var sound7 = new Audio("./sounds/kick-bass.mp3");
//             sound7.play();
//             break;
//         case "control":
//             var sound15 = new Audio("./sounds/piano.mp3");
//             sound15.play();
//             break;
//         default:
//             console.log(key);
//     }
// });

    
// document.addEventListener("keydown",function(event){
//     console.log(event);
// })


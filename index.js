const sound = new Audio(); 

drumButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < drumButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", operation)
}

function operation() {
    let btn = this.innerText; 
    buttonAnimation(btn);

    if(btn === "w"){
        sound.src = "./sounds/crash.mp3"; 
        sound.play(); 
    }

    else if(btn === "a"){
        sound.src = "./sounds/kick-bass.mp3"; 
        sound.play(); 
    }

    else if(btn === "s"){
        sound.src = "./sounds/snare.mp3"; 
        sound.play(); 
    }

    else if(btn === "d"){
        sound.src = "./sounds/tom-1.mp3"; 
        sound.play(); 
    }

    else if(btn === "j"){
        sound.src = "./sounds/tom-2.mp3"; 
        sound.play(); 
    }

    else if(btn === "k"){
        sound.src = "./sounds/tom-3.mp3"; 
        sound.play(); 
    }

    else if (btn === "l"){
        sound.src = "./sounds/tom-4.mp3"; 
        sound.play(); 
    }

    else {
        alert("Somethng went wrong!!")
    }
}

document.addEventListener("keypress", function(event) {
    makeSound(event.key); 
}); 

function makeSound(btn){
    buttonAnimation(btn);

    if(btn === "w"){
        sound.src = "./sounds/crash.mp3"; 
        sound.play(); 
    }

    else if(btn === "a"){
        sound.src = "./sounds/kick-bass.mp3"; 
        sound.play(); 
    }

    else if(btn === "s"){
        sound.src = "./sounds/snare.mp3"; 
        sound.play(); 
    }

    else if(btn === "d"){
        sound.src = "./sounds/tom-1.mp3"; 
        sound.play(); 
    }

    else if(btn === "j"){
        sound.src = "./sounds/tom-2.mp3"; 
        sound.play(); 
    }

    else if(btn === "k"){
        sound.src = "./sounds/tom-3.mp3"; 
        sound.play(); 
    }

    else if (btn === "l"){
        sound.src = "./sounds/tom-4.mp3"; 
        sound.play(); 
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("." + currentKey); 
    activeButton.classList.add("pressed"); 

    setTimeout(function() {
        activeButton.classList.remove("pressed");
      }, 1000);
}
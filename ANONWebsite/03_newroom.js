var h3name = document.getElementById("h3name");

var roombg = document.getElementById("roombg");

var roomimg = document.getElementById("roomimg");


var posters = document.getElementById("posters");

var laptop = document.getElementById("laptop");

var write = document.getElementById("write");

var pillows = document.getElementById("pillows");

var flag = document.getElementById("flag");

var door = document.getElementById("door");


var ex = document.getElementsByClassName("ex");

var posterfacts = document.getElementById("posterfacts");

var writefacts = document.getElementById("writefacts");

var pillowsfacts = document.getElementById("pillowsfacts");

var laptopfacts = document.getElementById("laptopfacts");

var flagfacts = document.getElementById("flagfacts");


var rightButton = document.getElementById("RIGHT");
var leftButton = document.getElementById("LEFT");
var currentPage = "left";
var fullpg = document.getElementById("fullpg");


//////////LOAD FORM INFO

var saved = localStorage.getItem("formstore");

console.log(saved);
console.log(saved.name);


if(saved){
    saved = JSON.parse(saved); 
    h3name.innerHTML = saved.name;
    roombg.style.backgroundColor = saved.color;
}




//////////MOVE ROOM
rightButton.addEventListener("click", function () {
    if (currentPage == "left") {
        roombg.style.backgroundPosition = "center";
        fullpg.style.left = "-1280px";
        currentPage = "center";
    } else if (currentPage == "center") {
        roombg.style.backgroundPosition = "right";
        fullpg.style.left = "-2560px";
        currentPage = "right";
    }
});

leftButton.addEventListener("click", function () {
    if (currentPage == "right") {
        roombg.style.backgroundPosition = "center";
        fullpg.style.left = "-1280px";
        currentPage = "center";
    } else if (currentPage == "center") {
        roombg.style.backgroundPosition = "left";
        fullpg.style.left = "0px";
        currentPage = "left";
    }
});



//////////FACTS POP UPS


posters.addEventListener("click", function() {
    posterfacts.style.display = "block";

     posterfacts.style.width = "80%";
     posterfacts.style.height = "50%";
     posterfacts.style.filter = "opacity(1)";
     posterfacts.style.fontSize = "12pt";
});
laptop.addEventListener("click", function() {
    laptopfacts.style.display = "block";

     laptopfacts.style.width = "80%";
     laptopfacts.style.height = "50%";
     laptopfacts.style.filter = "opacity(1)";
     laptopfacts.style.fontSize = "12pt";
});
write.addEventListener("click", function() {
    writefacts.style.display = "block";

     writefacts.style.width = "80%";
     writefacts.style.height = "50%";
     writefacts.style.filter = "opacity(1)";
     writefacts.style.fontSize = "12pt";
});
flag.addEventListener("click", function() {
    flagfacts.style.display = "block";

     flagfacts.style.width = "80%";
     flagfacts.style.height = "50%";
     flagfacts.style.filter = "opacity(1)";
     flagfacts.style.fontSize = "12pt";
});
pillows.addEventListener("click", function() {
    pillowsfacts.style.display = "block";

     pillowsfacts.style.width = "80%";
     pillowsfacts.style.height = "50%";
     pillowsfacts.style.filter = "opacity(1)";
     pillowsfacts.style.fontSize = "12pt";
});


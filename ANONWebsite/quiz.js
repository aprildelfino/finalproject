var question = document.getElementById("question");
var qnum = document.getElementById("qnum");
var choicea = document.getElementById("choicea");
var choiceb = document.getElementById("choiceb");
var choicec = document.getElementById("choicec");
var choiced = document.getElementById("choiced");
var buttons = document.getElementsByClassName("choices");
var next = document.getElementById("next");
var qimg = document.getElementById("quizimg");
var count = 0;

var saved = localStorage.getItem("formstore");

console.log(saved);
console.log(saved.name);


if(saved){
    saved = JSON.parse(saved); 
    h3name.innerHTML = saved.name;
}

function rightAnswer(correct) {
    correct.style.backgroundColor = "green";
}


choicea.addEventListener("click", function() {
   if(question.innerText == "Q1: When was “Mole’s Adventure” released?"){
       rightAnswer(choicea);
       count = count+1;
   }
});
choicec.addEventListener("click", function() {
   if(question.innerText == "Q2: Cartoon was shortened to an abbreviation, what was it?"){
       rightAnswer(choicec);
       count = count+1;
   }
});
choiced.addEventListener("click", function() {
   if(question.innerText == "Q3: What was the common term to refer to a fan of anime?"){
       rightAnswer(choiced);
       count = count+1;
   }
});


next.addEventListener("click", function() {
    if(question.innerText == "Q1: When was “Mole’s Adventure” released?"){
        if(choicea.style.backgroundColor == "green"){
            
        }
        
        question.innerText = "Q2: Cartoon was shortened to an abbreviation, what was it?";
       
        choicea.style.backgroundColor = "white";
        choicea.innerText = "Card"
        choiceb.innerText = "Droll";
        choicec.innerText = "Toon";
        choiced.innerText = "Anime";
    }
    
    else if(question.innerText == "Q2: Cartoon was shortened to an abbreviation, what was it?"){
        question.innerText = "Q3: What was the common term to refer to a fan of anime?";
        
        choicec.style.backgroundColor = "white";
        choicea.innerText = "Weaboo";
        choiceb.innerText = "Weeb";
        choicec.innerText = "Wapanese";
        choiced.innerText = "Otaku";
    }
    else if(question.innerText == "Q3: What was the common term to refer to a fan of anime?"){
        question.innerHTML = "NOT BAD! HERE'S YOUR SCORE: <br>"+count+"/3";
        question.style.fontSize = "30pt";
        qimg.style.display = "none";
        choicea.style.display = "none";
        choiceb.style.display = "none";
        choicec.style.display = "none";
        choiced.style.display = "none";
        next.style.display = "none";
        
    }
});
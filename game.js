
var timer = 60;
var min = 0;
var sec = 0;
function startTimer () {
    min = parseInt(timer/60);
    sec = parseInt(timer%60);

    if (timer < 1){

    alert("Your Time is up!");
    }
    document.getElementById("time").innerHTML = "<b> Time Left: </b>"+min.toString()+sec.toString();
    timer--;
    setTimeout(function(){
        startTimer();
    }, 1000);

}

$(document).ready(function(){
        

function submitAnswers () {
    var total = 5;
    var correct= 0;

    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;

    var answers = ["c","d","c","a","b"];
    
    if(q1 == answers[0]){
        correct++;
    }
    if(q2 == answers[1]){
        correct++;
    }
    if(q3 == answers[2]){
        correct++;
    }
    if(q4 == answers[3]){
        correct++;
    }
    if(q5 == answers[4]){
        correct++;
    }
    document.getElementById("after_submit").style.visibility ="visible";
    document.getElementById("number_correct").innerHTML ="You got" + correct +"correct.";
    
   

} }


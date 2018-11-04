var questions = [{
    ques: "Many _____ Make Light Work",
    ans: ["Feet", "Arms", "Hands", "Toes"],
    name: "lightwork",
    correct: "Hands",
    divClass: ".lightwork"
},
{
    ques: "A Rolling _____ Gathers No Moss",
    ans: ["Stone", "Leaf", "Water", "Wood"],
    name: "rolling",
    correct: "Stone",
    divClass: ".rolling"
},
{
    ques: "One Man's _____ Is A Another Man's Treasure",
    ans: ["Clothes", "Gold", "Partner", "Trash"],
    name: "mans",
    correct: "Trash",
    divClass: ".mans"
},
{
    ques: "It Like Herding _____",
    ans: ["Sheep", "Goats", "Cats", "People"],
    name: "herding",
    correct: "Cats",
    divClass: ".herding"
},
{
    ques: "Don't Judge A _____ By Its Cover",
    ans: ["CD", "Book", "Tape", "Bed"],
    name: "judge",
    correct: "Book",
    divClass: ".judge"
},
{
    ques: "You'll Catch More _____ With Honey Than With Vinegar",
    ans: ["Bees", "Roaches", "Spiders", "Flies"],
    name: "catch",
    correct: "Flies",
    divClass: ".catch"
},
{
    ques: "_____ Of A Feather Flock Together",
    ans: ["Owls", "Flamingos", "Cats", "Birds"],
    name: "flock",
    correct: "Birds",
    divClass: ".flock"
},
{
    ques: "People Who Live In Glass _____ Shouldn't Throw Stones",
    ans: ["Tents", "Apartments", "Houses", "Huts"],
    name: "glass",
    correct: "Houses",
    divClass: ".glass"
},
{
    ques: "What's Good For The _____ Is Good For The Gander",
    ans: ["Goose", "Duck", "Robin", "Dove"],
    name: "good",
    correct: "Goose",
    divClass: ".good"
},
{
    ques: "Strike While The _____ Is Hot",
    ans: ["Fire", "Iron", "Coal", "Wood"],
    name: "strike",
    correct: "Iron",
    divClass: ".strike"
}
] 

var labels = ["first", "second", "third", "forth"];


var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});


var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');

for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}



var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

   
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    
    clearInterval(timer);
    return;
}
}, 1000);


$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; 



var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;


for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};


countdown();
$('.container').fadeOut(500);
$('#answerScreen').show();
$('#correctScreen').append(correctAnswers);
$('#wrongScreen').append(wrongAnswers);

}); 
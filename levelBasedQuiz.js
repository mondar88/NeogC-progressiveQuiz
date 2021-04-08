var readLineSync = require('readline-sync');
var score = 0;
var clearedLevel ="Yes";
var playerNow = "";
var highScorer = {
  playerName:"Mondar",
  score:5,
}

function play(queSet){
  playerNow = readLineSync.question("Enter your name: ");
  for(j=0;j<queSet.length;j++){
    if(clearedLevel==="Yes"){
      console.log("----------------------------------------------")
      console.log("-||||||||||||||||||||||||||||||||||||||||||||-")
      console.log("-----------------LEVEL "+j+"----------------------")
      serve(queSet[j]);
    }
    else{
     console.log("GAME OVER"); 
    }
     
  }
  
  //final
  if(compare(highScorer.score, score)){
     highScorer.playerName = playerNow;
     highScorer.score = score;
     console.log("Congrats! "+highScorer.playerName+" you are the highest scorer now and your score is", highScorer.score);
  }
  else{
    console.log("your score is " + score + " and highest score is " + highScorer.score + " by " + highScorer.playerName);
  }
}

function serve(queList){
  
  for(i=0; i<queList.length; i++){
   var askQue = quizzie(queList[i]);
   if(askQue === "Yes"){
      console.log("Correct answer");
      score = score+1;
    }
    else{
      console.log("wrong answer");
    }
  }

  //validate
  if(compare(highScorer.score, score)){
    highScorer.score = score+5;
     
     console.log("Welcome to the next level! ");
    
     
  }
  else{
    clearedLevel = "No";
  }
 
}

function compare(highestScore, score){
  if (score>=highestScore){
    return 1;
  }
  else{
    return 0;
  }
}

function quizzie(ask){
  var userAns = readLineSync.question(ask.question);
  if(userAns.toUpperCase() === ask.answer.toUpperCase()){
    var result = "Yes";
  }
  else{
    var result = "No";
  }
  return result;
}
var questionOne = {
  question: "What is the capital of Germany? ",
  answer: "Berlin",
}

var questionTwo = {
  question: "Which sport is Christiano Ronaldo associated with? ",
  answer: "Football",
}

var questionThree ={
   question: "What does NATO stand for? ",
  answer: "North Atlantic Treaty Organisation",
}

var questionFour ={
   question: "What type of microbe is COVID?  ",
  answer: "Virus",
}

var questionFive ={
   question: "What does IP in information technology stand for? ",
  answer: "Internet Protocol",
}

var questionSix ={
   question: "where is dead sea? ",
  answer: "Jordan",
}

var questionSeven ={
   question: "What is field staff of a golf course called as? ",
  answer: "Caddie",
}

var questionEight ={
   question: "Which line divides North and South Korea? ",
  answer: "38th Parallel",
}

var questionNine ={
   question: "What is the spiral shaped structure in the nucleus of cell?  ",
  answer: "DNA",
}

var questionTen ={
   question: "Which language laravel framework runs on?  ",
  answer: "PHP",
}

var queListOne = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var queListTwo = [questionSix, questionSeven, questionEight, questionNine, questionTen];
var queSet = [queListOne, queListTwo];
play(queSet);


//Challenge 1: Your age in Days

function ageInDays(){
    var birthYear = prompt("What year were you born in?");
    var ageInDays = (2022 - birthYear) *365;
    var h1 = document.createElement('h1');
    var textAnswer = document.createTextNode('You are ' + ageInDays + ' days old');
    h1.setAttribute('id','ageInDays');
    h1.appendChild(textAnswer);
    document.getElementById('flex-box-result').appendChild(h1);
}

function reset(){
    document.getElementById('ageInDays').remove();
}

//Challenge 2: Cat generator
function generateCat(){
    var image = document.createElement('img');
    var div = document.getElementById('flex-cat-gen');
    image.src = "https://tse3.mm.bing.net/th?id=OIP.BNb-IeYJB2ysGCHwxHE4_AHaHa&pid=Api&P=0" ;
    div.appendChild(image);
                
}


//Challenge 3: RPS
function rpsGame(yourChoice){
    console.log(yourChoice);
    var humanChoice, botChoice;
    humanChoice = yourChoice.id;
    botChoice = numberToChoice(randToRpsInt());
    console.log('Computer choice', botChoice);
    results = decideWinner(humanChoice,botChoice);
    console.log(results);
    message = finalMessage(results);  //{message:'You won!', 'color': 'green'}
    console.log(message);
    rpsFrontEnd(yourChoice.id,botChoice, message);
}
function randToRpsInt(){
    return Math.floor(Math.random()*3);
}
function numberToChoice(number){
    return ['rock','paper','scissors'][number];
}
function decideWinner(yourChoice,botChoice){
    var rpsDatabase ={
        'rock': {'scissors': 1, 'rock' : 0.5, 'paper':0},
        'paper':{'rock':1,'paper':0.5,'scissors':0},
        'scissors':{'paper':1,'scissors':0.5,'rock':0},
    }

    var yourScore = rpsDatabase[yourChoice][botChoice];
    var botScore = rpsDatabase[botChoice][yourChoice];
    return [yourScore,botScore];
}

function finalMessage([yourScore,botScore]){
    if(yourScore === 0){
        return {'message': 'You lost!', 'color': 'red'};
    }else if(yourScore === 0.5){
        return {'message': 'You tied!', 'color': 'yellow'};
    }else{
        return {'message': 'You won!', 'color': 'green'};
    }
}

function rpsFrontEnd(humanImageChoice,botImageChoice,finalMessage){
    var imageDataBase = {
        'rock': document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissors':document.getElementById('scissors').src,
    }
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissors').remove();

    var humanDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    humanDiv.innerHTML = "<img src = '" + imageDataBase[humanImageChoice] + "' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
    messageDiv.innerHTML = "<h1 style='color: " + finalMessage['color'] + "; font-size: 60px; padding: 30px; '>" + finalMessage['message']+ "</h1>"
    botDiv.innerHTML = "<img src = '" + imageDataBase[botImageChoice] + "' height = 150 width = 150 style = 'box-shadow: 0px 10px 50px rgba(243, 38, 24, 1);'>"
    
    document.getElementById('flex-box-rps-div').appendChild(humanDiv);
    document.getElementById('flex-box-rps-div').appendChild(messageDiv);
    document.getElementById('flex-box-rps-div').appendChild(botDiv);
}
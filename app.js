
var player_score = 0 ,computer_score = 0;

//computer choice
function computer_choice(){
    var comp_choices = ['rock', 'paper', 'scissors'];    
    const randomElement = comp_choices[Math.floor(Math.random() * comp_choices.length)];
    return randomElement;
}



//player input
function player_input(){
    const player_choice = prompt("input your value? rock paper scissors ").toLowerCase();
    return player_choice;
}
  


//matchmaking
function playround(player,computer){

    console.log("computer selected: "  , computer);
    console.log("You selected: "  , player);


    if(player == computer){
       tie();
    }


    if(player == "rock"){
        if(computer == "paper"){
            computer_wins();
        }
        else if(computer  == "scissors"){
            player_wins();
        }
    }

    else if(player == "paper"){
        if(computer == "rock"){
            player_wins();
        }
        else if(computer  == "scissors"){
           computer_wins();
        }
        
    }

    else if(player == "scissors"){
        if(computer == "rock"){
            computer_wins();
        }
        else if(computer == "paper"){
            player_wins();
        }
        
    }

    else{
        console.log("select the value properly");
    }
    


    function tie(){
        console.log("it's a tie");
    }
    
    function computer_wins(){
        console.log("computer wins");
        computer_score++;
    }
    
    function player_wins(){
        console.log("you win");
        player_score++;
    }
    
}



function game(){

    //game includes 5 rounds

    for (let i = 0; i <= 4; i++) {
        playround(player_input() , computer_choice());
        console.log(player_score + ':' + computer_score);

        
        if(i==4){
            if(player_score  > computer_score){
                window.alert("you won the most");
            }
            if(player_score  < computer_score){
                window.alert("computer won the most");
            }
            if(player_score  == computer_score){
                window.alert("Wow , it's still a tie");
            }
            break;
        }

    
    }

      


    
}

game();


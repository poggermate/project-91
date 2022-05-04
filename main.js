function adduser() {
    player1_name = document.getElementById("player1_name").value;
    player2_name = document.getElementById("player2_name").value;

    localStorage.setItem("player1_name",player1_name);
    localStorage.setItem("player2_name",player2_name);

    window.location.replace("game_page.html");
}
question_turn = "player1";
answer_turn = "player2";
function check(){
    get_answer = document.getElementById("input_check_box").value;
    if(get_answer == actual_answer)
    {
        if(answer_turn == "player1")
        {
            update_player1_score = player1_score +1;
            document.getElementById("player1_score").innerHTML = update_player1score;
        }   
        else
        {   update_player2_score = player2_score +1;
            document.getElementById("player2_score").innerHTML = update_player2score;
        }
}
        
if (question_turn= "player1")
{
     question_turn = "player2
     docunent.getElementById("player_question").innerHTML = "Question Turn - "+ player2_name ;
}
else
{
     question_turn = "player1"
     docunent.getElenentById("player_question").innertHTML = "Question Turn - "+ player1_nane ;
}

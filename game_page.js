player1name= localStorage.getItem("playr_1_name");
player2name= localStorage.getItem("player_2_name");

player2score = 0;
player1score = 0;

document.getElementById("player_1_name").innerHTML=player1name+"-";
document.getElementById("player_2_name").innerHTML=player2name+"-";

document.getElementById("player_1_score").innerHTML=player1score;
document.getElementById("player_2_score").innerHTML=player2score;

document.getElementById("player_question").innerHTML="question- "+player1name;
document.getElementById("player_answer").innerHTML="answer- "+player2name;

function send() {
 get_word = document.getElementById("word").value;
 word = get_word.toLowerCase();


 charAt1 = word.charAt (1);

 length_divide_2 = Math.floor(word.length/2);
 charAt2 = word.charAt(length_divide_2);

 length_minus_1 = word.length - 1;
 charAt3 = word.charAt(length_minus_1);
 console.log(charAt3);

 remove_charAt1 = word.replace(charAt1, "_");
 remove_charAt2 = remove_charAt1.replace(charAt2, "_");
 remove_charAt3 = remove_charAt2.replace(charAt3, "_");
 console.log(remove_charAt3);
 question_word = "<h4 id='word_display'>q."+remove_charAt3+"</h4>";
input_box = "<br>Answer : <input type='text' id = 'ICheckB'>";
check_button = "<br><br><button class= 'btn btn-info' onclick='check()'>check</button>";
row = question_word + input_box + check_button ;
document.getElementById("output").innerHTML = row;
document.getElementById("word").value = "";
}

questionturn = "player1";
answerturn = "player2";

function check() 
{
    get_answer = document.getElementById("ICheckB").value;
    answer = get_answer.toLowerCase();
    if(answer == word)
    {
    if(answerturn == "player1")
    {
    player1score = player1score + 1;
document.getElementById("player_1_score").innerHTML= player1score;
    }
    else
    {
        player2score = player2score + 1;
        document.getElementById("player_2_score").innerHTML= player2score;
    }
    }
if ( questionturn = "player1")
{
    questionturn = "player2";
    document.getElementById("player_question").innerHTML="question- "+player2name;
}
else
{
    questionturn = "player1";
    document.getElementById("player_question").innerHTML="question- "+player1name;
}
if ( answerturn = "player1")
{
    answerturn = "player2";
    document.getElementById("player_answer").innerHTML="answer- "+player2name;
}
else
{
    answerturn = "player1";
    document.getElementById("player_answer").innerHTML="answer- "+player1name;
}
document.getElementById("output").innerHTML="";
}
function login()
{
player_1 = document.getElementById("gameputplayer1").value;
player_2 = document.getElementById("gameputplayer2").value;

localStorage.setItem("playr_1_name",player_1);
localStorage.setItem("player_2_name",player_2);

window.location.replace("game_page.html");
}
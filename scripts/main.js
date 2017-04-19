alert("Welcome to the game");

var userName = prompt("What is your first name?").toUpperCase();

if(userName === CHRISTOPHER || userName === CHRIS){
    alert("Weird. That's the name of the person this game is for.");
}
else {
    alert("The name " + userName + " sucks, but ok I guess you didn't choose it.");
}

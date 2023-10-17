//Berry information
var berries = 0;
var berriesPerSecond = 0;
var berriesPerClick = 1;

//Cost of each crew member
var chopperCost = 10;
var namiCost = 100;
var brookCost = 500;
var frankyCost = 1000;
var usoppCost = 10000;
var robinCost = 50000;
var sanjiCost = 100000;
var jinbeCost = 1000000;
var zoroCost = 10000000;
var luffyCost = 1000000000;

//Level of each crew member
var chopper = 0;
var nami = 0;
var brook = 0;
var franky = 0;
var usopp = 0;
var robin = 0;
var sanji = 0;
var jinbe = 0;
var zoro = 0;
var luffy = 0;

//Every click
function increment(){
    berries += berriesPerClick;
    document.getElementById("showBerries").innerText = berries;

    //Gol D. Roger's Bounty = 5,564,800,000 Berries
    if(berries >= 5564800000){
        document.getElementById("gameOver").innerText = "Monkey D. Luffy has obtained the One Piece and become the King of the Pirates!";
    }
}

//Every second
setInterval(function(){
    berries += berriesPerSecond;
    document.getElementById("showBerries").innerText = berries;
}, 1000)


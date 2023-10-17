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
var luffyCost = 100000000;

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

//Buy buttons
function buyChopper(){
    if(berries >= chopperCost){
        berries -= chopperCost;
        document.getElementById("showBerries").innerText = berries;
        chopper++;
        document.getElementById("chopperNum").innerText = chopper;
        chopperCost *= 2;
        document.getElementById("chopperCost").innerText = chopperCost;
        berriesPerSecond += 1;
        document.getElementById("showBerriesPerSecond").innerText = berriesPerSecond;
    } else {
        alert("You don't have enough berries!");
    }
}

function buyNami(){
    if(berries >= namiCost){
        berries -= namiCost;
        document.getElementById("showBerries").innerText = berries;
        nami++;
        document.getElementById("namiNum").innerText = nami;
        namiCost *= 2;
        document.getElementById("namiCost").innerText = namiCost;
        berriesPerClick += 10;
        document.getElementById("showBerriesPerClick").innerText = berriesPerClick;
    } else {
        alert("You don't have enough berries!");
    }
}

function buyBrook(){
    if(berries >= brookCost){
        berries -= brookCost;
        document.getElementById("showBerries").innerText = berries;
        brook++;
        document.getElementById("brookNum").innerText = brook;
        brookCost *= 2;
        document.getElementById("brookCost").innerText = brookCost;
        berriesPerSecond += 25;
        document.getElementById("showBerriesPerSecond").innerText = berriesPerSecond;
    } else {
        alert("You don't have enough berries!");
    }
}

function buyFranky(){
    if(berries >= frankyCost){
        berries -= frankyCost;
        document.getElementById("showBerries").innerText = berries;
        franky++;
        document.getElementById("frankyNum").innerText = franky;
        frankyCost *= 2;
        document.getElementById("frankyCost").innerText = frankyCost;
        berriesPerClick += 1000;
        document.getElementById("showBerriesPerClick").innerText = berriesPerClick;
    } else {
        alert("You don't have enough berries!");
    }
}

function buyUsopp(){
    if(berries >= usoppCost){
        berries -= usoppCost;
        document.getElementById("showBerries").innerText = berries;
        usopp++;
        document.getElementById("usoppNum").innerText = usopp;
        usoppCost *= 2;
        document.getElementById("usoppCost").innerText = usoppCost;
        berriesPerSecond += 100;
        document.getElementById("showBerriesPerSecond").innerText = berriesPerSecond;
    } else {
        alert("You don't have enough berries!");
    }
}

function buyRobin(){
    if(berries >= robinCost){
        berries -= robinCost;
        document.getElementById("showBerries").innerText = berries;
        robin++;
        document.getElementById("robinNum").innerText = robin;
        robinCost *= 2;
        document.getElementById("robinCost").innerText = robinCost;
        berriesPerClick += 1000;
        document.getElementById("showBerriesPerClick").innerText = berriesPerClick;
    } else {
        alert("You don't have enough berries!");
    }
}

function buySanji(){
    if(berries >= sanjiCost){
        berries -= sanjiCost;
        document.getElementById("showBerries").innerText = berries;
        sanji++;
        document.getElementById("sanjiNum").innerText = sanji;
        sanjiCost *= 2;
        document.getElementById("sanjiCost").innerText = sanjiCost;
        berriesPerSecond += 10000;
        document.getElementById("showBerriesPerSecond").innerText = berriesPerSecond;
    } else {
        alert("You don't have enough berries!");
    }
}

function buyJinbe(){
    if(berries >= jinbeCost){
        berries -= jinbeCost;
        document.getElementById("showBerries").innerText = berries;
        jinbe++;
        document.getElementById("jinbeNum").innerText = jinbe;
        jinbeCost *= 2;
        document.getElementById("jinbeCost").innerText = jinbeCost;
        berriesPerClick += 25000;
        document.getElementById("showBerriesPerClick").innerText = berriesPerClick;
    } else {
        alert("You don't have enough berries!");
    }
}

function buyZoro(){
    if(berries >= zoroCost){
        berries -= zoroCost;
        document.getElementById("showBerries").innerText = berries;
        zoro++;
        document.getElementById("zoroNum").innerText = zoro;
        zoroCost *= 2;
        document.getElementById("zoroCost").innerText = zoroCost;
        berriesPerSecond += 50000;
        document.getElementById("showBerriesPerSecond").innerText = berriesPerSecond;
    } else {
        alert("You don't have enough berries!");
    }
}

function buyLuffy(){
    if(berries >= luffyCost){
        berries -= luffyCost;
        document.getElementById("showBerries").innerText = berries;
        luffy++;
        document.getElementById("luffyNum").innerText = luffy;
        luffyCost *= 2;
        document.getElementById("luffyCost").innerText = luffyCost;
        berriesPerClick += 100000000;
        document.getElementById("showBerriesPerClick").innerText = berriesPerClick;
    } else {
        alert("You don't have enough berries!");
    }
}
"use strict";
var i = 0;
class Ship
{
    constructor()
    {
        this.health = 100;
        this.shield = 100;
        this.armor = 100;
        this.speed = 10;
        this.weapon = 1;
        console.log("Ship created: " + this.health);
    }
}

class Player extends Ship
{
    
}

class Enemy extends Ship
{
    
}

function createShip() {
    var ship = new Ship();
    console.log("New ship created: " + ship.health);
    return ship;
}

function gameLoop()
{
    i = i + 1;
    console.log(i);
}

// game loop
window.setInterval(gameLoop, 100);
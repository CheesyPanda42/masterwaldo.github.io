"use strict";
var board = document.createElement("TABLE");
var count = 0;

function setup()
{
    for (var r = 0; r < 5; r++)
    {
        var row = board.insertRow(r);
        for(var c = 0; c < 5; c++)
        {
            var butt = document.createElement("input");
            butt.type = "button";
            butt.value = "Hi";
            butt.onclick = function(){this.value=r*c; console.log("Clicked!");};
            var cell = row.insertCell(c);
            cell.appendChild(butt);
        }
    }
    
    document.body.appendChild(board);
}


function gameLoop()
{

}

// game loop
window.setInterval(gameLoop, 100);
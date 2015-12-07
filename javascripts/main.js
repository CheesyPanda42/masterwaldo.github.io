//global variables :O
var clicks = 0;
var clickers = 0;
var doubleClickers = 0;

// click generator
function clickMe(number)
{
	clicks += number;
}


function buyItem(item, number)
{
	var itemCost = getCost(item);
	console.log(itemCost)
	if(clicks >= itemCost)
	{
		switch(item)
		{
			case "clicker":
				clickers += 1;
				break;
			case "doubleClicker":
				doubleClickers += 1;
				break;
			default:
				break;
		}
		clicks -= itemCost;
	};
}

// figure out the cost of the item bought
function getCost(item)
{
	var itemCost = 1;
	var multiplier = 1;
	switch (item)
	{
		case "clicker":
			multiplier = 10;
			itemCost = Math.floor(multiplier * Math.pow(1.1, clickers));
			break;
		case "doubleClicker":
			multiplier = 100;
			itemCost = Math.floor(multiplier * Math.pow(1.1, doubleClickers));
			break;
		default:
			break;
	}
	
	return itemCost;
}

// called whenever an item is bought, updates all fields
function updateInfo()
{
	var intClicks = clicks.toFixed(0);
	// update building info
	console.log(intClicks);
	document.getElementById('totalClicks').innerHTML = intClicks;
	document.getElementById('totalClickers').innerHTML = clickers;
	document.getElementById('totalDoubleClickers').innerHTML = doubleClickers;
	
	// update cost info
	document.getElementById('clickerCost').innerHTML = Math.floor(10 * Math.pow(1.1, clickers));
	document.getElementById('doubleClickerCost').innerHTML = Math.floor(10 * Math.pow(1.1, doubleClickers));
	
}

// game loop
window.setInterval(function()
{
	// generate clicks
	console.log("clicks = " + clicks)
	clickMe(clickers * .01);
	clickMe(doubleClickers * .1);
	
	// determine CPS
	document.getElementById('clicksPerSec').innerHTML = (clickers * 0.01) + (doubleClickers * 0.1);
	
	
	// update info
	updateInfo();
}, 100);
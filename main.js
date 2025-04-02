import { Wheel } from "./wheel.js";
// 1. Configure the wheel's properties:


// 2. Decide where you want it to go:
const container = document.querySelector('.right');

document.getElementById("input").value = "Hannes,Lukas,Max,Timo,Gortzen,Simon,Jan,Fred,Lars,Matze,Moritz,Eric"

// 3. Create the wheel in the container and initialise it with the props:
const wheel = new Wheel(container, {items: [{label: "text"}]});
wheel.isInteractive = false
var img = new Image() 
img.src = "./overlay.svg"
wheel.overlayImage = img
wheel.radius= 0.84
wheel.itemLabelColors= ['#fff']
wheel.itemLabelBaselineOffset= -0.07
wheel.itemLabelFont= 'Amatic SC'
wheel.itemLabelFontSizeMax= 55
wheel.itemBackgroundColors = ['#ffc93c', '#66bfbf', '#a2d5f2', '#515070', '#43658b', '#ed6663', '#d54062' ]
wheel.rotationSpeedMax= 500
wheel.rotationResistance= -100
wheel.lineWidth= 1
wheel.lineColor= '#fff'
var d =  document.getElementById("input").value.split(",")
	var val = d.map(label => ({"label": label }))
		wheel.items = val
	
document.getElementById("input").addEventListener("input", () => {
	var d =  document.getElementById("input").value.split(",")
	var val = d.map(label => ({"label": label }))
		wheel.items = val
	}, true)
var spinNumber = 0
var order = ["Fred", "Moritz", "Matze",  "Lukas", "Gortzen", "Lars", "Simon", "Eric", "Hannes", "Jan", "Timo", "Max"] 

var index

document.getElementById("spin").addEventListener('click', () => {
 if (spinNumber != 0){
	console.log(index)
	var c = wheel.items.splice(index, 1)
	console.log(c)
	wheel.items = wheel.items
}	
	var indexName = order[spinNumber]
	index = wheel.items.map((e)=> {return e["label"]}).indexOf(indexName)
	if (index === -1) {
		alert("error")
		spinNumber++
		return
}
console.log(index, indexName)
	wheel.spinToItem(index, 1500, false, 2)
	setTimeout(() => {
	alert(indexName +" was selected")
	}, 2000)
	spinNumber++
}, false);

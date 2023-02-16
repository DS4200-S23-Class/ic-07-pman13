/*
D3 Class Demo 1
Prof. Mosca 
Modified: 02/13/2023
*/


const FRAME_HEIGHT = 200;
const FRAME_WIDTH = 500;
const MARGINS = {left: 50, right: 50, top: 50, bototm: 50};


// add frame
const FRAME1 =
d3.select("#vis1")
	.append("svg")
		.attr("height", FRAME_HEIGHT)
		.attr("width", FRAME_WIDTH)
		.attr("class", "frame");


// put a circle in the frame

FRAME1.append("line")
			.attr("x1", 50 + MARGINS.left)
			.attr("y1", 50 + MARGINS.top)
			.attr("x2", 80)
			.attr("y2", 50)
			.attr("id", "axis");


// add data
const data1 = [55000, 48000, 27000, 66000, 90000];

// add points based on data
FRAME1.selectAll("points")
		.data(data1) // a list of data
		.enter() // initiates a loop to iterate over above list
		.append("circle")
			.attr("cx", (d) => {return d + MARGINS.left;}) // the paramter to be operated on in the loop
			.attr("cy", 0 + MARGINS.top)
			.attr("r", 20)
			.attr("class", "point");

























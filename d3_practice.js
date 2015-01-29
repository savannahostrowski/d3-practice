// var w = 500;
// var h = 100;
// var padding = 2;
// var dataset = [5, 10, 15, 20, 25, 5, 10, 15, 20, 25];
// var svg = d3.select("body")
// 			.append("svg")
// 			.attr("width", w)
// 			.attr ("height", h);

// //color selector
// function colourPicker(v){
// 	if (v<=20) {return "#666666";}
// 	else if (v>20) {return "#FF0033";}
// }


// // i is the index/position of element, d is the dataset being passed in
// svg.selectAll("rect")
// 	.data(dataset)
// 	.enter()
// 	.append("rect")
// 		.attr({
// 			x: function(d, i){return (i * (w / dataset.length));},
// 		 	y: function(d){return h - (d * 4);},
// 			width: w / dataset.length - padding,
// 			height: function(d){return (d * 4);},
// 			fill: function(d){return colourPicker(d);}
// 		});
// // labels for bar chart		
// svg.selectAll("text")
// 	.data(dataset)
// 	.enter()
// 	.append("text")
// 	.text (function (d) { return d;})
// 	.attr({
// 		"text-anchor":"middle",
// 		x: function(d, i){return i * (w / dataset.length) + 
// 			(w / dataset.length - padding) / 2;},
// 		y:function(d){return h - (d * 4) + 14;},
// 		"font-family": "sans-serif",
// 		"font-size": 12,
// 		"fill": "#ffffff"
// 	});

// line chart
var h = 500;
var w = 1000;

monthlySales = [
	{"month":10, "sales": 100},
	{"month":20, "sales": 130},
	{"month":30, "sales": 250},
	{"month":40, "sales": 300},
	{"month":50, "sales": 260},
	{"month":60, "sales": 180},
	{"month":70, "sales": 120},
	{"month":80, "sales": 130}
];

var lineFun = d3.svg.line()
.x (function (d) { return d.month * 3; })
.y (function (d) { return h - d.sales; })
.interpolate("linear");

var svg = 
d3.select("body").append("svg").attr({
	width:w, height:h});

var viz = svg.append("path")
.attr({
	d: lineFun(monthlySales),
	"stroke":"purple",
	"stroke-width": 2,
	"fill": "none"
	});

// line graph labels
var labels = svg.selectAll("text")
.data(monthlySales)
.enter()
.append("text")
.text (function (d) { return d.sales; })
.attr({
	x:function(d){ return d.month * 3; },
	y: function (d) { return h-d.sales;},
	"font-size": "12px",
	"font-family":"sans-serif",
	"fill": "#666666",
	"text-anchor": "start",
	"dy": ".35em",
	"font-weight": function (d, i){
		if (i === 0 || i == (monthlySales.length - 1)){ // first or last data elem
			return "bold";}
		else {
			return "normal";}
		}
		});
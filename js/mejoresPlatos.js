console.log("funciono");

var categories = ['','Arroz con pollo','Arroz con carne','lasaña'];
var dollars = [100,100,100];
var colors = ['#0000b4','#0082ca','#0094ff'];

var rango = 10;

var grid = d3.range(rango).map(function(i){
			return {'x1':0,'y1':0,'x2':0,'y2':480};
		});

var tickVals = grid.map(function(d,i){
			if(i>0){ return i*10; }
			else if(i===0){ return "100";}
		});



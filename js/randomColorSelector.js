/*
this sections selects a random color.
*/
function randomRGB(){
	return Math.floor(Math.random() * 256 );
}

function randomColor(){
	var color = 'rgb(';
	color += randomRGB() + ',';
	color += randomRGB() + ',';
	color += randomRGB() + ')';
	return color;
}

///end random color

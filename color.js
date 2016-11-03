//Declare the Color Object with our new keyword below here.
let Color = (g,r,b)
let red = r
let green = g
let blue = b
/*
** rgb is an array 9 that hold the color values.
** first is red -> R, then green -> G, and blue -> B
** Example
*/

Color.isColor = function(rgb){
  //each color must be between 0 and 255. Also can be equal.

  let redworks = (rgb[0] >= 0) && (rgb[0] <= 255);
  let greenworks = (rgb[1] >= 0) && (rgb[1] <= 255);
  let blueworks = (rgb[2] >= 0) && (rgb[2] <= 255);

  if(redworks && greenworks && blueworks){
    return true;
  }
  else{
    return false;
  }
};

Color.redIntensity = function(rgb){
 var r = rgb[0]/255*100
  r = math.round(r)
  return r;
};

//greenIntensity
Color.greenIntensity = function(rgb){
 var g = rgb[1]/255*100
  r = math.round(g)
  return g;
};

//blueIntensity
Color.blueIntensity = function(rgb){
  var b = rgb[2]/255*100
   r = math.round(b)
   return b;
};

//brightness
var bright = rgb[0]+rgb[1]+rgb[2]/3
 return bright;

//complement
var comp = []

for(var c = 0; c < 3;c++)

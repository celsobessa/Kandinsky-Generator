var screenWidth = window.innerWidth;
var screenHeight = window.innerHeight;
var elements = {
    triangles: 4,
    rectangles:8,
    ellipses: 3,
    points: 10,
};
var anchors = {
    1: [10,10],
    2: [50,90]
};
let colorPalette = [
    '0, 0, 0',
    '192, 192, 192',
    '128, 128, 128',
    '255, 255, 255',
    '128, 0, 0',
    '255, 0, 0',
    '128, 0, 128',
    '255, 0, 255',
    '0, 128, 0',
    '0, 255, 0',
    '128, 128, 0',
    '255, 255, 0',
    '0, 0, 128',
    '0, 0, 255',
    '0, 128, 128',
    '0, 255, 255'
];
var n = elements.triangles+elements.rectangles+elements.ellipses+elements.points;
console.log(n);
var j = screenWidth/ 2;
var x, y;

function randomNumber(max = 1, min = 0) {
  if(min >= max) {
    return max;
  }

  return Math.floor(Math.random() * (max - min) + min);
}

function setup()
{
	//create your canvas here
    createCanvas(screenWidth, screenHeight);
    noLoop();
}

function draw()
{
    for (i = 0; i < n; i++) {
        x = constrain(Math.floor(Math.random() * screenWidth), 10, screenWidth * 0.9);
        console.log(x);
        y = constrain(Math.floor(Math.random() * screenHeight), 10, screenHeight * 0.9);
        console.log(y);
        if(elements.triangles > 0) {
        console.log('triangles=' + elements.triangles);
            fill(Math.random() * 255, Math.random() * 255, Math.random() * 255, Math.random() * 255);
            generateTriangle(x,y);
            elements.triangles--;
        }
        console.log('rectangles=' + elements.rectangles);
        if(elements.rectangles > 0) {
            //rotate(1);
            generateStroke();
            generateFill();
            generateRectangle(x,y);
            elements.rectangles--;
        }
        console.log('ellipses=' + elements.ellipses);
        if(elements.ellipses > 0) {
            //rotate(1);
            generateStroke();
            generateFill();
            generateEllipse(x,y);
            elements.ellipses--;
        }
        console.log('points=' + elements.points);
        if(elements.points > 0) {
            //rotate(1);
            generateStroke(true);
            generatePoint(x,y);
            elements.points--;
        }
    }
}

function generateTriangle(x, y) {
    let ax = constrain(x, 20, screenWidth * 0.8 - 20);
    let ay = constrain(y, 20, screenHeight * 0.8 - 20);
    let bx = constrain(Math.floor(Math.random() * screenWidth), 20, screenWidth * 0.8 - 20);
    let by = constrain(Math.floor(Math.random() * screenHeight),20, screenHeight * 0.8 - 20);
    console.log(bx);
    console.log(by);
    let cx = constrain(Math.floor(Math.random() * screenWidth), 20, screenWidth * 0.8 - 20);
    let cy = constrain(Math.floor(Math.random() * screenHeight),20, screenHeight * 0.8 - 20);
    console.log(cx);
    console.log(cy);
    triangle(ax/2, ay/2, bx/2, by/2, cx/2, cy/2);
}

function generateRectangle(x, y) {
    let width = Math.floor(Math.random() * screenWidth) - x;
    let height = Math.floor(Math.random() * screenHeight) - y;
    console.log(width);
    console.log(height);
    width = width < 0 ? (screenWidth -x ) / 2 : width ;
    height = height < 0 ? (screenHeight - y ) / 2 : height;
    console.log(width);
    console.log(height);
    width = width > screenWidth ? (screenWidth -x ) / 2 : width;
    height = height > screenHeight ? (screenHeight - y ) / 2  : height;
    console.log(width);
    console.log(height);
    rect(x, y, width,height);
}

function generateEllipse(x, y) {
    let width = constrain(Math.floor(Math.random() * screenWidth), 10, screenWidth * 0.5);
    x = constrain(x, width/2 + 10, screenWidth - ( width / 2 + 10 ));
    y = constrain(y,height/2 + 10, screenHeight - ( height/ 2 + 10 ));
    width = constrain(width, min(width, height), height * 0.5);
    ellipse(x, y , width, width);
}
function generatePoint(x, y) {
    let width = Math.floor(Math.random() * screenWidth) - x;
    let height = Math.floor(Math.random() * screenHeight) - y;
    console.log(width);
    console.log(height);
    width = width < 0 ? (screenWidth -x ) / 2 : width ;
    height = height < 0 ? (screenHeight - y ) / 2 : height;
    console.log(width);
    console.log(height);
    width = width > screenWidth ? (screenWidth -x ) / 2 : width;
    height = height > screenHeight ? (screenHeight - y ) / 2  : height;
    console.log(width);
    console.log(height);
    point(x,y);
}

function generateFill(){
    let opacity = constrain(Math.floor(Math.random() * 11), 2, 9);
    fill(`rgba(${colorPalette[Math.floor(Math.random()*16)]}, 0.${opacity})`);
}

function generateStroke( forceStroke = null ){
    let minimumWidth = 0;
    let maximumWidth = 20;
    if( forceStroke === true) {
        minimumWidth = 5;
        maximumWidth = 100;
    }
    stroke(Math.random() * 255, Math.random() * 255, Math.random() * 255, Math.random() * 255); // Change the color
    strokeWeight(constrain(Math.floor(Math.random() * 101),minimumWidth,maximumWidth)); // Make the points 10 pixels in size
}

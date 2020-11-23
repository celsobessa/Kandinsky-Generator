var screenWidth = window.screen.width;
var screenHeight = window.screen.height;
var elements = {
    triangles: 2,
    rectangles:5,
    ellipses: 10,
    points: 20,
};
var anchors = {
    1: [10,10],
    2: [50,90]
};
var n = elements.triangles+elements.rectangles+elements.ellipses+elements.points;
console.log(n);
var j = screenWidth/ 2;
var x, y;


function setup()
{
	//create your canvas here
    createCanvas(screenWidth, screenHeight);
    noLoop();
}

function draw()
{
    for (i = 0; i < n; i++) {
        x = Math.floor(Math.random() * screenWidth);
        console.log(x);
        y = Math.floor(Math.random() * screenHeight);
        console.log(y);
        //translate(x, y);
        //rotate(2.95);
        //rect(x/2, y, 300, 300);
        //translate(j, j);
        //rect(100, 100, 200, 200);
        if(elements.triangles > 0) {
        console.log('triangles=' + elements.triangles);
            fill(Math.random() * 255, Math.random() * 255, Math.random() * 255, Math.random() * 255);
            generateTriangle(x,y);
            elements.triangles--;
        }
        console.log('rectangles=' + elements.rectangles);
        if(elements.rectangles > 0) {
            //rotate(1);
            fill(Math.random() * 255, Math.random() * 255, Math.random() * 255, Math.max(Math.random() * 255, 100));
            generateRectangle(x,y);
            elements.rectangles--;
        }
        console.log('ellipses=' + elements.ellipses);
        if(elements.ellipses > 0) {
            //rotate(1);
            fill(Math.random() * 255, Math.random() * 255, Math.random() * 255, Math.random() * 255);
            generateEllipse(x,y);
            elements.ellipses--;
        }
        console.log('points=' + elements.points);
        if(elements.points > 0) {
            //rotate(1);
            stroke(Math.random() * 255, Math.random() * 255, Math.random() * 255, Math.random() * 255); // Change the color
            strokeWeight(Math.max(Math.random() * 20, 5)); // Make the points 10 pixels in size
            generatePoint(x,y);
            strokeWeight(Math.floor(Math.max(Math.random() * 10))); // Make the points 10
            elements.points--;
        }
    }
}

function generateTriangle(x, y) {
    let ax = x;
    let ay = y;
    let bx = Math.floor(Math.random() * screenWidth);
    let by = Math.floor(Math.random() * screenHeight);
    console.log(bx);
    console.log(by);
    let cx = Math.floor(Math.random() * screenWidth);
    let cy = Math.floor(Math.random() * screenHeight);
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
    ellipse(x, y, width,height, Math.random() * 5);
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


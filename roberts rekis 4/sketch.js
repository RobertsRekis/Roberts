
let x = 1;
function setup(){
createCanvas(windowWidth, windowHeight, WEBGL);



}

function draw (){

  background(255,36,30)

//rotateX(x);
push();
//x=x+0.1;
rotateY(10);
rotateZ(15);


translate(400,200);
fill(48,140,200,20)
  box(50);
pop();



push();
fill(200,150,20);
translate(100,50);
  sphere(50);
pop();

}

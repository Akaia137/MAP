let jsonobj;
let btns=[];
let n=0;
function preload(){
  jsonobj = loadJSON('data.json');
  img = loadImage('map.jpg')
}
function setup() {
  createCanvas(360 , 180);
  console.log(jsonobj);
  console.log(jsonobj.metadata.count);
  console.log(jsonobj.features[0].geometry.coordinates);
  console.log(jsonobj.features[0].geometry.coordinates);
  
  jsonobj.features.forEach((v)=>{
    let lat = v.geometry.coordinates[0];
    let lang = v.geometry.coordinates[1];
    let mag =  v.properties.mag;
    noStroke();
    fill(255,0,0,mag*mag*2);
    btns.push(new btn((lat+180),180-(lang+90),mag*mag*1));
    //circle(lat+180,180-(lang+90),mag*mag*1.3);
  });
}

function draw() {
  background(220);
  image(img,0,0,360,180);
  btns.forEach((b)=>{
    b.display();
    
  })
  
}

class btn{
  constructor(x,y,size){
    this.x = x;
    this.y = y;
    this.size = size;
  }
  display(){
    if( mouseX>this.x-this.size/2 &&
      mouseX<this.x+this.size/2 &&
      mouseY>this.y-this.size/2 &&
      mouseY<this.y+this.size/2 ){
      fill(255,0,0,this.size*2);
      stroke(color(255, 200,200));
      strokeWeight(1);
      
  }else{
    fill(100,30,this.size*4,this.size*2);
    noStroke();
    }
    n=n+0.0005
    circle(this.x,this.y,this.size+sin(n));
  }
}


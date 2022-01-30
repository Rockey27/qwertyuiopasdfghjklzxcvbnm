noseX=0;
nosey=0;
function preload() {
    clown_nose = loadImage=('https://i.postimg.cc/pTzTwz4K/clown-nose.pngs');
}

function setup() {
    canvas =createCanvas(300, 300);
    canvas.center();
    

}



function draw() {
image(video, 0, 0, 300, 300);
fill(255,0,0);
stroke(255,0,0)
circle(noseX, noseY, 20);
image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
    save('myFliterImage.png');
}





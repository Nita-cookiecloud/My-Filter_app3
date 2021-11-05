noseX = 0;
noseY = 0;


function preload(){
    clown_nose = loadImage('https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.stickpng.com%2Fimg%2Fclothes%2Faccessories%2Fred-nose-clown&psig=AOvVaw1rph6OZb0hXrUvia8ZMGCO&ust=1636163707932000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNja-_eOgPQCFQAAAAAdAAAAABAF')
}

function setup() {
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function draw(){
    image(video,0,0, 300, 300);
   fill(255,0,0);
    stroke(255,0,0);
    circle(noseX, noseY, 20);
    image(clown_nose, noseX, noseY, 30, 30);
}

function take_snapshot(){
   save('myFilterImage.png');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
       noseX = results[0].pose.nose.x -5;
       noseY = results[0].pose.nose.y -5;
    }
}
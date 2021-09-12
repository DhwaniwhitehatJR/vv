noseX=0;
noseY=0;
diffrence=0;
rightWristX=0;
leftWristX=0;
function setup(){
    video= createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,500);
    canvas.position(560,160);
    poseNet=ml5.poseNet(video,modelLoded);
    poseNet.on('pose',gotPoses);
}
function modelLoded() {
console.log('poseNet is intialized');
}
function gotPoses(results){
if(results.length>0)
{
 console.log(results);
}
}
function draw(){
    
}
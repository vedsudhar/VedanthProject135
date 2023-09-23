noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas = createCanvas(400, 400);
    canvas.position(560, 150);

    poseNet = ml5.poseNet(video, modelLoaded);//Initialization
    poseNet.on('pose', gotPoses);//Execution
}

function draw()
{
    background('#eedd82');
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}
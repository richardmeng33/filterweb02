function preload()
 {

 }

 function setup()
 {
    picture = createCanvas(500,400)
    picture.position(500, 200)
    video = createCapture(VIDEO)
    video.hide()
    posnet = ml5.poseNet(video, modelloaded)
 }

function modelloaded()
{
   console.log("model has loaded")
}

 function draw()
 {
    image(video, 0, 0, 500, 400)
 }
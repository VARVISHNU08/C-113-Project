function preload(){

}

function setup(){
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);

    video.hide();

    tint_color = "";
}

function draw(){
    image(video, 245, 90, 300, 300);
    circle(600, 440, 60);
    rect(590, 60, 20, 350);
    circle(600, 50, 60);
    rect(175, 35, 400, 20);
    circle(155, 40, 60);
    rect(150, 65, 20, 350);
    circle(155, 440, 60);
    rect(175, 425, 400, 20);
    fill('red');
}

function photo(){
    save("Photo.png");
}
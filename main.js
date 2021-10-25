left_wrist = 0;
right_wrist = 0;
lenght_between_both_wrists = 0;
text_from_inp = document.getElementById("text_inp").value;
function prelaod() {

}

function setup() {
    video = createCapture(VIDEO);
    video.position(900, 322);
    canvas = createCanvas(850, 330);
    canvas.position(40, 322);
    oned_model = ml5.poseNet(video, modelloaded);
    oned_model.on('pose', gotpose);
    console.log("Setup OK");
}

function draw() {
    background('#13085c');
    fill("#ffffff");
    textSize(lenght_between_both_wrists);
    text(text_from_inp, 10, 330);
    console.log("Draw OK");
}

function modelloaded() {
    console.log("Model Loaded")
}

function gotpose(result) {
        console.log("GotPose");
        if (result.length > 0) {
            console.log(result);
            left_wrist = result[0].pose.leftWrist.x;
            right_wrist = result[0].pose.rightWrist.x;
            lenght_between_both_wrists = floor(left_wrist - right_wrist);
        }
    }   

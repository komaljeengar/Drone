

var speed = 0;
var turnSpeed = 0;
var multiplier = 1;
var score = 0;

quadcopter.detectCollisionsWith(Lightning_bolt, function (collidedObject) {
    Lightning_bolt.setVisible(false);
    multiplier = 2;
    Text2D.setText('score: '  + (++score));
}); 

quadcopter.detectCollisionsWith(Star, function (collidedObject) {
    Star.setVisible(false);
    multiplier = 2.5;
    Text2D.setText('score: ' + (++score));
}); 

quadcopter.detectCollisionsWith(Heart, function (collidedObject) {
    Heart.setVisible(false);
    multiplier = 2.7;
    Text2D.setText('score: ' + (++score));
}); 

quadcopter.detectCollisionsWith(Key, function (collidedObject) {
    Key.setVisible(false);
    multiplier = 3;
    Text2D.setText('score: ' + (++score));
}); 

quadcopter.detectCollisionsWith(Crown, function (collidedObject) {
   Crown.setVisible(false);
    multiplier = 3.5;
    Text2D.setText('score: ' + (++score));
}); 

quadcopter.detectCollisionsWith(Vinyl_white_label_thewavevr, function (collidedObject) {
    Vinyl_white_label_thewavevr.setVisible(false);
    multiplier = 3.7;
    Text2D.setText('score: ' + (++score));
}); 

quadcopter.detectCollisionsWith(Creepy_clown, function (collidedObject) {
    Creepy_clown.setVisible(false);
    multiplier = 4;
    Text2D.setText('score: ' + (++score));
});


Hatch.createTimer('T1', 17, function () {
    moveUpDown();
    turnleftRight();
    moveForward();

});


Hatch.onKeyDown(function (event) {
    if (event.key == "ArrowUp") {
        speed = 0.1;
    }
    else if (event.key == "ArrowDown") {
        speed = -0.1;
    }
    else if (event.key == "ArrowLeft") {
        turnSpeed = 1;
    }
    else if (event.key == "ArrowRight") {
        turnSpeed = -1;
    }

});


Hatch.onKeyUp(function (event) {
    speed =0;
    turnSpeed = 0;

});

function turnleftRight(){
    drone.setRotationY(drone.getRotationY() + turnSpeed*multiplier );
}

function moveUpDown(){
    drone.setY(drone.getY()+ speed*multiplier);
}

function moveForward(){
    drone.moveForwardForNMetres(-0.1*multiplier);
}

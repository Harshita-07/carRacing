var ball1,database,position;

function setup(){
    createCanvas(500,500);
    ball1 = createSprite(250,250,10,10);
    ball1.shapeColor = "red";
    database = firebase.database();

    var ball1Position = database.ref("ball/position");
    ball1Position.on("value",readPosition,showError)
}

function readPosition(data) {
    position = data.val();
    console.log(position.x)

    ball1.x = position.x;
    ball1.y = position.y;


}

function writePosition(x,y){

    database.ref("ball/position").set({
        "x":position.x+x,
        "y":position.y+y

    })

}

function showError() {
    console.log("errors")
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball1.x = ball1.x + x;
    ball1.y = ball1.y + y;
}

function signals(lights){
    var lights=lights.toLowerCase();
    switch(lights){
        case"red":
        console.log("stop");
        break;
        case"green":
        console.log("go");
        break;
        case"yellow":
        console.log("get ready");
        break;
        default:
            console.log("invalid inputs");
            break;
    }
}
signals("red");
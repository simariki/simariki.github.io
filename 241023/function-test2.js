function hello(){
    console.log("こんにちはこんにちは");
}
function helloSomeone(name){
    console.log(`こんにちは${name}さん`);
}
function helloCircleArea(radius){
    console.log(radius * radius * Math.PI);
}
function helloRectangleArea(width,height){
    console.log(width * height);
}

function circleArea(radius){
    return (radius * radius * Math.PI);
    //Math.PIは円周率のことである//
}

function rectangleArea(width,height){
    return (width * height);
}
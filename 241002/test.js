console.log("test.js");
console.log("これの活用方法難しそう");
console.log("ああああああ")

let variableA;//宣言
variableA = "最初の代入A";//代入
console.log(variableA);//参照

let variableB = "最初の代入B";//宣言と代入を同時にできる
console.log(variableB);

variableA= "二回目の代入A";//letで宣言した変数の中身は代入で上書きできる
console.log(variableA);

variableA = variableB;//変数に別の変数の値を代入することもできる
console.log(variableA);
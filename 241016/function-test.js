//functionの後の名前（現はMessageは自由に決めて良い）
function Message() {
    console.log("Message()が呼び出されました");
}
    function Message2(こんにちは){
        console.log(`Message2の中身は${こんにちは}です`);
    }

    function Message3(A,B,C){
    console.log(`Message3: ${A},${B},${C}`);
}
function Maths(){
    return 2021 * 1010
}

function Maths2(A1,A2){
    return A1 * A2;
}

function Maths3(B1,B2){
    return (B1 * B2) % 10;
}

function Maths4(C1,C2){
    return Math.trunc((C1 * C2) % 100 / 10);
}

let taro= {
    height: "100px",
    weight: "200px",
    name: "taro",
};
taro.color='yellow'
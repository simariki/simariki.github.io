function showModal(){
    document.querySelector(`div#modal`).innerHTML = "TEST";
}

function changeRed(){
    document.querySelector(`div#modal`).style.backgroundColor = "red";
}
function changeYellow() {
    document.querySelector(`div#modal`).style.backgroundColor = "yellow";
}
function changeGreen() {
    document.querySelector(`div#modal`).style.backgroundColor = "green";
}

function appendCircle(){
    document.querySelector(`div#modal`).innerHTML =document.querySelector(`div#modal`).innerHTML + "○";
}
function appendCross(){
    document.querySelector(`div#modal`).innerHTML = document.querySelector(`div#modal`).innerHTML + "×";
}
//解2
//document.querySelector(`div#modal`).append("○");

//解3
//document.querySelector(`div#modal`).innerHTML +="○";


function plusOne(){
   let total =Number(document.querySelector(`div#modal`).innerHTML);
   //0が文字列から数値へと型変換された
    document.querySelector(`div#modal`).innerHTML = total + 1;
}

function plusFive(){
    let total =Number(document.querySelector(`div#modal`).innerHTML);
    //0が文字列から数値へと型変換された
    document.querySelector(`div#modal`).innerHTML = total + 5;
}

function plusTen(){
    let total =Number(document.querySelector(`div#modal`).innerHTML);
    //0が文字列から数値へと型変換された
    document.querySelector(`div#modal`).innerHTML = total + 10;
}


//div#modalはHTMLに書いてあるdivタグのmodalを呼び出している（idの場合）
//div.modalの場合はclass属性の時である。※今回はdivタグが一つのみなのでidを使用した
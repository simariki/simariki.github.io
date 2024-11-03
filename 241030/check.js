function checkNumber() {
    if (Number(document.querySelector('#num').value) > 10) {
        window.alert("true");
    } else {
        window.alert("false");
    }
}



function checkAge(){
    let age = Number(document.querySelector("#age").value);
    let answer = document.querySelector("#answer");
    if(age <= 0) {
        answer.innerHTML = 'エラー';
    }else if(age < 20){
        answer.innerHTML = '未成年';
    }else if(age < 65){
        answer.innerHTML = '成人';
    }else{
        answer.innerHTML = '高齢者';
    }
}


function checkYear() {
    let year = Number(document.querySelector("#year").value);
    let answer = document.querySelector("#answer");


    if ((year % 4 ==0 && year % 100 !=0) || (year % 400 ==0)) {
        answer.innerHTML = '閏年';
    } else if (year % 100 == 0 && year % 4 ==0) {
        answer.innerHTML = '平年';
    }else
        answer.innerHTML = '平年';
}　
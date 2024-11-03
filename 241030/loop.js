function doLoop(){

    let i = 0;
    let total = 0;
    while(i <= 10000){
        total = total+ i;
        i++;
    }
    document.querySelector("#answer").innerHTML = total;
}
function doLoop2(){

    let i = 0;
    let total = 0;
    while(true){
    total = total + i;
    if(total >50000){
        document.querySelector("#answer").innerHTML = i;
        break;
    }
    i++;
    }
}


function doFizzBuzz(){
    let i = 1;
    let answer = document.querySelector("#answer")

    while(i <= 100) {
        if (i % 3 == 0 && i % 5 == 0) {
            answer.innerHTML += 'FizzBuzz<br>';
        } else if (i % 3 == 0) {
            answer.innerHTML += 'Fizz<br>';
        } else if (i % 5 == 0) {
            answer.innerHTML += 'Buzz<br>';
        } else{
            answer.innerHTML += i+'<br>';
    }
        i++;
    }
}

///+=にすることでなぜすべて表れるのかが分からない　
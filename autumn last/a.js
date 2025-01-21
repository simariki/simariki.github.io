///フェードアウトのJs
document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var splashScreen = document.getElementById("splash-screen");
        if (splashScreen) {
            splashScreen.classList.add("fade-out"); // フェードアウトを開始
            setTimeout(function() {
                splashScreen.style.display = 'none'; // 完全に非表示にする
            }, 2500); // フェードアウトが終わる1秒後に非表示
        }
    }, 1500); // 2秒後にフェードアウト開始
});


let answer =document.querySelector("#answer");
let i =0;
answer.innerHTML ="";
let html = "";
while(i < places.length){
    html += `<div class="clearfix border border-secondary me-2 p-2">
        <div class="float-start border me-2"><img src="${places[i].img}" class="photo" alt="png"></div>
        <h2>${places[i].name}</h2><br>  <h5>場所:${places[i].where}<br>営業時間:${places[i].time}</h5>
        <h5>公式サイト：<button type="Button" class="btn btn-info" onclick="window.location.href='${places[i].link}';">ここをクリック！！</button></h5>
        <br><div class="text-success"><h5>一言コメント：${places[i].comment}</h5></div>
    </div>`
    i++;
}
answer.innerHTML = `${html}`;

function All() {
    let i =0;
    answer.innerHTML ="";
    html = "";
    while(i < places.length){
        html += `<div class="clearfix border border-secondary me-2 p-2">
        <div class="float-start border me-2"><img src="${places[i].img}" class="photo" alt="png"></div>
        <h2>${places[i].name}</h2><br>  <h5>場所:${places[i].where}<br>営業時間:${places[i].time}</h5>
        <h5>公式サイト：<button type="Button" class="btn btn-info" onclick="window.location.href='${places[i].link}';">ここをクリック！！</button></h5>
        <br><div class="text-success"><h5>一言コメント：${places[i].comment}</h5></div>
    </div>`
        i++;
    }
    answer.innerHTML = `${html}`;
}


//遊び場のボタンが押されたとき
function amusement(){
    html = "";
    //html関数の初期化をすることで、前回の文をリセットする
    i = 0;
    answer.innerHTML = "";
    while (i < places.length) {
        if (places[i].purpose === "遊び場") {
            //i（0~10行）の中で、指定された名前と一致した場合に動作する
            html += `<div class="clearfix border border-secondary me-2 p-2">
        <div class="float-start border me-2"><img src="${places[i].img}" class="photo" alt="png"></div>
        <h2>${places[i].name}</h2><br>  <h5>場所:${places[i].where}<br>営業時間:${places[i].time}</h5>
        <h5>公式サイト：<button type="Button" class="btn btn-info" onclick="window.location.href='${places[i].link}';">ここをクリック！！</button></h5>
        <br><div class="text-success"><h5>一言コメント：${places[i].comment}</h5></div>
    </div>`
        }
            i++;
    }
    answer.innerHTML = `${html}`;
}

//観光のボタンが押されたとき
function tourism(){
    html = "";
    //html関数の初期化をすることで、前回の文をリセットする
    i = 0;
    answer.innerHTML = "";
    while (i < places.length) {
        if (places[i].purpose === "観光") {
            //i（0~10行）の中で、指定された名前と一致した場合に動作する
            html += `<div class="clearfix border border-secondary me-2 p-2">
        <div class="float-start border me-2"><img src="${places[i].img}" class="photo" alt="png"></div>
        <h2>${places[i].name}</h2><br>  <h5>場所:${places[i].where}<br>営業時間:${places[i].time}</h5>
        <h5>公式サイト：<button type="Button" class="btn btn-info" onclick="window.location.href='${places[i].link}';">ここをクリック！！</button></h5>
       <br><div class="text-success"><h5>一言コメント：${places[i].comment}</h5></div>
    </div>`
        }
        i++;
    }
    answer.innerHTML = `${html}`;
}

//買い物のボタンが押された場合
function shopping(){
    html = "";
    //html関数の初期化をすることで、前回の文をリセットする
    i = 0;
    answer.innerHTML = "";
    while (i < places.length) {
        if (places[i].purpose === "買い物") {
            //i（0~10行）の中で、指定された名前と一致した場合に動作する
            html += `<div class="clearfix border border-secondary me-2 p-2">
        <div class="float-start border me-2"><img src="${places[i].img}" class="photo" alt="png"></div>
        <h2>${places[i].name}</h2><br>  <h5>場所:${places[i].where}<br>営業時間:${places[i].time}</h5>
        <h5>公式サイト：<button type="Button" class="btn btn-info" onclick="window.location.href='${places[i].link}';">ここをクリック！！</button></h5>
        <br><div class="text-success"><h5>一言コメント：${places[i].comment}</h5></div>
    </div>`
        }
        i++;
    }
    answer.innerHTML = `${html}`;
}
//温泉のボタンが押されたとき
function spa(){
    html = "";
    //html関数の初期化をすることで、前回の文をリセットする
    i = 0;
    answer.innerHTML = "";
    while (i < places.length) {
        if (places[i].purpose === "温泉") {
            //i（0~10行）の中で、指定された名前と一致した場合に動作する
            html += `<div class="clearfix border border-secondary me-2 p-2">
        <div class="float-start border me-2"><img src="${places[i].img}" class="photo" alt="png"></div>
        <h2>${places[i].name}</h2><br>  <h5>場所:${places[i].where}<br>営業時間:${places[i].time}</h5>
        <h5>公式サイト：<button type="Button" class="btn btn-info" onclick="window.location.href='${places[i].link}';">ここをクリック！！</button></h5>
        <br><div class="text-success"><h5>一言コメント：${places[i].comment}</h5></div>
    </div>`
        }
        i++;
    }
    answer.innerHTML = `${html}`;
}

//その他のボタンが押された場合
function another(){
    html = "";
    //html関数の初期化をすることで、前回の文をリセットする
    i = 0;
    answer.innerHTML = "";
    while (i < places.length) {
        if (places[i].purpose === "その他") {
            //i（0~10行）の中で、指定された名前と一致した場合に動作する
            html += `<div class="clearfix border border-secondary me-2 p-2">
        <div class="float-start border me-2"><img src="${places[i].img}" class="photo" alt="png"></div>
        <h2>${places[i].name}</h2><br>  <h5>場所:${places[i].where}<br>営業時間:${places[i].time}</h5>
        <h5>公式サイト：<button type="Button" class="btn btn-info" onclick="window.location.href='${places[i].link}';">ここをクリック！！</button></h5>
        <br><div class="text-success"><h5>一言コメント：${places[i].comment}</h5></div>
    </div>`
        }
        i++;
    }
    answer.innerHTML = `${html}`;
}

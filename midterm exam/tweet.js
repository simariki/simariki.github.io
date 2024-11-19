
let answer =document.querySelector("#answer");

let i =0;
answer.innerHTML ="";
let html = "";
while(i < tweets.length){
    html += `<div class="clearfix border border-secondary me-2 p-2">
        <div class="float-start border me-2"><img src="${tweets[i].avatar}" class="tweets-photo" alt="png"></div>
        <b>${tweets[i].name}</b> ${tweets[i].message} <div class="tweets-At">${tweets[i].tweetedAt}</div>
    </div>
    </div>`
    i++;
}
answer.innerHTML = `${html}`;

function All() {
    let i =0;
    answer.innerHTML ="";
     html = "";
    while(i < tweets.length){
        html += `<div class="clearfix border border-secondary me-2 p-2">
        <div class="float-start border me-2"><img src="${tweets[i].avatar}" class="tweets-photo" alt="png"></div>
        <b>${tweets[i].name}</b> ${tweets[i].message} <div class="tweets-At">${tweets[i].tweetedAt}</div>
    </div>
    </div>`
        i++;
    }
    answer.innerHTML = `${html}`;
    }


//三郎BOTのボタンが押されたとき
function BOT(三郎BOT){
     html = "";
    //html関数の初期化をすることで、前回の文をリセットする
     i = 0;
    answer.innerHTML = "";
    while (i < tweets.length) {
        if (tweets[i].name === "三郎BOT") {
            //i（0~10行）の中で、指定された名前と一致した場合に動作する
            html += `<div class="clearfix border border-secondary me-2 p-2">
        <div class="float-start border me-2"><img src="${tweets[i].avatar}" class="tweets-photo" alt="png"></div>
        <b>${tweets[i].name}</b> ${tweets[i].message} <div class="tweets-At">${tweets[i].tweetedAt}</div>
    </div>
    </div>`
        }
        i++;
    }
    answer.innerHTML = `${html}`;
}

//太郎のボタンが押されたとき
function tarou(太郎){
     html = "";
    //html関数の初期化をすることで、前回の文をリセットする
     i = 0;
    answer.innerHTML = "";
    while (i < tweets.length) {
        if (tweets[i].name === "太郎") {
            //i（0~10行）の中で、指定された名前と一致した場合に動作する
            html += `<div class="clearfix border border-secondary me-2 p-2">
        <div class="float-start border me-2"><img src="${tweets[i].avatar}" class="tweets-photo" alt="png"></div>
        <b>${tweets[i].name}</b> ${tweets[i].message} <div class="tweets-At">${tweets[i].tweetedAt}</div>
    </div>
    </div>`
        }
        i++;
    }
    answer.innerHTML = `${html}`;
}

//次郎のボタンが押されたとき
function jiro(次郎){
     html = "";
    //html関数の初期化をすることで、前回の文をリセットする
     i = 0;
    answer.innerHTML = "";
    while (i < tweets.length) {
        if (tweets[i].name === "次郎") {
            //i（0~10行）の中で、指定された名前と一致した場合に動作する
            html += `<div class="clearfix border border-secondary me-2 p-2">
        <div class="float-start border me-2"><img src="${tweets[i].avatar}" class="tweets-photo" alt="png"></div>
        <b>${tweets[i].name}</b> ${tweets[i].message} <div class="tweets-At">${tweets[i].tweetedAt}</div>
    </div>
    </div>`
        }
        i++;
    }
    answer.innerHTML = `${html}`;
}



let answer =document.querySelector("#answer");
let html = '';
let i =0;
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
    answer.innerHTML ="";
    html = "";
    if(i < tweets.length){
        html += `<div class="clearfix border border-secondary me-2 p-2">
        <div class="float-start border me-2"><img src="${tweets[i].avatar}" class="tweets-photo" alt="png"></div>
        <b>${tweets[i].name}</b> ${tweets[i].message} <div class="tweets-At">${tweets[i].tweetedAt}</div>
    </div>
    </div>`
        i++;
    }
    answer.innerHTML = `${html}`;
    }

function BOT() {
    answer.innerHTML = "";
    html = "";
    if (tweets.length == 0) {
        html += `<div class="clearfix border border-secondary me-2 p-2">
        <div class="float-start border me-2"><img src="${tweets[0].avatar}" class="tweets-photo" alt="png"></div>
        <b>${tweets[0].name}</b> ${tweets[0].message} <div class="tweets-At">${tweets[0].tweetedAt}</div>
    </div>
    }else if(tweets.length == 4){
    <div class="clearfix border border-secondary me-2 p-2">
    <div class="float-start border me-2"><img src="${tweets[4].avatar}" class="tweets-photo" alt="png"></div>
        <b>${tweets[4].name}</b> ${tweets[4].message} <div class="tweets-At">${tweets[4].tweetedAt}</div>
    </div>
    <div class="clearfix border border-secondary me-2 p-2">
    <div class="float-start border me-2"><img src="${tweets[10].avatar}" class="tweets-photo" alt="png"></div>
        <b>${tweets[10].name}</b> ${tweets[10].message} <div class="tweets-At">${tweets[10].tweetedAt}</div>
    </div>
    </div>`
        answer.innerHTML = `${html}`;
    }
}

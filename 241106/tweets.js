let answer =document.querySelector("#answer");
let html = '';
let i =0;
while(i < tweets.length){
    html += `<li><b>${tweets[i].name}</b>: ${tweets[i].message} ${tweets[i].tweetedAt}</li>`;
    i++;
}
answer.innerHTML = `<ul>${html}</ul>`;

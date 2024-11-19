let answer =document.querySelector(`#answer`);

let i =0;
let html ='';
while(i < fruitNames.length){           //forの場合は　for(let i=0; i< fruitNames.length; i++){}
    //Array.forEachの場合　　　fruitNames.forEach(function(fruitName){
    html += `<li>${fruitNames[i]}</li>`;
    i++;
}
answer.innerHTML =`<ul>${html}</ul>`;
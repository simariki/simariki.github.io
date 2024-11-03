function doCheckAnswers(){
    let input = document.querySelector('#input_string').value;
    let answer= document.querySelector('#answer');
    let answers = Array.from(document.querySelectorAll(".answer-list li"));
    if(input.textContent == answers.forEach) {
        answer.innerHTML = '正解';
    }else{
        answer.innerHTML ='不正解';
    }
}
//期待する挙動は上記の4文を入れたら”正解”と出て、他の文字を入れたら”不正解”と出る　
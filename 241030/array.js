function doCheckAnswers() {
    let input = document.querySelector('#input_string').value;
    let answer = document.querySelector('#answer');
    let answers = Array.from(document.querySelectorAll(".answer-list li"));
    //whileで書く場合
    let i = 0;
    while (i < answers.length) {
        if (input == answers[i].innerHTML) {
            answer.innerHTML = `正解`
            break;
            //4つのうちどれかと同じであればよいので、正解が出たら実行を止めればよい
        } else
            answer.innerHTML = `不正解`
        i++;
    }

    //forで書いた場合
    for(i=0; i < answers.length; i++){
     if(input == answers[i].innerHTML){
      answer.innerHTML = `正解`
    break;
    //4つのうちどれかと同じであればよいので、正解が出たら実行を止めればよい
    }else
    answer.innerHTML =`不正解`
    i++;
    }

    //Array#forEachを書く場合
    let isCorrect = false; //正解があったかどうかのフラグ変数
    answers.forEach(function(item){
    //answersから一つ取り出した要素がanswerとしてアクセスできる
    if(item.innerHTML == input) {
        isCorrect = true;
    }
    });
    if(isCorrect == true){
        answer.innerHTML = `正解`;
    } else{
        answer.innerHTML = `不正解`;
    }
}
//期待する挙動は上記の4文を入れたら”正解”と出て、他の文字を入れたら”不正解”と出る　


let myModalAlternative = new bootstrap.Modal(document.querySelector('#exampleModal'), {});
//myModalAlternative.show();


function clickSecondButton(){
    let myModalAlternativeBody =document.querySelector('#exampleModalBody');
    myModalAlternativeBody.innerHTML ="2つ目のボタンを押したら書き換えられるよ";
    myModalAlternative.show();
}

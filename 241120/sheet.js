let url = "https://sheets.googleapis.com/v4/spreadsheets/1khftIOwrp4_1qrBF1vWg4I9LjKGKFAk1gdfc_SVgWcU/values/sheet1?key=AIzaSyBWN4pynC1PzYGwVMHLYh84w0KjAzAWmYY";
fetch(url).then(
    function (response) {
        return response.json();
    }
    //fetchで、指定したものの情報を選別。.thenで情報を読み取る　returnでとってきた情報をこのサイトで読み取る
).then(
    (json) => {
        let answerElement = document.querySelector('#answer');
        let valueHtml = '';
        json.values.forEach((row) => {
            valueHtml += `<li>${row[0]}: ${row[1]} ${row[2]}</li>`
        });
        answerElement.innerHTML = `<ul>${valueHtml}</ul>`;

    }
);
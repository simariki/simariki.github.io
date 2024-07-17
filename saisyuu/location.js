(function () {
    let button = document.getElementById('search-location');
    button.addEventListener('click', () => {
        let srcLocation = document.getElementById('source-location');
        let dstLocation = document.getElementById('destination-location');
        let transport = document.getElementById('transport');
        if (srcLocation.value && dstLocation.value && transport.value) {
            document.location.href = srcLocation.value + '-' + dstLocation.value + '-' + transport.value + '.html';
        }
    });
})();
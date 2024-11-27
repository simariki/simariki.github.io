function startAnimation() {
    anime({
        targets: "#start-button",
        rotate:'360deg',　　//回転する
        easing:'linear',
    });

    anime({
        targets:"#animation-box",
        keyframes:[ //上から順番に行ってゆく　loopを使う際に使う
            {opacity:0},
            {opacity:1}
            ],
        easing:'linear',
        duration:'200',
        loop:true
    });
}


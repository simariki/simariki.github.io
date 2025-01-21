let places=[
    {name:"竜泉寺の湯", where: "東京工科大学から徒歩約30分", time: "6:00~3:00（最終受付/2:30)",purpose:"温泉",img:"https://hachioji.ryusenjinoyu.com/wp/wp-content/themes/mori_wp/img/slide/slide2407.jpg",link:"https://hachioji.ryusenjinoyu.com/",comment:"八王子川の温泉ならココ！豊富な種類の温泉や癒し空間でリラックスしよう！" },
    {name:"天然温泉ロテン・ガーデン", where: "東京工科大学から徒歩約25分", time:"9:00~0:00（月~木）6:30~0:00（金∼日）",purpose:"温泉",img:"https://roten-garden.com/img/spa/img_06b_sp.jpg",link:"https://roten-garden.com/",comment:"橋本駅側の温泉ならココ！露天風呂に魅力が満載！"},
    {name:"高尾山", where: "高尾山口駅から徒歩約4分（高尾山入口）", time: "リフト:9：00∼16：00",purpose:"観光",img:"https://tabiyomi.yomiuri-ryokou.co.jp/uploads/2022/05/27/c4ae6c4e59cb27b20b9a0b1330cfd26f89695669.JPG",link:"https://www.takaotozan.co.jp/",comment:"八王子と言ったら高尾山！ぜひ一度は登ってほしい！"},
    {name: "高尾山トリックアート美術館", where: "高尾山口駅から徒歩約2分", time: "10:00~18:00 定休日：水曜日",purpose:"遊び場",img:"https://s3-ap-northeast-1.amazonaws.com/thegate/2020/12/03/13/34/55/Takao%20Trick%20Art%20Museum.jpg",link:"https://www.trickart.jp/",comment:"数少ないトリックアート館が近くにあるのでぜひ友達と遊びに！"},
    {name:"サンリオピューロランド", where: "京王多摩センター駅から徒歩約8分",time:"こちらから確認",purpose:"遊び場",img:"https://lee.hpplus.jp/wp-content/uploads/2024/05/06/IMG_6636-scaled.jpeg",link:"https://www.puroland.jp/",comment:"大学近くのテーマパーク！みんなでワイワイしたい人におすすめ！"},
    {name:"国営昭和記念公園", where: "立川駅から徒歩約18分", time: "8:30~16:30",purpose:"観光",img:"https://www.showakinen-koen.jp/wp-content/uploads/2022/04/d18d2741e5ec116518a3c4c97ea0982a-1024x680.jpg",link:"https://www.showakinen-koen.jp/",comment:"紅葉の季節の景色が綺麗！"},
    {name:"東京競馬場", where: "府中本町駅から徒歩約12分", time: "9:00∼17:00",purpose:"その他",img:"https://cdn.4travel.jp/img/thumbnails/imk/travelogue_album/11/83/38/500x_11833801.jpg?updated_at=1686388415",link:"https://www.jra.go.jp/facilities/race/tokyo/",comment:"競馬は20歳になってから！"},
    {name:"IKEA 立川店", where: "立川駅から徒歩約14分", time: "11:00∼19:00（平日）10:00∼20:00（休日）",purpose:"買い物",img:"https://pbs.twimg.com/media/D8a_JZuU8AAvR3j.jpg",link:"https://www.ikea.com/jp/ja/stores/tachikawa/",comment:"都会の大型アウトレットと言ったらIKEA！"},
    {name:"立川まんがぱーく", where: "立川駅から徒歩約10分", time: "10:00∼18:00（月~土曜日）　10:00∼13:30、14:30~18:00（日曜日）",purpose:"その他",img:"https://mangapark.jp/img/page/guide/facilities/img01.jpg",link:"https://mangapark.jp/",comment:"マンガ好きには最高の場所！"},
]

//スライダーのJs
const slideContainer = document.querySelector('.slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const indicator = document.getElementById('indicator');
const slides = document.querySelectorAll('.slide > div');
const totalSlides = slides.length;
const slideWidth = 100 / totalSlides;
slideContainer.style.width = `${totalSlides * 100}%`;
slides.forEach((slide) => {
    slide.style.width = `${slideWidth}%`;
});
let count = 0;
let autoPlayInterval;
function updateSlidePosition() {
    slideContainer.style.transform = `translateX(-${count * slideWidth}%)`;
}
function updateIndicatorColors() {
    const lists = document.querySelectorAll('.list');
    lists.forEach((list, i) => {
        list.style.backgroundColor = i === count % totalSlides ? '#000' : '#fff';
    });
}
function nextClick() {
    count++;
    if (count >= totalSlides) {
        count = 0;
    }
    updateSlidePosition();
    updateIndicatorColors();
}
function prevClick() {
    count--;
    if (count < 0) {
        count = totalSlides - 1;
    }
    updateSlidePosition();
    updateIndicatorColors();
}
function startAutoPlay() {
    autoPlayInterval = setInterval(nextClick, 3000);
}
function resetAutoPlayInterval() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}
next.addEventListener('click', () => {
    nextClick();
    resetAutoPlayInterval();
});
prev.addEventListener('click', () => {
    prevClick();
    resetAutoPlayInterval();
});
indicator.addEventListener('click', (event) => {
    if (event.target.classList.contains('list')) {
        const index = Array.from(indicator.children).indexOf(event.target);
        setActiveSlide(index);
    }
});
function setActiveSlide(index) {
    count = index;
    updateSlidePosition();
    updateIndicatorColors();
    resetAutoPlayInterval()
}
updateIndicatorColors();
startAutoPlay();


//ボタンの挿入
const button = document.createElement("button");
button.textContent = "ここをクリック！！"; // ボタンのテキストを設定

// ボタンにクリックイベントを設定
button.addEventListener("click", () => {
    window.location.href = `${places[i].link}`; // リンク先URLを指定
});
// ボタンをページに追加
document.getElementById("#kousiki").appendChild(button);


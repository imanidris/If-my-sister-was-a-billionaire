let oneBag = function(p) {
    let img;
    let imgSize = 300;
    let font;

    p.preload = function () {
        img = p.loadImage("images/bigbag5.png");
        font= p.loadFont("Fonts/Courier New Bold.ttf")
    };

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.angleMode(p.DEGREES);
    };

    p.draw = function () {
        p.background(20);
        p.translate(p.width / 2, p.height / 2 + 90);
        p.imageMode(p.CENTER);
        p.image(img, 0, 0, imgSize, imgSize);

        p.fill(255);
        p.textAlign(p.CENTER);
        p.textSize(16)
        p.textFont(font)
        p.text("So this is me with an estimated average net worth of \n 100,000 USD, that is the price of only one luxury bag! ", 0, imgSize / 2 + 20);
    };
};

new p5(oneBag, "oneBag");

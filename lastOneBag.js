let lastOneBag = function(p) {
    let img1;
    let img2;
    let img3;
    let imgSize = 300;
    let font;

    p.preload = function () {
        img1 = p.loadImage("images/bigbag5.png");
        img2 = p.loadImage("images/bigbag1.png");
        img3 = p.loadImage("images/bigbag7.png");
        font= p.loadFont("Fonts/Courier New Bold.ttf")
    };

    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
        p.angleMode(p.DEGREES);
    };

    p.draw = function () {
        p.background(20);
        p.translate(p.width * 0.5, p.height * 0.5);
        p.imageMode(p.CENTER);
        p.image(img1, -300, 0, imgSize, imgSize);
        p.image(img2, 0, 0, imgSize -40, imgSize-40);
        p.image(img3, 300, 0, imgSize, imgSize);

        p.fill(255);
        p.textAlign(p.CENTER);
        p.textSize(24)
        p.textFont(font)
        p.text(" Remember an avarage person networth represent a bag \n or two maybe it will grow to 5 but that's really it", 0, imgSize / 2 + 20);
    };
};

new p5(lastOneBag, "lastOneBag");

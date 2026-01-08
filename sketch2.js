setTimeout(function() {

let sketch2 = function(p) {
  let imgs = []; // Array to store bag images
  let imgSize = 4; // Bag size
  let bagNum = 0; // Number of bags
  let spacingFactor = 3; // Spacing between bags
  let table;
  let font;


  p.preload = function () {
    // Load images 
    for (let i = 1; i < 4; i++) {
      imgs.push(p.loadImage("images/" + i + ".png")); // Directly push each loaded image
    }

    font= p.loadFont("Fonts/Courier New Bold.ttf")

    //load dataset in csv formate
    table = p.loadTable("data/billionaire.csv", "csv", "header");
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.angleMode(p.DEGREES);
  };

  p.draw = function () {
    p.background(20);
    p.translate(p.width / 2, p.height / 2);

    p.fill(255);
    p.textAlign(p.CENTER);
    p.textSize(18)
    p.textFont(font)
    p.text("Wait for it ", 0, 350);


    let year = table.getNum(0,"year" );
    let net_worth= table.getNum(0,"net_worth");
    //console.log(net_worth);
    totalRows = table.getRowCount();


    p.rotate(bagNum * 0.03); // Slow rotation animation

    for (let i = 0; i < bagNum; i++) {
      let angle = i * 133;
      let r = spacingFactor * p.sqrt(i); // Spiral radius
      let x = r * p.cos(angle);
      let y = r * p.sin(angle);

      p.push();
      p.translate(x, y);
      p.rotate(angle + 90); // Rotate each bag to face outward
      p.imageMode(p.CENTER);
      p.image(imgs[i % imgs.length], 0, 0, imgSize, imgSize); // Loop through images
      p.pop();
    }
    
    if (bagNum < net_worth / 100000) {
      bagNum += 30;
    }
    
 

  };

};

new p5(sketch2, "sketch2");


}, 10000);

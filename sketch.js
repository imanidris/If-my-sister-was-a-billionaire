setTimeout(function () {

  let sketch = function (p) {
    let imgs = []; // Array to store bag images
    let imgSize = 35; // Bag size
    let bagNum = 0; // Number of bags
    let spacingFactor = 20; // Spacing between bags
    let table;



    p.preload = function () {
      // Load images 
      for (let i = 1; i < 4; i++) {
        imgs.push(p.loadImage("images/" + i + ".png")); // Directly push each loaded image
      }

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

      let year = table.getNum(0, "year");
      let net_worth = table.getNum(0, "net_worth");
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
        bagNum += 10;
      }

    };

  };

  new p5(sketch, "sketch");

}, 4000);

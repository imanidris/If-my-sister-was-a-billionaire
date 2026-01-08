setTimeout(function() {

let sketch3 = function(p) {
  let imgs = []; // Array to store bag images
  let imgSize = 4; // Bag size
  let bagNum = 0; // Number of bags
  let spacingFactor = 3; // Spacing between bags
  let table;
  let font;
  let currentYear = 0; // Stores the displayed year
  let currentNetWorth = 0; // Stores the displayed net worth
  let rowIndex = 0; // Tracks which row to display

  p.preload = function () {
    // Load images 
    for (let i = 1; i < 4; i++) {
      imgs.push(p.loadImage("images/" + i + ".png")); // Directly push each loaded image
    }

    font = p.loadFont("Fonts/Courier New Bold.ttf");

    // Load dataset in CSV format
    table = p.loadTable("data/billionaire.csv", "csv", "header");
  };

  p.setup = function () {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.angleMode(p.DEGREES);
    
    // Ensure data is loaded and grab the first row
    if (table.getRowCount() > 0) {
      updateNetWorth(rowIndex); // Start with the first row
    }
  };

  p.draw = function () {
    p.background(20);

    // Display Year and Net Worth
    p.fill(255);
    p.textAlign(p.LEFT);
    p.textSize(20);
    p.textFont(font);
    p.text("Year: " + currentYear, 50, 100);
    p.text("Net worth: $" + currentNetWorth.toLocaleString(), 50, 120);


    // Draw Phyllotaxis spiral pattern of Bags
    p.translate(p.width / 2, p.height / 2);
    p.rotate(bagNum *0.01 ); //  rotatate it and make it a bit slower

    for (let i = 0; i < bagNum; i++) {
      let angle = i * 134.5; 
      let r = spacingFactor * p.sqrt(i); // Spiral radius
      let x = r * p.cos(angle);
      let y = r * p.sin(angle);

      p.push();
      p.translate(x, y);
      p.rotate(angle + 90); // Rotate each bag to face outward
      p.imageMode(p.CENTER);
      p.image(imgs[i % imgs.length], 0, 0, imgSize, imgSize);
      p.pop();
    }

    // Increase bagNum gradually until it reaches the target value
    if (bagNum < currentNetWorth / 1000000) {
      bagNum += 10000;
    } else  {
        rowIndex = (rowIndex + 1) // go to the next row, next year
        updateNetWorth(rowIndex);

     }
  };

  // Function to update displayed data
  function updateNetWorth(index) {
    currentYear = table.getNum(index, "year");
    currentNetWorth = table.getNum(index, "net_worth");
  }
};

new p5(sketch3, "sketch3");

}, 35000);

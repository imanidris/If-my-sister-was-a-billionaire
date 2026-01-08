
# Advanced Project Title: If My Sister Was a Billionaire

**Student Name (Id):** Iman Idris Abdulrahman Mohamed Ahmed, (ID 22004642)

**Website Link:** [Click here](https://git.arts.ac.uk/pages/22004642/If-my-sister-was-a-billionaire/)

**Project Video:** [Click link](https://ual.cloud.panopto.eu/Panopto/Pages/Viewer.aspx?id=7c66f633-e6ab-41ce-a7a6-b2a700dd037f)


-----------------------------------------------------------------------------------------------------------


## **Project Description** 

<img width="2000" height="995" alt="bags header" src="https://github.com/user-attachments/assets/f3f378f4-8c17-49f1-bb55-628e40599e20" />


  
### 1. Introduction: 
(What You Made)

"If My Sister Was a Billionaire" is a data art piece that aims to visualize the wealth inequality and the vast difference between the average person and a billionaire. The sister analogy here is to magnify the injustice of the situation. When users visit the project website, they are faced with the reality of how does their average net worth look like compared to that of a billionaire. The visualizations are made with bags instead of an abstract to make the comparison easier to understand. The result is a dynamic collection of digital pieces, reflecting wealth inequality. 


### 2. Background: 
(Why You Made It) 

I always find myself working on topics related to sociopolitical issues, and I guess this project is no difference. This project explores a theme of inequality, and It was inspired by a book called "The Trading Game: A Confession" by Gary Stevenson [^6], as well as the author's YouTube channel. In the book, he tells his story about his rise from a working-class background to becoming a rich trader, and he explores themes of wealth inequality, the dark side of high finance, and his disappointment with the financial system.

Experiencing first hand how inequality is contributing to the economic decline and continued high prices in everything, was the starting point of this project.
Which eventually aims to raise awareness about wealth inequality[^7] [^8], how does it look and how ridicules is having one person (or few people) hoarding all that money. 

While wealth inequality is rising, public concern and political action are not keeping pace. So the project also aims to prompt new conversations about the economy, wealth, and wealth inequality to eventually drive political action.


### 3. The Process: 
(How You Made It) 

- Image transforms: 
The main challenge in my project is to visualize big numbers with images, and so I eventually decided to choose the phyllotaxis spiral pattern algorithm, which was inspired by one of Daniel Shiffman tutorials [^1].
To picture large numbers of billions with bags, I needed an optimized algorithm that shows the growth as well as the infinite feel these big numbers give. Unlike a grid or circle layout, the Phyllotaxis spiral does all that perfectly. 
[base sketch](https://editor.p5js.org/imanidris21/sketches/YVRvsaoLK)

- Data: 
Next, I wanted to show a billionaire (my sister's) wealth growth throughout the past 25 years. To do that I used a dataset from Kaggle it’s called Forbes Billionaires Evolution (1997-2024) [^2] and I chose just one billionaire’s data just because the growth in the net worth was very steady thus it will produce balanced visuals. 
To load the CSV data file, I used p5.Table object and I learned how to use it from a YouTube list by The Data Garden Project[^3].  

- The Website:
By using this billionaire data to drive my sketches, I now have many p5.js sketches that I need to display in one webpage, and to do that I used JavaScript Instance Mode [^4] which helped me combine all the sketches and display them together while keeping the separate code for each to make modification easier later on. I also needed to have some sort of a timer to start the sketches one after the other, and to do that I used HTML5 delay canvas drawing [^5]. 

### 4. The Result: 

The results are data-driven digital art pieces that reflect wealth inequality and the unfathomable growth of wealth for the top 1% in our modern societies.

<img width="2000" height="997" alt="bags project images 1" src="https://github.com/user-attachments/assets/88614ea3-a83b-4017-b55a-9b92ce9111b9" />

<img width="2000" height="1002" alt="bags project images 2" src="https://github.com/user-attachments/assets/3b50d85d-9e69-4cbb-9869-147de03e02b7" />



-----------------------------------------------------------------------------------------------------------

### **LLMs Disclaimer + transcript:** 


LLMs models (ChatGPT) were used in this project for code explanations, debugging, and writing of new function syntax. All outputs were critically reviewed, modified and adapted.

Here you can find the transcript for my interaction with ChatGPT [Click here](https://chatgpt.com/share/67dd24fd-6294-8007-934c-cdb33c2b7c08)

-----------------------------------------------------------------------------------------------------------

### **References:** 
[^1]: Phyllotaxis spiral pattern code by Daniel Shiffman. Available at: https://youtu.be/KWoJgHFYWxY
[^2]: Forbes Billionaires Evolution (1997-2024) by Guillem SD. Available here: https://www.kaggle.com/datasets/guillemservera/forbes-billionaires-1997-2023 
[^3]: Intro to Data Drawing in p5js, module 5, from The Data Garden Project. Available here: https://youtu.be/BJIH1fciRFA?si=rDgkBrtXicxzvq5n 
[^4]: Instance Mode (aka "namespacing") - p5.js Tutorial by Daniel Shiffman. Available at: https://youtu.be/Su792jEauZg?si=VWBURH46ERwjGYaP
To add to canvases 
[^5]: Stack Overflow, 2012. HTML5 delay canvas drawing. Available at: https://stackoverflow.com/questions/12604871/html5-delay-canvas-drawing


[^6]: Stevenson, G., 2024. The trading game: a confession. London: Penguin Books.
[^7]: Office for National Statistics (ONS), 2022. Distribution of individual total wealth by characteristic in Great Britain: April 2018 to March 2020. [online] Available at: https://www.ons.gov.uk/peoplepopulationandcommunity/personalandhouseholdfinances/incomeandwealth/bulletins/distributionofindividualtotalwealthbycharacteristicingreatbritain/april2018tomarch2020
[^8]: Stanley, L., 2022. Global inequalities. [online] IMF. Available at: https://www.imf.org/en/Publications/fandd/issues/2022/03/Global-inequalities-Stanley







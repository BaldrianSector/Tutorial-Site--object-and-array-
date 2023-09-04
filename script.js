/* --- THIS IS THE HTML DATA --- */

let htmlTutorialsList = [];

let htmlTutorial1 = {
    title: "HTML and CSS Fundamentals",
    url: "https://www.example.com/html-fundamentals",
    rating: 4.5,
    free: true
}

let htmlTutorial2 = {
    title: "Building a Basic Website with HTML",
    url: "https://www.example.com/basic-html-website",
    rating: 3.8,
    free: true
}

let htmlTutorial3 = {
    title: "Advanced HTML5 Techniques",
    url: "https://www.example.com/advanced-html5",
    rating: 4.2,
    free: false
}

htmlTutorialsList.push(htmlTutorial1, htmlTutorial2, htmlTutorial3);

/* --- THIS IS THE CSS DATA --- */

let cssTutorialsList = [];

let cssTutorial1 = {
    title: "CSS Layout and Flexbox Mastery",
    url: "https://www.example.com/css-layout-flexbox",
    rating: 4.7,
    free: false
}

let cssTutorial2 = {
    title: "CSS Animations and Transitions",
    url: "https://www.example.com/css-animations-transitions",
    rating: 4.3,
    free: true
}

let cssTutorial3 = {
    title: "Responsive Web Design with CSS",
    url: "https://www.example.com/responsive-web-design-css",
    rating: 4.0,
    free: true
}

cssTutorialsList.push(cssTutorial1, cssTutorial2, cssTutorial3);

/* --- THIS IS THE JS DATA --- */

let jsTutorialsList = []

let jsTutorial1 = {
    title: "Wes Bos’s 30 Days of JavaScript",
    url: "https://javascript30.com/",
    rating: 4.7,
    free: true
}

let jsTutorial2 = {
    title: "JavaScript for Cats",
    url: "http://jsforcats.com/",
    rating: 5.0,
    free: false
}

let jsTutorial3 = {
    title: "Speaking JavaScript",
    url: "http://speakingjs.com/es5/",
    rating: 2.2,
    free: true
}

jsTutorialsList.push(jsTutorial1,jsTutorial2,jsTutorial3)

/* --- FUNCTION TO PUSH DATA TO HTML --- */

function newListOfTutorials(querySelectorID,tutorialsList) {
    const parentDiv = document.querySelector(`#${querySelectorID}`); // Getting hook for parent element
    const newUl = document.createElement("ul"); // Making a new Unordered List element
    
    
    // Create a new li element
    const newLi = document.createElement("li");
    
    for (let i = 0; i < tutorialsList.length; i++) {
        console.log(`For loop executing round ${i+1})`); // Checking loop rounds
        console.log(`${tutorialsList[i].title} is item ${i+1})`); // Logging title of item 1 in tutorialsList
    
        const newLi = document.createElement("li"); // Create a new li element for each item
        
        const newLink = document.createElement("a"); // Create a new anchor tag (<a>) for the link
    
        newLink.href = tutorialsList[i].url; // Set the href attribute to the URL
        newLink.textContent = tutorialsList[i].title; // Set the link text
    
        newLi.appendChild(newLink);
        newUl.appendChild(newLi); // Append the li element to the ul element
    }
    
    parentDiv.appendChild(newUl) // Appending newUl to body    
}

newListOfTutorials("html-tutorial-links",htmlTutorialsList)
newListOfTutorials("css-tutorial-links",cssTutorialsList)
newListOfTutorials("js-tutorial-links",jsTutorialsList)
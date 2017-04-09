$("#main").append("Dmitry Pashkov");
var awesomeThoughts = "I am Dmitry Pashkov and I am awesome!"
var funThoughts = "I am Dmitry Pashkov and I am awesome!".replace("awesome", "fun");
console.log(awesomeThoughts);
console.log(funThoughts);
var htmlHeaderName = HTMLheaderName.replace("%data%", "Dmitry Pashkov");
var htmlHeaderRole = HTMLheaderRole.replace("%data%", "Java Developer");
$("#header").prepend(htmlHeaderRole);
$("#header").prepend(htmlHeaderName);

var s = "audacity";

var udacityizer = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    
    s = s.substring(1, 2).toUpperCase()+s.substring(2);
    return s;
};

// Did your code work? The line below will tell you!
console.log(udacityizer(s));

var arrayOfNumbers = [1,2,3,4,5];
var lastNumber = arrayOfNumbers.pop();
lastNumber++;
arrayOfNumbers.push(lastNumber);
console.log(arrayOfNumbers);

var name = "cAmEROn PittMAN";
var names = name.split(" ");
names[0] = names[0].slice(0,1).toUpperCase()+names[0].slice(1).toLowerCase();
names[1] = names[1].toUpperCase();
name = names[0]+" "+names[1];
console.log(names);
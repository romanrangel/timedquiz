var question001 = ["Commonly use data types DO NOT include:",
    "The condition in an if / else statement is enclosed within ______.",
    "Arrays in JavaScript can be used to store ______.",
    "String values must be enclosed within ______ when being assigned to variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is:"
];

//Created buttons for quiz answers. Each variable is linked to its respective question in the array above.
var options001 = ["<button class=buttons001 onclick=q1i()>Strings/buttons<button class=buttons001 onclick=q1i()>Booleans</button><button class=buttons001 onclick=q1c()>Alerts</button><button class=buttons001 onclick=q1i()>Numbers</button>"];
var options002 = ["<button class=buttons001 onclick=q1i()>Quotes</button><button class=buttons001 onclick=q1i()>Curly Brackets</button><button class=buttons001 onclick=q1c()>Parentheses</button><button class=buttons001 onclick=q1i()>Square Brackets</button>"];
var options003 = ["<button class=buttons001 onclick=q1c()>Numbers and strings</button><button class=buttons001 onclick=q1i()>Other arrays</button><button class=buttons001 onclick=q1i()>Booleans</button><button class=buttons001 onclick=q1i()>All of the above</button>"];
var options004 = ["<button class=buttons001 onclick=q1i()>Commas</button><button class=buttons001 onclick=q1i()>Curly Brackets</button><button class=buttons001 onclick=q1c()>Quotes</button><button class=buttons001 onclick=q1i()>Parantheses</button>"];
var options005 = ["<button class=buttons001 onclick=q1i()>Javascript</button><button class=buttons001 onclick=q1i()>Terminal/bash</button><button class=buttons001 onclick=q1i()>For loops</button><button class=buttons001 onclick=q1c()>Console.log</button>"];

//These variables add +1 if the user selects the correct answer.
var a = 0;
a++;
var b = 0;
b++;

//This function links the timer to the 'begin' button. When button is clicked, the 'begin' button disappears and the first question appears.
var c = c;
function begin001() {
    c = 60;
    disappear001.innerHTML = "";
    message001.innerHTML = question001[0];
    message002.innerHTML = options001;
    number001.innerHTML = a++;
}

//These next 2 functions are in charge of displayed "correct" or "incorrect," depending on the users input. If the user selects the correct answer, their score goes up by one (b++).
function q1c() {
    message003.innerHTML = "Correct.";
    message002.innerHTML = "";
    score001.innerHTML = b++;
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
}

function q1i() {
    message003.innerHTML = "Incorrect.";
    message002.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=next001()>Next</button>";
    c = c - 10;
    if (c>0) {
        time001.innerHTML = c;
    }
}
//These if and else if statements tell the webpage what to do when the user selects the "next" button. The user can only earn a maximum of '5' points. Once they have earned '5' points, the quiz will display a message saying, "end of quiz."
function next001() {
    if (a == "2") {
        message001.innerHTML = question001[1];
        message002.innerHTML = options002;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "3") {
        message001.innerHTML = question001[2];
        message002.innerHTML = options003;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "4") {
        message001.innerHTML = question001[3];
        message002.innerHTML = options004;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    }

    else if (a == "5") {
        message001.innerHTML = question001[4];
        message002.innerHTML = options005;
        message003.innerHTML = "";
        number001.innerHTML = a++;
        message004.innerHTML = "";
    } else {
        window.clearInterval(update);
        c = "-";
        message001.innerHTML = "End of Quiz";
        message002.innerHTML = "";
        message003.innerHTML = "";
        message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";
    }
}
// This function controls the timer. This sets the timer at 75 seconds. When the timer becomes less than 1, the webpage will display, "Time's up!"
var c = c;
function timer001() {
    c = c - 1;
    if (c < 60) {
        time001.innerHTML = c;
    }
    if (c < 1) {
        window.clearInterval(update);
        message001.innerHTML = "Time's up";
        message002.innerHTML = "";
        message003.innerHTML = "";
        message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";
    }
}

//This tells the browser that when the user clicks the 'repeat' button, the timer will reset.
update = setInterval("timer001()", 1000);

function repeat001() {
    location.reload();
}
var question001 = ["Commonly use data types DO NOT include:",
    "The condition in an if / else statement is enclosed within ______.",
    "Arrays in JavaScript can be used to store ______..",
    "String values must be enclosed within ______ when being a science variables.",
    "A very useful tool used during development and debugging for printing content to the debugger is:"
];

var options001 = ["<button class=buttons001 onclick=q1i()>Strings/buttons<button class=buttons001 onclick=q1i()>Booleans</button><button class=buttons001 onclick=q1c()>Alerts</button><button class=buttons001 onclick=q1i()>Numbers</button>"];
var options002 = ["<button class=buttons001 onclick=qii()>Quotes</button><button class=buttons001 onclick=q1i()>Curly Brackets</button><button class=buttons001 onclick=q1c()>Parentheses</button><button class=buttons001 onclick=q1i()>Square Brackets</button>"];
var options003 = ["<button class=buttons001 onclick=q1c()>Numbers and strings</button><button class=buttons001 onclick=q1i()>Other arrays</button><button class=buttons001 onclick=q1i()>Booleans</button><button class=buttons001 onclick=q1i()>All of the above</button>"];
var options004 = ["<button class=buttons001 onclick=q1i()>Commas</button><button class=buttons001 onclick=q1i()>Curly Brackets</button><button class=buttons001 onclick=q1c()>Quotes</button><button class=buttons001 onclick=q1i()>Parantheses</button>"];
var options005 = ["<button class=buttons001 onclick=q1i()>Javascript</button><button class=buttons001 onclick=q1i()>Terminal/bash</button><button class=buttons001 onclick=q1i()>For loops</button><button class=buttons001 onclick=q1c()>Console.log</button>"];

var a = 0;
a++;
var b = 0;
b++;

function begin001() {
    c = 75;
    disappear001.innerHTML = "";
    message001.innerHTML = question001[0];
    message002.innerHTML = options001;
    number001.innerHTML = a++;
}

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
}
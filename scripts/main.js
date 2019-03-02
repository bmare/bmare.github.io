/*
//Multiplies numbers, then sets h1 to result
function multiply(num1,num2) {
        var result = num1 * num2;
        return result;
}
var printResult = multiply(4,7);
console.log(printResult);

var myHeading = document.querySelector('h1');
myHeading.textContent = printResult;
*/
var myImage = document.querySelector('img');

myImage.onclick = function() {
        var mySrc = myImage.getAttribute('src');
        if (mySrc === 'images/wolf-sheep.jpg') {
                myImage.setAttribute('src','images/baby-orangutang.jpg');
        } else {
                myImage.setAttribute('src','images/wolf-sheep.jpg');
        }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
        var myName = prompt('Please enter your name.');
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Brandon is cool, ' + myName;
        /*
        var noName = 'anonymous';
        if (myName !== "") {
                localStorage.setItem('name', myName);
                myHeading.textContent = 'Brandon is cool, ' + myName;
        } else {
                localStorage.setItem('name', noName);
        }
        */
}

if (!localStorage.getItem('name')) {
        setUserName();
} else {
        var storedName = localStorage.getItem('name');
        myHeading.textContent = 'Brandon is cool,' + storedName;
}

myButton.onclick = function() {
        setUserName();
}

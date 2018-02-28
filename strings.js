// Challenge #1
var numOfSandwhiches = 4*2;
console.log("numOfSandwhiches", numOfSandwhiches);

// Challenge #2
var name = "zoe";
var string = "Hello, " + name + " how are you doing today?";
console.log("string:", string);

// Challenge #3
var DNA = "GCAT";
// var RNA = DNA.replace('T', 'U');
var RNA = DNA.replace(/T/g, 'U');
console.log("RNA", RNA);

//challenge #4
// var animal = "alligator";
// var animal = "bird";
// var animal = "dog";
// var animal = "Alligator";
// var animal = "Dog";
var animal = "ALliGaTor";

if(animal.toLowerCase() === 'alligator'){
  console.log("small");
}else {
  console.log("wide");
}



var yarn = "the better string";
var domString = "<h4>" + yarn + "</h4>";

var myDiv = document.getElementById('yarn-holder');
myDiv.innerHTML = domString;





//Challenge #5
var str = 'IBMWLOVEbmcatsbmw';
var cats = str.replace(/[BMWbmw]/g, '');
// var cats = str.replace(/[bmw]/gi, '');
console.log("cats", cats);
var catStr = "<h1>" + cats + "</h1>";
var catElement = document.getElementById("cat-holder");
catElement.innerHTML = catStr;
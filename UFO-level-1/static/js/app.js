// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

function newTable(data){

// Using the UFO dataset provided in the form of an array of JavaScript objects, write code that 
// appends a table to your web page and then adds new rows of data for each UFO sighting.
// Make sure you have a column for date/time, city, state, country, shape, and comment 
    data.forEach(function(ufoReport) {
    console.log(ufoReport);
    var row = tbody.append("tr");
    Object.entries(ufoReport).forEach(function([key, value]) {
        console.log(key, value);
        // Append a cell to the row for each value in the ufo report object
        var cell = row.append("td");
        cell.text(value);
        });
    });
}
newTable(tableData);

// Use a date form in your HTML document and write JavaScript code that will listen for events 
// and search through the date/time column to find rows that match user input.

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  // Set the span tag in the h1 element to the text that was entered in the form
  d3.select("h1>span").text(inputValue);
});

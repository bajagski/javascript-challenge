
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

function newTable(data){

 // remove any children from the list
  tbody.html("");

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

// Using multiple input tags and/or select dropdowns, write JavaScript code so the user can to set multiple filters and 
// search for UFO sightings using the following criteria based on the table columns:

// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElementDate = d3.select("#datetime").property("value");
  var inputElementCity = d3.select("#city").property("value");
  var inputElementState = d3.select("#state").property("value");
  var inputElementCountry = d3.select("#country").property("value");
  var inputElementShape = d3.select("#shape").property("value");

// Get the value property of the input element   

    var inputValue = {"datetime": inputElementDate, "city": inputElementCity, "state" : inputElementState, "country" : inputElementCountry, "shape" : inputElementShape };

    

    var filteredData = tableData.filter(ufoSight => ufoSight.datetime === inputValue);

    console.log(filteredData);

newTable(filteredData);

  // Set the span tag in the h1 element to the text that was entered in the form
//   d3.select("h1>span").text(inputValue);
});

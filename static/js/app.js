// Assign the data from `data.js` to a variable
// Refer to the set up from 14.3.9
var tableData = data;

// Select the submit button
var submit = d3.select("#filter-btn");

submit.on("click",function() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

        console.log(tableData);
        console.log(inputValue);

    var dataFilter = tableData.filter(ufo => ufo.datetime === inputValue);
        console.log(dataFilter);

buildTable(dataFilter);
});

// referred a lot to 14.3.3
function buildTable(table) {
    var tbody = d3.select("tbody");
    tbody.html("");
        console.log(table);

//  Loop Through `data` and console.log each UFO Sighting
    table.forEach(function(ufoTable){
        console.log(ufoTable);
    });
// Use `Object.entries` to console.log each UFO Sighting and append 
    table.forEach(function(ufoTable){
        var row=tbody.append("tr");

        Object.entries(ufoTable).forEach(function([key, value]) {
            console.log(key, value);
            var cell = tbody.append("td");
            cell.text(value);
        });
    });
};

buildTable(data);
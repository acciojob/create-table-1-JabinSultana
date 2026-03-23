//your JS code here. If required.

function insert_Row() {

    // Get the table using its id
    var table = document.getElementById("sampleTable");

    // Insert a new row at the top
    var row = table.insertRow(0);

    // Insert two cells in the row
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Add text to the cells
    cell1.innerHTML = "New Cell1";
    cell2.innerHTML = "New Cell2";
    
}

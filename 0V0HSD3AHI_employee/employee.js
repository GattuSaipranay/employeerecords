let selectRow = null;

// Inserting & Showing Record in Another Table-----------------------------------------------
function insertNewRecord(data) {
    let table = document
        .getElementById("empList")
        .getElementsByTagName("tbody")[0];
    let newRow = table.insertRow(table.length);
    let cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Id;
    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.FirstName;
    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.LastName;
    let cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.Email;
    let cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.Department;

    let cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onclick="onEdit(this)">Edit</a>`;
    let cell7 = newRow.insertCell(6);
    cell7.innerHTML = `<a onclick="onDelete(this)">Delete</a>`;
}

// Reseting Form---------------------------------------------------------------------------
function resetForm() {
    document.getElementById("Id").value = "";
    document.getElementById("FirstName").value = "";
    document.getElementById("LastName").value = "";
    document.getElementById("Email").value = "";
    document.getElementById("Department").value = "";
    selectRow = null;
}
// Editing Record ----------------------------------------------------------------------------

function onEdit(td) {
    selectRow = td.parentElement.parentElement;
    document.getElementById("Id").value = selectRow.cells[0].innerHTML;
    document.getElementById("FirstName").value = selectRow.cells[1].innerHTML;
    document.getElementById("LastName").value = selectRow.cells[2].innerHTML;
    document.getElementById("Email").value = selectRow.cells[3].innerHTML;
    document.getElementById("Department").value = selectRow.cells[4].innerHTML;


}

// Update Record-----------------------------------------------------------------------------
function updateRecord(formData) {
    selectRow.cells[0].innerHTML = formData.Id;
    selectRow.cells[1].innerHTML = formData.FirstName;
    selectRow.cells[2].innerHTML = formData.LastName;
    selectRow.cells[3].innerHTML = formData.Email;
    selectRow.cells[4].innerHTML = formData.Department;

}

// Dleteing Record--------------------------------------------------------------------------
function onDelete(td) {
    if (confirm("Are you want to delete this record ?")) {
        let row = td.parentElement.parentElement;
        document.getElementById("empList").deleteRow(row.rowIndex);
        resetForm();
    }
}


// Getting value from User-----------------------------------------------------
function readFormData() {
    var formData = {};
    formData.Id = document.getElementById("Id").value;
    formData.FirstName = document.getElementById("FirstName").value;
    formData.LastName = document.getElementById("LastName").value;
    formData.Email = document.getElementById("Email").value;
    formData.Department = document.getElementById("Department").value;
    //   console.log(formData);
    return formData;
}


function onFormSubmit() {
    let formData = readFormData();
    if (selectRow === null) insertNewRecord(formData);
    else updateRecord(formData);
    resetForm();
}

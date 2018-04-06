let tableContents = document.getElementById("tableBody");
let addButton = document.getElementById("addUser");
let showButton = document.getElementById("showTable");



showButton.onclick = function () {
    $.ajax({
        type:"Get",
        url:"https://jsonplaceholder.typicode.com/users",
        success:function (response) {
            let objects = response ;
            for(let i = 0; i< objects.length;i++){
                addToTable(objects[i].id,objects[i].name,objects[i].address.street,objects[i].email);
            }
        }
    });

};


function addToTable(number, username, password, email) {
    tableContents.innerHTML += "<tr><td>" + number +
        "</td><td>"
        + username + "</td><td>" +
        password + "</td><td>" +
        email + "</td></tr>\n";

}

//Once the html is fully loaded it will then run this below callback function
document.addEventListener('DOMContentLoaded', function () {
    fetch('http://localhost:3000/getAll')
    .then(response => response.json()) //convert our response to json
    .then(data => console.log(data))
})


//The Button to Add a name to the Database
const addBtn = document.querySelector('#add-name-btn');


addBtn.onclick = function () {
    //This is the Input Field
    const nameInput = document.querySelector('#name-input');
    const name = nameInput.value; 
    nameInput.value = "";

    fetch('http://localhost:3000/insert', {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'POST',
        body: JSON.stringify({name : name})
    })

    function insertRowIntoTable(data){

    }


}


function loadHTMLTable(data){


    const table = document.querySelector('table tbody');
    let tableHtml = "";

    if (data.length === 0){
        table.innerHTML = "<tr><td class='no-data' colspan='5'>No Data</td></tr>";

    }
}
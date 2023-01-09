// Nuno Mendonça


/*

- Create a function that is called when the form is sent to the new line of the table.

- each line of the table must have the following structure:
<tr><td>Apple</td><td><input
value=”10”></td><td><input type=”button” value=”Remove”></td></tr>

- Remove the line when the button is clicked.

- Update the text inside the span every time some change is done.

 */


function prevent() {
    let total = 0;

    let table = document.querySelectorAll("table tr");
    for(let i = 0; i < table.length; i++) {
        const input = table[i].getElementsByTagName("input")[0];
        if (input != null) total += Number(input.value);
    }

    const span = document.getElementById("total");
    span.innerHTML = total;

}


const form = document.querySelector("form");

form.addEventListener("submit", function(e) {
    const line = document.createElement("tr");

    const description = document.querySelector("form input[name=description]").value;

    const quantity = document.querySelector('form input[name=quantity]').value;

    line.innerHTML = `<tr><td>${description}</td><td><input value="${quantity}"></td><td><input type="button" value="Remove"></td></tr>`;

    const table = document.getElementById('products');
    table.append(line);


    const input = line.getElementsByTagName("input")[0];
    input.addEventListener('change', prevent);


    const remove = line.querySelector("input[type=button]");


    remove.addEventListener('click', function() {
        this.parentNode.parentNode.remove();
        prevent();
    })



    prevent();
    e.preventDefault();
})


// Ex 20 Done.
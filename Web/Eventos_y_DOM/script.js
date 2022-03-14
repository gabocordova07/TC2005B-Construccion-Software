function getFormvalue()
{
    let fname = document.getElementById("form1").elements[0].value;
    let lname = document.getElementById("form1").elements[1].value;

    fullName = fname + " " + lname;

    const p = document.createElement("p");
    const text = document.createTextNode(fullName);
    p.appendChild(text);

    document.getElementById("form1").appendChild(p);
}

function insertRow()
{
    let table = document.getElementById("sampleTable");
    let newRow = table.insertRow(0);
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.innerHTML = " ";
    cell2.innerHTML = " ";
}

function insertColumn()
{
    
}

function main()
{
    window.addEventListener('mousemove', function (e)
    {
        document.getElementById("mousePosition").textContent = "Posición del mouse: " + e.x + ", " + e.y;
    }); 

}

main();


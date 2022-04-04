function getFormValue()
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
    
    const rows = table.rows.length;
    const columns = table.rows[0].cells.length;
    
    // Crear una fila
    let row  = document.createElement('tr');
    
    // Crear columnas
    for (let i = 0; i < columns; i++)
    {
        let col = document.createElement('td');
        col.innerText = 'Row ' + (rows+1) + " column " + (i+1);
        row.appendChild(col);
    }
    
    table.appendChild(row);
    
    // let newRow = table.insertRow(0);
    // let cell1 = newRow.insertCell(0);
    // let cell2 = newRow.insertCell(1);
    //
    // cell1.innerHTML = "Empty";
    // cell2.innerHTML = "Empty";
}

function insertColumn()
{
    
    let table = document.getElementById('sampleTable');

    const rows = table.rows.length;
    const columns = table.rows[0].cells.length;

    for (let i = 0; i < columns; i++)
    {
        let row = table.rows[i];
        let col = document.createElement('td');
        col.innerText = 'Row ' + (i + 1) + " column " + (columns + 1);
        row.appendChild(col);
    }
}

function addColor()
{
    let select = document.getElementById("colorSelect");
    let colors = [
        'Blue',
        'Yellow',
        'Green',
        'White'  
    ]

    let randColor = Math.floor((Math.random()* (3 - 0) + 0));
    console.log(randColor);
    select.options[select.options.length] = new Option(colors[randColor]);
    
}

function removeColor()
{
    let select = document.getElementById("colorSelect");
    select.remove(select.selectedIndex);
}

function changeImgSize()
{

    let newheight = Math.floor((Math.random()* (600 - 300) + 300)).toString();
    let newWidth = Math.floor((Math.random()* (600 - 300) + 300)).toString();
    document.getElementById("img").src = "http://placekitten.com/" + newWidth + "/" + newheight;

}

function changeContent()
{
    const rowPos = document.getElementById("rowPos").value;
    const colPos = document.getElementById("colPos").value
    let content = document.getElementById("insertText").value;

    let table = document.getElementById('myTable');
    
    const rows = table.rows.length;
    const columns = table.rows[0].cells.length;

    let x = document.getElementById('myTable').rows[parseInt(rowPos) - 1].cells;
    x[parseInt(colPos) - 1].innerHTML=content;
}

function main()
{
    document.addEventListener('mousemove', function (e)
    {
        document.getElementById("mousePosition").textContent = "Posición del mouse: " + e.x + ", " + e.y;
    }); 
}

main();


function findScreenCoords(mouseEvent)
{
    window.addEventListener('mousemove', function (e)
    {
        document.getElementById("mousePosition").textContent = e.x + ", " + e.y;
    }); 
}


function main()
{
    findScreenCoords();
}

main();


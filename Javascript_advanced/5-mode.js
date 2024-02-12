function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + "px";
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    };


    function main() {
        var spooky = changeMode(9, "bold", "uppercase", "pink", "green");
        var darkMode = changeMode(12, "bold", "capitalize", "black", "white");
        var screamMode = changeMode(12, "normal", "lowercase", "white", "black");
    
        function addButtonHandler(button, modeFunction) {
            button.addEventListener("click", modeFunction);
        }
    
        var spookyButton = document.querySelector('button:nth-of-type(1)');
        var darkModeButton = document.querySelector('button:nth-of-type(2)');
        var screamModeButton = document.querySelector('button:nth-of-type(3)');
    
        addButtonHandler(spookyButton, spooky);
        addButtonHandler(darkModeButton, darkMode);
        addButtonHandler(screamModeButton, screamMode);
    }
    
    main();

}
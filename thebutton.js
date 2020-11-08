function lightSwitch() {
    var light = document.getElementById("lightSwitch");
    var BGcolor = document.body.style.backgroundColor;
    if (BGcolor != "black") {
        light.innerHTML = "It's dark in here, lets turn on the lights";
        light.onclick = function() {
            document.body.style.backgroundColor = "White";
            light.innerHTML = "As Drake woud say <br> Look, I just flipped the switch (flipped, flipped)";
        }
    }
}
lightSwitch();
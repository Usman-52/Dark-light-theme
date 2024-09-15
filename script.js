var btn = document.getElementById("btn");
var body = document.getElementsByTagName("body")[0];


btn.addEventListener("click", function() {
    if(btn.textContent === "Night") {
                body.style.backgroundColor ="Black";
                btn.textContent = "Day";
                btn.style.color = "Black";
                btn.style.backgroundColor = "White"
    }
    else {
        btn.textContent = "Night"
        btn.style.backgroundColor = "Black"
        btn.style.color = "White"
        body.style.backgroundColor = "White"
    }
})
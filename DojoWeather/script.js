
function cookieMessage () {
    var a = document.querySelector(".warning")
    a.style.display = "flex";
}

function hide () {
    var a = document.querySelector(".warning")
    a.style.display = "none";
}

function changeUnit (element) {
    var highTemp = document.getElementById("high1")
    var lowTemp = document.getElementById("low1");
    if (element.value == "f") {
        highTemp.innerText = "75°";
        lowTemp.innerText = "65°";

        document.getElementById("high2").innerText = "80°";
        document.getElementById("low2").innerText = "66°";

        document.getElementById("high3").innerText = "69°";
        document.getElementById("low3").innerText = "61°";

        document.getElementById("high4").innerText = "78°";
        document.getElementById("low4").innerText = "70°";

    }

    if (element.value == "c"){
        document.getElementById("high1").innerText = "24°";
        document.getElementById("low1").innerText = "18°";

        document.getElementById("high2").innerText = "27°";
        document.getElementById("low2").innerText = "19°";

        document.getElementById("high3").innerText = "21°";
        document.getElementById("low3").innerText = "16°";

        document.getElementById("high4").innerText = "26°";
        document.getElementById("low4").innerText = "21°";
    }
}
setTimeout(cookieMessage, 1000);
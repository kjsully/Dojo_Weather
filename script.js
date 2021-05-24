
var element1 = document.querySelector("#alert");


function acceptCookies() {
    element1.remove();
}

function convert(element) {
    var hilowvar = document.querySelectorAll(".hi, .low");
    console.log(hilowvar);
    if (element.value === "fahrenheit") {
        for (var i=0; i < hilowvar.length; i++) {
            var temp=parseFloat(hilowvar[i].innerText);
            temp = temp*9/5+32;
            temp = Math.round(temp);
            temp = temp + "&deg;"
            hilowvar[i].innerHTML = temp;
        }
    } else {
        for (var i=0; i < hilowvar.length; i++) {
            var temp=parseFloat(hilowvar[i].innerText);
            temp = (temp-32)/1.8;
            temp = Math.round(temp);
            temp = temp + "&deg;"
            hilowvar[i].innerHTML = temp;
        }
    }
}

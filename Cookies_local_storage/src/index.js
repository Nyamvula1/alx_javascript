function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function setCookies() {
    var firstnameValue = document.getElementById("firstname").value;
    var emailValue = document.getElementById("email").value;
    setCookie("firstname", firstnameValue, 30); // Expires in 30 days
    setCookie("email", emailValue, 30); // Expires in 30 days
}

function showCookies() {
    var cookies = document.cookie;
    var p = document.createElement("p");
    p.innerHTML = "Cookies: " + cookies;
    document.body.appendChild(p);
}
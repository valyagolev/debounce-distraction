
var intervalMs = 1000 * 60 * 60;

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) == variable) {
            return decodeURIComponent(pair[1]);
        }
    }
    console.log('Query variable %s not found', variable);
}

document.getElementById("link").setAttribute("href", getQueryVariable("url"));

function showTime() {
    document.getElementById("timeleft").innerText =
        Math.floor((intervalMs - ((+new Date) - getQueryVariable("from"))) / 1000 / 60);
};

showTime();

setInterval(showTime, 1000);

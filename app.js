// project section
function digitalClock() {
    var time = new Date();

    var hurs = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var session = document.querySelector('#session');

    document.querySelector('#hrs').innerHTML = hurs;
    document.querySelector('#min').innerHTML = min;
    document.querySelector('#sec').innerHTML = sec;

    if (hurs >= 12) {
        session.innerHTML = 'PM';
    }
    else {
        session.innerHTML = 'AM';
    }
}

// invoke function
setInterval(digitalClock, 10);
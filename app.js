window.onload = function () {

    var seconds = 00;
    var tens = 00;
    var appendTens = document.getElementById("tens")
    var appendSeconds = document.getElementById("seconds")
    var buttonStart = document.getElementById('start-button');
    var buttonStop = document.getElementById('button-stop');
    var buttonReset = document.getElementById('button-reset');
    var time = document.querySelector("#time")
    var Interval;
    time.innerHTML = Date.now()
    buttonStart.onclick = function () {

        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
        console.log(document.timeline.currentTime)
    }

    buttonStop.onclick = function () {
        clearInterval(Interval);
    }


    buttonReset.onclick = function () {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
    }




    function startTimer() {
        tens++;

        if (tens <= 9) {
            appendTens.innerHTML = "0" + tens;
        }

        if (tens > 9) {
            appendTens.innerHTML = tens;

        }

        if (tens > 99) {
            console.log(Date.now());
            seconds++;
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + 0;
        }

        if (seconds > 9) {
            appendSeconds.innerHTML = seconds;
        }

    }


}



// function startTime() {
//     //const started = new Date();
//     ;
// }

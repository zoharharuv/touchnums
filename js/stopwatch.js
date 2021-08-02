var time1 = Date.now();
var myTime;
function startTimer() {
    time1 = Date.now();
    myTime = setInterval(timeCycle, 1);
}
function timeCycle() {
    var time2 = Date.now();
    var msTimeDiff = time2 - time1;
    var timeDiffStr = new Date(msTimeDiff).toISOString().slice(17, -1);
    document.querySelector('.stopwatch').innerHTML = timeDiffStr;
}

function stopTimer() {
    clearInterval(myTime);
    var finishTime = document.querySelector('.stopwatch').innerHTML;
    alert('Done at: '+finishTime);
}

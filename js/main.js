'use strict'
var gNums;
var gBoardSize;
var gCorrectNum = 1;

function init() {
    gBoardSize = +prompt('enter board size: 16/25/36');
    while (!checkUser(gBoardSize)) {
        gBoardSize = +prompt('enter board size: 16/25/36');
    }
    resetNums()
    renderBoard();
}
function resetNums() {
    gNums = [];
    for (var i = 0; i < gBoardSize; i++) {
        gNums.push(i + 1);
    }
    for (i = 0; i < gBoardSize; i++) {
        var rndNumIdx = getRandomInteger(0, gNums.length);
        var currNum = gNums.splice(rndNumIdx, 1)[0];
        gNums.push(currNum);
    }
    console.table(gNums);
}
function renderBoard() {
    var strHTML = '<tr>\n'
    var rowCheck = Math.sqrt(gBoardSize);
    for (var i = 0; i < gNums.length; i++) {
        if (i % rowCheck === 0) {
            strHTML += '</tr>\n<tr>\n'
        }
        var currCell = gNums[i];
        strHTML += `<td onclick="cellClicked(this)">${currCell}</td>`
    }
    strHTML += '</tr>\n'
    var elTable = document.querySelector('.board')
    elTable.innerHTML = strHTML;
}
function cellClicked(elCell) {
    var numClicked = +elCell.innerText;
    if (numClicked === gCorrectNum) {
        gCorrectNum++;
        elCell.style.backgroundColor = 'gray';
    }
    // start timer
    if (gCorrectNum === 2) { startTimer(); }
    // stop the timer
    if (gCorrectNum === gBoardSize + 1) { stopTimer(); }
}

function checkUser(num) {
    switch (num) {
        case 16:
            return true;
            break;
        case 25:
            return true;
            break;
        case 36:
            return true;
            break;
        default:
            return false;
            break;
    }
}
function copyMat(mat) {
    var newMat = [];
    for (var i = 0; i < mat.length; i++) {
        newMat[i] = []
        // newMat[i] = mat[i].slice();
        for (var j = 0; j < mat[0].length; j++) {
            newMat[i][j] = mat[i][j];
        }
    }
    return newMat;
}
function getRandomInteger(min, max) {
    var minNum = Math.ceil(min);
    var maxNum = Math.floor(max);
    return Math.floor(Math.random() * (maxNum - minNum) + minNum);
}
const fibs = function(n) {
    let result = [0,1];
    if (n === 0) {
        result = [];
    } else if (n === 1) {
        result = [0];
    }
    for (let i = 2; i < n; i++) {
        result.push(result[i-2] + result[i-1]);
    }
    console.log(result)
    return result;
}
fibs(10)

const fibsRec = function(n) {
    let resultRec = [0,1];
    if (n === 0) {
        resultRec = [];
    } else if (n === 1) {
        resultRec = [0];
    } else {
        let number;
        resultRec = fibsRec(n-1);
        if (resultRec.length < 2) {
            number = 1;
        } else {
            number = resultRec[n-2] + resultRec[n-3];
        }
        resultRec.push(number);
    }
    console.log(resultRec)
    return resultRec;
}
fibsRec(10)
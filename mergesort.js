const mergeSort = function(array) {
    let result = [];
    if (array.length === 0 || array.length === 1) {
        result = array;
    } else {
        let medio = Math.floor(array.length/2);
        let mitadIzq = mergeSort(array.slice(0, medio));
        let mitadDer = mergeSort(array.slice(medio));
        result =merge(mitadIzq, mitadDer);
    }
    console.log(result)
    return result;
}

const merge = function(izq, der) {
    let arrayFinal = [];
    let i = 0;
    let j = 0;
    while (i < izq.length && j < der.length) {
        if (izq[i] <= der[j]) {
            arrayFinal.push(izq[i]);
            i++;
        } else {
            arrayFinal.push(der[j]);
            j++;
        }
    }
    arrayFinal = arrayFinal.concat(izq.slice(i));
    arrayFinal = arrayFinal.concat(der.slice(j));
    return arrayFinal;
}
mergeSort([105, 79, 100, 110]);
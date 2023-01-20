function fibs(arrLength) {
    let arr = [0, 1];
    for (let i = 1; i < arrLength; i++) {
        arr.push((arr[i - 1] + arr[i]));
    }
    return arr;
}

console.log(fibs(7));
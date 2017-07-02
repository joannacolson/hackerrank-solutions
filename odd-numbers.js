/*
 * Complete the function below.
 */
function oddNumbers(l, r) {
    var arr = [];
    // if l is even
    if (l % 2 === 0) {
        // bump l to the next odd number
        l++;
    }
    // go through the odd numbers through r
    for (var i = l; i <= r; i = i + 2) {
        arr.push(i);
    }
    return arr;
}

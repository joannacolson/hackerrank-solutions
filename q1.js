function pairCount(array, number) {
    var pairs = 0;
    for (var i = 0; i < array.length - 1; i++) {
        console.log("i =", i);
        for (var j = i + 1; j < array.length; j++) {
            console.log('j =', j);
            if (array[i] + array[j] == number) {
                pairs++;
                console.log('pairs =', pairs);
            }
        }
    }
    return pairs;
}

var array = [1, 2, 3, 4, 5, 3];
var number = 7;
console.log(pairCount(array, number));

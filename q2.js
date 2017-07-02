/*
 * Complete the function below.
 */
function commonEnding(s1, s2) {
    var a1 = s1.split('').reverse();
    console.log(a1);
    var a2 = s2.split('').reverse();
    console.log(a2);
    var output = [];
    var result = '';
    for (var i = 0; i < a1.length && i < a2.length; i++) {
        if (a1[i] == a2[i]) {
            output.push(a1[i]);
            console.log('This is where I am pushing', output);
        } else {
            console.log(output);
            result = output.reverse().join('');
            console.log(result);
            return result;
        }
    }

    result = output.reverse().join('');
    return result;
}

// var s1 = "This is a new beginning";
// var s2 = "This is a new beginning";
// var s2 = "This is the ending";
var s1 = '';
var s2 = '';
console.log(commonEnding(s1, s2));

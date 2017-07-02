function processData(input) {
    // put the function logic here, using parseInt as needed!
    var i;
    for (i = 0; i < parseInt(input); i++) {
        console.log("hello world");
        // console.log(input);
        // return input;
        // return result;
    }
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
var _input = "";
process.stdin.on("data", function(input) {
    _input += input;
});

process.stdin.on("end", function() {
    processData(_input);
});

/*
 * Complete the function below.
 */
function findNumber(arr, k) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == k) {
            return "YES";
        }
    }
    return "NO";
}

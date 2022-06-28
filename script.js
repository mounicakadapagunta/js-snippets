//find largest number of array
//using for loop
var array = [2, 6, 2, 56, 32, 5, 89, 101, 32];
var largest = 0;

for (i = 0; i <= largest; i++) {
    if (array[i] > largest) {
        var largest = array[i];
    }
}
console.log(largest);

//using math.max
result = Math.max(...array);
console.log(result);

//nth largest number of array elements
function nthLargest(array, highest) {
    array.sort();
    l = array.length;
    if (highest > l) {
        return ("undefined");
    }
    else {
        return (array[l - highest + 1]);
    }
    //console.log(nthLargest([23, 652, 43, 89, 23, 90, 99, 88], 2));
};


var a = 10;
if (a == 20)
    document.write(a); 
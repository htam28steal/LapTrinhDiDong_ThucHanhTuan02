
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."
// Your tasks:
// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.
// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!
function printForecast(arr){
    var n=1;
    var result =``;

    for(element of arr) {
        result += `${element} °C in ${n} day`;

        n++;
    }
    return result;
}
var data1 =[17, 21, 23];
console.log(printForecast(data1))

var data2 =[12, 5, -5, 0, 4];

console.log(printForecast(data2))
/*Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of 
the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long 
integers.*/

function miniMaxSum(arr) {
    // Write your code here
    let currentInd = 0;
    let values = [];
    let total = 0;

    for(let k=0;k<arr.length;k++) {
        for(let i=0;i<arr.length;i++) {
            if(i!==currentInd) {
                total += arr[i];
            }
        }
        values.push(total);
        total = 0;
        currentInd++;
    }

    console.log(Math.min(...values),Math.max(...values));

}

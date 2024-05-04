/*Given a square matrix, calculate the absolute difference between the sums of its diagonals*/

function diagonalDifference(arr) {
    // Write your code here
    let right_total = 0;
    let left_total = 0;
    let count = arr.length-1;
    let absDiff;
    for(let i = 0;i<arr.length;i++) {
        right_total += arr[i][i];
        left_total += arr[i][count];
            count--;
    }

    absDiff = Math.abs((left_total-right_total));
    return absDiff;
}

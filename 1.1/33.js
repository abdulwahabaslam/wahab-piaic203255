var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (num in arr) {
    if (arr[num] == 1) {
        console.log(arr[num],'st');
    }
    else if (arr[num] == 2) {
        console.log(arr[num],'nd');
    }
    else if (arr[num] == 3) {
        console.log(arr[num],'rd');
    }
    else {
        console.log(arr[num],'th');
    }
}
var countBits = function(n) {
    let arr = n.toString(2).split('').map(Number);
    let count = 0;
    for (let i=0; i<arr.length; i++) {
        count += arr[i];
    }
    return count;
};
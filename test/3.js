const arrayA = [21, 2, 1, 2, 4, 5, 5, 8, 78, 80];
const arrayB = [1, 6, 7, 8, 79, 80];

const arrayC = arrayA.filter(item => !new Set(arrayB).has(item));

const arrayD = [...new Set(arrayA.concat(arrayB))];
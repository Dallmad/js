function sumTwoSmallestNumbers(numbers) {
    const arrSort=numbers.sort((a,b)=>a-b)
    return arrSort[0]+arrSort[1]
}
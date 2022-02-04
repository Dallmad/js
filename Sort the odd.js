function sortArray(array) {
    const odds = array.filter(f => f%2).sort((a, b) => a - b);
    return array.map(m => m%2 ? odds.shift() : m);
}
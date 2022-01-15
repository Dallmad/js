function highAndLow(numbers){
    let a=numbers.split(' ').map(e=>+e);
    return ([Math.max(...a),Math.min(...a)]).join(' ')
}

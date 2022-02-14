function narcissistic(value) {
    let x = value.toString().split('').map(m=>m)
    return value===x.reduce((a,b) => a + Math.pow(b,x.length),0)
}
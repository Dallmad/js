function getSum( a,b ){
    if(a === b) {
        return a
    } else {
        const arr = [a,b].sort((a,b) => a-b )
        let acc = 0
        for(let i = arr[0]; i<=arr[1]; i+=1) {
            acc += i
        }
        return acc
    }
}
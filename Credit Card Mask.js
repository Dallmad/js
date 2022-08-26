function maskify(cc) {
    const newArrCC = []
    for(let i =0; i < cc.length-4; i+=1) {
        newArrCC[i] = '#'
    }
    return `${newArrCC.join('')}${cc.slice(-4)}`
}
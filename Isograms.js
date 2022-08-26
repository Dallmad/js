function isIsogram(str){
    if(str.length !== 0) {
        const newStr = new Set(str.toLowerCase())
        return newStr.size === str.length
    } else return true
}
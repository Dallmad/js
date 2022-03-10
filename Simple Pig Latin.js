function pigIt(str){
    return str.split(' ').map(w => w==='!'|w==='?' ? w :`${w.substr(1)}${w.substr(0, 1)}ay`).join(' ')
}
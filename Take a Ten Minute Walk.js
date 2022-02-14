function isValidWalk(walk) {
    return walk.length===10&&
        walk.filter(w => w==='n').length===walk.filter(w => w==='s').length&&
        walk.filter(w => w==='w').length===walk.filter(w => w==='e').length
}
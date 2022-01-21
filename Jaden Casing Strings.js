String.prototype.toJadenCase = function () {
    return this.split(' ').map(s=>s[0].toUpperCase()+s.substring(1)).join(' ')
};
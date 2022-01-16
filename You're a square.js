var isSquare = function(n){
    if (n<0) {
        return false;
    } else if (n>=0) {
        return (Math.sqrt(n)%1===0);
    }}
function finalScore(omr) {
    //write your code here
    if((omr!==null||!Array.isArray(omr))&&typeof omr=='object'){
        let totalMark=omr.right+omr.wrong+omr.skip;
        if(totalMark!=100){
            return "Invalid";
        }
        return Math.round(omr.right-(omr.wrong*0.5));
    }
    return "Invalid";
}

console.log(finalScore({ right: 80, wrong: 20, skip: 0 }))
console.log(finalScore(function add(a,b){}))

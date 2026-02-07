//Problem-01: New Price for Eid Sale
function newPrice(currentPrice, discount) {
    // Your code here

    if(typeof currentPrice!=="number" || typeof discount!=='number'||discount<0||discount>100){
        return "Invalid";
    }
    const discountAmount=(currentPrice*discount)/100;
    return (currentPrice-discountAmount).toFixed(3);
}

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
    // Your code here
    if(typeof otp!=='string') return "Invalid";
    if(otp.length==8 && otp.startsWith("ph-")) return true;
    return false;
}

//Problem-03: BCS Final Score Calculator
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

//Problem-04: Upcoming Gono Vote
function gonoVote(array){
    if(!Array.isArray(array)) return "Invalid";
    let countHa=0;
    let countNa=0;
    for(let item of array){
        item=='ha'?countHa++:countNa++;
    }
    return countHa>countNa?true:countHa<countNa?false:"equal";
}

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str){
    if(typeof str!=="string"||str.trim().length==0) return "Invalid";
    const sentenceArr=str.split(" ");
    let charCount=0;
    let longWords="";
    for(let word of sentenceArr){
        charCount+=word.length;
        if(word.length>longWords.length){
            longWords=word;
        }
    }
    return {longwords:longWords,token:charCount};
}


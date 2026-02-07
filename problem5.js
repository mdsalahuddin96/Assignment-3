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
console.log(analyzeText(" I am a little  honest person"));
console.log(analyzeText("Hello world"));
console.log(analyzeText("Keep coding keep shining"));
console.log(analyzeText(12345))
console.log(analyzeText("Programming is fun"));
console.log(analyzeText("A quick brown fox"));
console.log(analyzeText("  "))
console.log(analyzeText(["i am md salauddin"]));
console.log(analyzeText({name:"sala"}));


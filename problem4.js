function gonoVote(array){
    if(!Array.isArray(array)) return "Invalid";
    let countHa=0;
    let countNa=0;
    for(let item of array){
        item=='ha'?countHa++:countNa++;
    }
    return countHa>countNa?true:countHa<countNa?false:"equal";
}

console.log(gonoVote(["ha","na","ha","na"]));
console.log(gonoVote(['ha','na','na']));
console.log(gonoVote(['ha','ha','ha','na']));

console.log(gonoVote(12345));
console.log(gonoVote(null));
console.log(gonoVote({name:"ha"}));
console.log(gonoVote("ha, ha"));
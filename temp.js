let arr = [2,4,6,8];
let newarr = arr.map((curElem)=>{
    return curElem*2;
}).filter((accumulator,curElem) => {
        return accumulator+=curElem;
});
console.log(newarr);
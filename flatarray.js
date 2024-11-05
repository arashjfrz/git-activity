const nestedArray= [1,[2,3],[4,[5,6]]];
const Combin= [nestedArray[0],...nestedArray[1],nestedArray[2][0],...nestedArray[2][1]];
console.log(Combin);
const restArray=[1,2,3,4,5,6,7];
const [num1,num2,...tempArray]=restArray;
console.log(tempArray);
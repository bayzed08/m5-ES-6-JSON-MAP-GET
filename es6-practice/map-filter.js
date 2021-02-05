const NumsArray = [1, 2, 3, 4, 5, 6, 7];
const output = [];
// for (let i = 0; i < NumsArray.length; i++) {
//     const element = NumsArray[i];
//     const result = element * element;
//     //output[i] = result;
//     output.push(result);
// }
//console.log(output);
// NumsArray.map(function (element,index,array) {
// console.log(element,index,array);
// })

// const doubleNumsArray=NumsArray.map(function (element) {
//     return element * element;
// });
// const doubleNumsArray=NumsArray.map(x=>x*x);
// console.log(NumsArray);
// console.log(doubleNumsArray);

const filterNumsArray=NumsArray.filter(a=> a*a>20 )
console.log(NumsArray);
console.log(filterNumsArray);
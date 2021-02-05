const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
console.log("main Array "+nums);
const partNums = nums.slice(3, 6);
console.log("Slice Aray  "+partNums);
console.log("main Array after slice "+nums);
const spliceNums = nums.splice(3, 4,33,22,44);// remove 4 elemens and add 3 elements
console.log("splice array " + spliceNums);
console.log("main Array after splice " + nums);

const arrayJoin = nums.join("hello ");
console.log(arrayJoin);

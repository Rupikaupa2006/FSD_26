
let students={name:"rupika",age:21,course:"CSE"};
console.table(students);

console.table(["ABC","XYZ"]);
console.table([[1,2,3],[4,5,6]]);//used to display data in tabular format
console.time("test");//used to measure the time taken by a block of code to execute
for(let i=0;i<10000;i++){//loop

}
    console.timeEnd("test");
console.group("CSE24");
console.log("name: Rupika");
console.groupEnd("CSE24");//used to group the related messages together
console.count("click");//used to count the number of times a particular line is executed
console.count("click");
console.count("click");
console.count("click");
console.count("click");
//console.dir(document.body);//used to find property of a element in tree structure

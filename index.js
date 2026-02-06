
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

function add(p,q){
}
console.log(add(10,20));

//arrow function
//why we are using here const value here?
const multiply=(p,q)=>p*q;
console.log("arrow function",multiply(5,5));
//array
let arr=[10,20,30,40];//declaration and initialistaion
console.log(arr[0]);
arr.push(20);
arr.pop();
console.log(arr);
//object
let student={
    name:"rupika",//in objects to write mltiple values we use commas to separate then instad of semicolon
    age:20,
    course:"b.tech",
}
let today =new Date();
console.log(today);
console.log("test");
for(lwt i=0;i<100000;i++){}
console.timeEnd("test");

//table
//let students={name:"rupika",age:"20",course:"cse"};
//console.table(students);

//math function
console.log(Math.sqrt(25));
console.log(Math.pow(2,5));
console.log(Math.random());

//string
text="Hello World";
console.log(text.length);
console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.includes("java"));//checks if the given word is present in the string or not

//type conversion
let strnum="123";
let convert=Number(strnum);
console.log(convert);

//Nan: not a number
console.log(isNaN("abc"));
console.log(isNaN(123));

//dom manipulation
setTimeout(()=>{
    console.log("executed after 2 seconds");
},2000);//2000 is for  2 seconds and 1000 for 1 seconds and so on... 

//try catch exception
try{
    let result=x/0;
    console.log(result);
}catch(error){
    console.log("error");
}
//finally block always gets executed





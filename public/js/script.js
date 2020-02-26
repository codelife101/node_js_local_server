console.log('hello');


let x=2;
const y=10; //cannot change the value when a variable is declared const because its constant
// y=25;
// console.log(y);


//let is only known in the structure that you declear it can not be global
for (let i = 0; i < 5; i++ ){
  // console.log(i);
}


// function total(p,q){
//   console.log(p+q);
// }
// console.log(i);
// total(2,3);

//es6 can only call after getting the fuction definition
//es5 you can call before function is defined





let total =(p,q) => console.log(p+q);
total(2,3);

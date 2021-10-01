// ? Callback function --> function inside fuction
// * fat Arrow function ; tradition function modern syntax ; ()=>  ;
/*
1.  in fat arroow function --> if {} we use -->  return keyword require , else 1 line code automatically add return keyword
2. if 1 argument  --> no need of parathesis 

3. 
()=> ....one line code  ....
()=>{ return ...one line code  ... }
()=> {return (... MULTIPLE LINE .... )}
*/
var myNumber = [1, 3, 5, 7, 9]

//  --- widely use ---
const result = myNumber.filter(num => num != 3)
console.log(result)
//  --- full way ---
const resultOne = myNumber.filter(num => {
  return num != 3
})
console.log(resultOne(numOne))

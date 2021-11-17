//                     ***************First Task**********************
//                        **************Version 1********************


let arr =[56,-14, 183, 11, 402,34, 91,1642] ;
function findaElement (item) {
    for (let i = 0; i < arr.length; i++) {
        if (item == arr[i]) {
            return ("Congrats! We found your item in this array.");
        }
    }
    return ("Sorry,the item you are looking for does not match the array elements.");
}
console.log(findaElement(-855));

function isEven() {
    const even = [56,-14, 183, 11, 402,34, 91,1642];
    let newArr = [];
    for (let i = 0; i < even.length; i++) {
        if (even[i] % 2 == 0) {
            newArr.push(even[i]);
        }
    }
    console.log(newArr);
}
isEven();


//    *****************************************************************************************
//                        **************Version 2******************** 
// function ProcessArrayElements(arr,cb) {
//     let newArr =[];
//     for (let i = 0; i < arr.length; i++) {
//         let result = cb(arr[i]);
//         newArr.push(result)
        
//     }   
//     return newArr;
// }
//Burda yuxaridaki arr`i tanimasi uchun ne etmeliydim?

// function findaElements(items) {
//     if(items == ProcessArrayElements(arr[i]))
//       {
//            return ("Congrats! We found your item in this array.");
//       }
//     else{
//         return ("Sorry,the item you are looking for does not match the array elements.");
//     }
// }

// function findaEven(number) { 
//     if(number % 2 ==0){
//         return ("Number is Even")
//     }
//     else if (number == 0){    
//         return("The number is zero");
//     }
//     else{
//         return ("Number is Odd")
//     }   
    
// }


//console.log(ProcessArrayElements([56,-14, 183,0, 402,34, 91,1642],findaElements));
//console.log(ProcessArrayElements([56,-14, 183, 0, 402,34, 91,1642],findaEven));
//*********************************************************************************************************************** */
// ********** Second Task*************






function calculator(x, y, o){
      switch(o) {
          case '+':
              return x+y;
              break;
          case '-':
              return x-y;
              break;
          case '/':
              return x/y;
              break;
          case '*':
              return x*y;
              break;
          default:
              return ('Enter the numbers to be calculated.')

      }
  }
  console.log(calculator( 845206, 23, '/'));

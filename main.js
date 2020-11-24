// let counter = 0
//const interval = setInterval (function () {
 //if (counter ===5) {
  //   clearInterval (interval)
 //} 
 // else {
 //     console.log(++counter)
 // }
//},1000)

(function() {
  for (const argument of arguments) {
    console.log(argument);
  }
})(1, 2, 3, 4, 5, 6);
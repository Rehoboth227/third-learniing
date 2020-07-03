function ask(question, yes, no, mul, div, err) {
    let ops = prompt(question);
 
     
     console.log(ops);
   if ( ops=== '+' ) {
       let num1 = +prompt('Enter the number1')
       let num2 = +prompt('Enter the number2')
       yes(num1, num2);
     }
   else if(ops === '-') {
       let num1 = +prompt('Enter the number1')
       let num2 = +prompt('Enter the number2')
       no(num1, num2);
     }else if(ops === '*') {
       let num1 = +prompt('Enter the number1')
       let num2 = +prompt('Enter the number2')
       mul(num1, num2);
     }else if(ops === '/') {
       let num1 = +prompt('Enter the number1')
       let num2 = +prompt('Enter the number2')
       div(num1, num2);
     }
   else {err()}
 }
 ask("Enter an operator ?",
  (a, b) => {alert( a + b );}, 
   (a, b) => {alert( a - b );}, 
    (a, b) => {alert( a * b );},
     (a, b) => {alert( a / b );},
     () => { alert('try again later') });

     let mis = 54;
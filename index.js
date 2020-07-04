// function ask(question, yes, no, mul, div, err) {
//   let ops = ( yes, no, mul, div, err)
//   if (ops === '+' || ops === '-' || ops ==='*' || ops ==='/'){
//     console.log(ops);
//   } else {
//     return("try again later");
//   }
//   let num1 = +prompt('Enter the number1');
//   let num2 = +prompt('Enter the number2');
//    switch (ask){
//      case '+':
//       yes(num1, num2);
//       break;
//     case '-':
//       no(num1, num2);
//       break;
//     case '*':
//       mul(num1, num2);
//       break;
//     case '/':
//       div(num1, num2);
//       break;

//     default:
//       err();
//    }   
//   }     
// ask("Enter an operator ?",
// (a, b) => {alert( a + b );}, 
//  (a, b) => {alert( a - b );}, 
//   (a, b) => {alert( a * b );},
//    (a, b) => {alert( a / b );},
//    () => { alert('try again later') });

function ask(question, yes, no, mul, div, err) {
  let ops = prompt(question, '')
  if (ops === '+' || ops === '-' || ops ==='*' || ops ==='/'){
    console.log(ops);
  } else {
    return("try again later");
  }
  let num1 = +prompt('Enter the number1');
  let num2 = +prompt('Enter the number2');
   switch (ask){
     case 'a + b':
      yes(num1, num2);
      break;
    case 'a - b':
      no(num1, num2);
      break;
    case 'a * b':
      mul(num1, num2);
      break;
    case 'a / b':
      div(num1, num2);
      break;

    default:
      err();
   }   
  }     
ask("Enter an operator ?",
(a, b) => {alert( a + b );}, 
 (a, b) => {alert( a - b );}, 
  (a, b) => {alert( a * b );},
   (a, b) => {alert( a / b );},
   () => { alert('try again later') });
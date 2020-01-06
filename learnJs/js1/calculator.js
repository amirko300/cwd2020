var firstNumber = Number(prompt("enter your first number"));
var SecondNumber = Number(prompt("enter your second number"));
var action = prompt("enter the action");
var result = 0;
switch (action) {
    case "+":
        result = firstNumber + SecondNumber;
        break;
    case "-":
        result = firstNumber - SecondNumber;
        break;
    case "*":
        result = firstNumber * SecondNumber;
        break;
    case "/":
        result = firstNumber + SecondNumber;
        break;
    default:
        result = "your action is not valid";
        break;
}
alert('the result is ' + result);
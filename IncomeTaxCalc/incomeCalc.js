const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("How many hours did you work? ", function (answer) {
  grossPay= answer * 58;
  taxRate = 0.16;
  deductions = 0.10;
  amountOfTax = grossPay * taxRate;
  deductions = grossPay * deductions;
  takeHomePay = grossPay -amountOfTax - deductions;
  console.log(`Your gross pay is: $${grossPay}`);
  console.log(`Your total tax is: $${amountOfTax}`);
  console.log(`Your total deductions are: $${deductions}`);
  console.log(`Your total take home pay is: $${takeHomePay}`);
  
});


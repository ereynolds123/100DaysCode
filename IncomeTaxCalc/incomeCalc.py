# A program to calculate take home pay after taxes and deductions

#Inputs
hoursWorked = float(input("Enter the amount of hours worked: "))
payRate = float(input("Enter your pay rate in dollars per hour (to two decimal places): "))
taxRate = 0.16
deductions = 0.10

#Calculates pay
grossPay = hoursWorked * payRate 
amountOfTax = grossPay * taxRate
deductions = grossPay * deductions
takeHomePay = grossPay -amountOfTax - deductions
print("The gross pay is; $" + str(round(grossPay,2)))
print("The total amount of tax taken out is: $" + str(round(amountOfTax,2)))
print("The total amount of deductions taken out is: $" + str(round(deductions,2)))
print("The total take home pay is: $" + str(round(takeHomePay,2)))

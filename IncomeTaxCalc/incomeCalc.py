# A program to calculate take home pay after taxes and deductions

#Inputs
hoursWorked = float(input("Enter the amount of hours worked: "))
payRate = 58
taxRate = 0.16

#Calculates pay
grossPay = hoursWorked * payRate 
amountOfTax = grossPay * taxRate
takeHomePay = grossPay -amountOfTax
print(grossPay)
print(amountOfTax)
print(takeHomePay)

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b == 0:
        return "Error! Division by zero."
    return a / b

def percentage(a, b):
    if b == 0:
        return "Error! Division by zero."
    return (a / b) * 100

def calculator():





    """
    A simple calculator function that allows the user to perform basic arithmetic operations.

    The user can select one of the following operations:
    1. Addition
    2. Subtraction
    3. Multiplication
    4. Division
    5. Percentage

    The function prompts the user to input their choice of operation and two numeric values.
    It then performs the selected operation and displays the result.

    If the user enters invalid input (non-numeric values or an invalid choice), 
    the function will display an appropriate error message.

    Note:
    - Division by zero is not handled in this function and will raise a ZeroDivisionError.
    - The percentage operation calculates what percentage the first number is of the second number.

    Returns:
        None
    """
    print("Select operation:")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Percentage")

    choice = input("Enter choice (1/2/3/4/5): ")

    if choice in ['1', '2', '3', '4', '5']:
        try:
            num1 = float(input("Enter first number: "))
            num2 = float(input("Enter second number: "))
        except ValueError:
            print("Invalid input! Please enter numeric values.")
            return

        if choice == '1':
            print(f"The result is: {add(num1, num2)}")
        elif choice == '2':
            print(f"The result is: {subtract(num1, num2)}")
        elif choice == '3':
            print(f"The result is: {multiply(num1, num2)}")
        elif choice == '4':
            print(f"The result is: {divide(num1, num2)}")
        elif choice == '5':
            print(f"The result is: {percentage(num1, num2)}%")
    else:
        print("Invalid input. Please try again.")

if __name__ == "__main__":
    calculator()
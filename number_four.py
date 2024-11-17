# Function to check if two strings are the same
def is_same_string(input_string, check_string):
    return input_string == check_string

# Take input from the user
input_string = input("Enter the Main string: ")
check_string = input("Enter the string to check: ")

# Call the function and print the result
if is_same_string(input_string, check_string):
    print("The strings are the same.")
else:
    print("The strings are different.")


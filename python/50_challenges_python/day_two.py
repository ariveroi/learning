'''
Write a function called convert_add that takes a list of strings
as an argument and converts it to integers and sums the list. For
example [‘1’, ‘3’, ‘5’] should be converted to [1, 3, 5] and
summed to 9.
'''

def convert_add(strings):
    result = 0
    for num in strings:
        result += int(num)
    return result

'''
Write a function called check_duplicates that takes a list of
strings as an argument. The function should check if the list has
any duplicates. If there are duplicates, the function should return
the duplicates. If there are no duplicates, the function should
return "No duplicates". For example, the list of fruits below
should return apple as a duplicate and list of names should
return "no duplicates".
fruits = ['apple', 'orange', 'banana', 'apple']
names = ['Yoda', 'Moses', 'Joshua', 'Mark']
'''

def check_duplicates(strings):
    set_strings = set()
    duplicates = []
    for string in strings:
        if string in set_strings:
            duplicates.append(string)
        else:
            set_strings.add(string)
    if len(duplicates) == 0:
        return 'no duplicates'
    return duplicates

fruits = ['apple', 'orange', 'banana', 'apple', 'orange']
names = ['Yoda', 'Moses', 'Joshua', 'Mark']

print(check_duplicates(fruits))
print(check_duplicates(names))
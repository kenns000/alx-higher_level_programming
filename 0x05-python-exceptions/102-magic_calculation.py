#!/usr/bin/python3
def magic_calculation(a, b):
    result = 0
    for i in range(1, 3):
        if i > a:
            result = b + a
        else:
            result += (a ** b) / i
    return result

#!/usr/bin/python3
def print_last_digit(number):
    '''prints the last digit of a number'''
    LastDigit = abs(number) % 10
    print(f"{LastDigit}", end='')
    return LastDigit

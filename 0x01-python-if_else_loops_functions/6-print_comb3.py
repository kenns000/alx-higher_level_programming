#!/usr/bin/python3
for n in range(100):
    if int(n / 10) != n % 10 and int(n / 10) < n % 10:
        print("{}{}".format(int(n / 10), n % 10), end="")
        if (n != 89):
            print(", ", end="")
print("")

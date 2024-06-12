#!/usr/bin/python3
def uppercase(str):
    s = ""
    for c in  str:
        if (c >= 'a' and c <='z'):
            c = chr(ord(c) - 32)
        s += c
        print("{}".format(s))

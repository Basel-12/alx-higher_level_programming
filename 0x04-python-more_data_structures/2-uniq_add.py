#!/usr/bin/python3
def uniq_add(my_list=[]):
    myset = set()
    sum = 0
    for i in my_list:
        myset.add(i)
    for i in myset:
        sum += i
    return sum

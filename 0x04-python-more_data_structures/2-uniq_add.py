#!/usr/bin/python3
def uniq_add(my_list=[]):
    set = {}
    sum = 0;
    for i in my_list:
        set.add(i)
    for i in set:
        sum += i
    return sum

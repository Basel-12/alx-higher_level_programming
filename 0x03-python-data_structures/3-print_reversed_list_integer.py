#!/usr/bin/python3
def print_reversed_list_integer(my_list=[]):
    if my_list is None:
        return
    size = len(my_list) - 1
    for i in range(size, -1, -1):
        print("{:d}".format(my_list[i]))

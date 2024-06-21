#!/usr/bin/python3
def multiply_by_2(a_dictionary):
    newd = {}
    for key, value in a_dictionary.items():
        newd[key] = value * 2
    return newd

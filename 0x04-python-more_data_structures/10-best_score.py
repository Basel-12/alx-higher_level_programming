#!/usr/bin/python3
def best_score(a_dictionary):
    maxvalue = 0
    maxkey = None
    for key, value in a_dictionary.items():
        if value > maxvalue:
            maxvalue = value
            maxkey = key
    return maxkey

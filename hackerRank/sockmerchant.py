#!/bin/python3

import math
import os
import random
import re
import sys


# The function accepts following parameters:
#  1. INTEGER n
#  2. INTEGER_ARRAY ar
#

def sockMerchant(n, ar):
    if n > 0 and n < 100:
        for n1 in range(0,len(ar)):
            for n2 in range(1,len(ar)):
                if ar[n1]==ar[n2] and n1 != n2:
                    # print (ar)
                    print (ar[n1])
                    endLoop=True
            if endLoop:
                break

n = 9
ar = [10, 20, 20, 10, 10, 30, 50, 10, 20]
sockMerchant(n, ar)

# if __name__ == '__main__':
#     fptr = open(os.environ['OUTPUT_PATH'], 'w')

#     n = int(input().strip())

#     ar = list(map(int, input().rstrip().split()))

#     result = sockMerchant(n, ar)

#     fptr.write(str(result) + '\n')

#     fptr.close()

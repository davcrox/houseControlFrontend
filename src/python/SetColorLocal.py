#!/usr/bin/env python
# coding=utf-8

# Step 1
import pickle
import sys

from lifxlan import LifxLAN
# Step 2
with open(sys.argv[1]+'.light', 'rb') as ChambreFile:
 
    # Step 3
    device = pickle.load(ChambreFile)

#result = device.set_color([int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4])])
result = device.set_color([int(sys.argv[2]), int(sys.argv[3]), int(sys.argv[4]), int(sys.argv[5])], int(sys.argv[6]), True)


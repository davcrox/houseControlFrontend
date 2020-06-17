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

print(device.get_color())



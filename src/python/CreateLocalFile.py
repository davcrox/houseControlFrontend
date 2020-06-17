#!/usr/bin/env python
# coding=utf-8
import sys
# Step 1
import pickle

from lifxlan import LifxLAN
from pprint import pformat as pf
import os

print(os.getcwd())
lifx = LifxLAN(1, verbose=False)
device = lifx.get_device_by_name(sys.argv[1])
print("Hardware: %s " % pf(device.get_color()))
with open(sys.argv[1]+'.light', 'wb') as fileChambre:
 
  # Step 3
  pickle.dump(device, fileChambre)
 
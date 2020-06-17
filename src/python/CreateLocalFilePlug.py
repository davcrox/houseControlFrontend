#!/usr/bin/env python
# coding=utf-8
import sys
# Step 1
import pickle

from pyHS100 import SmartPlug, SmartBulb
from pprint import pformat as pf
import os

print(os.getcwd())
plug = SmartPlug(sys.argv[1])
print("Hardware: %s" % pf(plug.hw_info))
with open(sys.argv[1]+'.plug', 'wb') as fileChambre:
 
  # Step 3
  pickle.dump(plug, fileChambre)
 
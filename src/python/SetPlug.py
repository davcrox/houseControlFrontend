#!/usr/bin/env python
# coding=utf-8

# Step 1
import sys

from pyHS100 import SmartPlug, SmartBulb
from pprint import pformat as pf
 
plug = SmartPlug(sys.argv[1])
plug.state = sys.argv[2]
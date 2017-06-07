import socket
import sys
import os
from thread import *
import gui as GUI

if not GUI.ON:
    print 'Server Offline'
    sys.exit(2)

while True:
    file = open('f','a+')
    data = file.read()
    file.close()
    if len(str(data)) > 0:
        os.system('gui.py '+data)
        GUI.loging("[SERVER_DATA]: ("+str(data+")"))
        f = open('f','w+')
        f.close()

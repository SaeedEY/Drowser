#!C:/Python27/python
import cgi
import os
import cgitb
import gui as GUI
import client as CL
if not GUI.ON:
    print 'Client Offline'
    sys.exit(2)
cgitb.enable()
print "Content-type: text/html\n\n";
arguments = cgi.FieldStorage()

x = int(arguments.getvalue('x')) if arguments.getvalue('x') != None else 0
y = int(arguments.getvalue('y')) if arguments.getvalue('y') != None else 0
t = int(arguments.getvalue('t')) if arguments.getvalue('t') != None else 0
f = arguments.getvalue('f') if arguments.getvalue('f') != None else 'move'
v = arguments.getvalue('v') if arguments.getvalue('v') != None else None
if v == None:
    arr = '-x '+str(x)+' -y '+str(y)+' -t '+str(t)+' -f '+f
else:
    arr = '-x '+str(x)+' -y '+str(y)+' -t '+str(t)+' -v '+v+' -f '+f
print '<br>'
print arr
print '<br>'
# if(int(x) != 0 and int(y) != 0 and f != None):
GUI.loging("[POSTED_DATA]:"+str(arr))
file = open('f','a+')
file.write(arr)
file.close()

import socket
import sys
import os
from thread import *
import gui as GUI

if not GUI.ON:
    print 'Server Offline'
    sys.exit(2)
"""
HOST = '127.0.0.1'   
PORT = GUI.PORT

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# print 'Socket created'

try:
    s.bind((HOST, PORT))
except socket.error , msg:
    print 'Bind failed. Error Code : ' + str(msg[0]) + ' Message ' + msg[1]
    if int(msg[0]) == 10048:
        GUI.alert('Port has Changed To '+str(GUI.PORT+1),'Port Change')
        GUI.cport('save',PORT+1)
        GUI.alert('new port is '+str(GUI.PORT),'new Port Change')

        sys.exit(1) and os.system('server.py')
        
    else:
        sys.exit()

# print 'Socket bind complete'

s.listen(10)
# print 'Socket now listening'

def clientthread(conn):
    #Sending message to connected client
    # conn.send('Welcome to the server. Receving Data...\n') 

    #infinite loop so that function do not terminate and thread do not end.
    while True:
        #Receiving from client
        try:
            data = conn.recv(1024).decode('base64')
        except Exception, e:
            print 'Connection Refused'
        # reply = 'Done!\n'
"""
while True:
    file = open('f','a+')
    data = file.read()
    file.close()
    if len(str(data)) > 0:
        os.system('gui.py '+data)
        GUI.loging("[SERVER_DATA]: ("+str(data+")"))
        f = open('f','w+')
        f.close()
"""
        # os.system('server.py')
        # sys.exit(0)
        if not data:
            break
        # conn.sendall(reply)
    conn.close()

#now keep talking with the client
while 1:
    #wait to accept a connection
    conn, addr = s.accept()
    GUI.loging('---------------------------------------------------------')
    # print 'Connected with ' + addr[0] + ':' + str(addr[1])
    GUI.loging('[CONNECTED_FROM]:' + addr[0] + ':' + str(addr[1]))
    #start new thread
    start_new_thread(clientthread ,(conn,))

s.close()
"""

#!C:/Python27/python
# import lib/pyautogui as P
import pyautogui as P
import sys
import getopt
from ctypes import windll as ct
#################################### -- Switch -- ###########################################
ON = True
################################### -- Functions -- ##########################################
def cport(func='load',val=8888):
    global PORT
    if str(func) == 'load' or func == None:
        port = open('../conf/PORT','r')
        return port.read()
        port.close()
    elif str(func) == 'save':
        newport = open('../conf/PORT','w')
        newport.write(str(val))
        newport.close()
        PORT = int(val)
        return val
def alert(msg,title):
        if sys.version_info[0] == 2:
            msgb = ct.user32.MessageBoxA
        else: # Python 3 functions.
            msgb = ct.user32.MessageBoxW
        msgb(0,msg,title,0x0)
def getScale():
        if ON:
        	return P.size()
def clickR(x,y):
        if ON:
                if(0<=int(x)<=getScale()[0] and 0<=int(y)<=getScale()[0]):
                        moveTo(x,y,0)
                        P.click(button='right')
def clickL(x,y):
        if ON:
                if(0<=int(x)<=getScale()[0] and 0<=int(y)<=getScale()[0]):
                        moveTo(x,y,0)
                        P.click(button='left')
                else:
                        P.click()
def clickD(x,y):
        if ON:
                if(0<=int(x)<=getScale()[0] and 0<=int(y)<=getScale()[0]):
                        moveTo(x,y,0)
                        P.doubleClick()
                else:
                        P.doubleClick()
def clickT(x,y):
        if ON:
                if(0<=int(x)<=getScale()[0] and 0<=int(y)<=getScale()[0]):
                        moveTo(x,y,0)
                        P.tripleClick()
                else:
                        P.tripleClick()
def moveTo(x,y,second):
        if ON:
                if(second == None):
                        second = 0
                if x != 0 and y != 0 :
                	P.moveTo(x,y,second)
def dragTo(x,y,second):
        if ON:
        	if(second == None):
        		second = 0
        	P.dragTo(x,y,second)
def dragToWhileHolding(x,y,second,btn):
        ##if ON:
        ##	P.dragTo(x,y,second,button=btn)
        print ''
def scrolUp():
        if ON:
                P.scroll(10)
def scrollDown():
        if ON:
                P.scroll(-10)
def enterDown():
        if ON:
                P.keyDown('enter')
def enterUp():
        if ON:
                P.keyUp('enter')
def shiftDown():
        if ON:
                P.keyDown('shift')
def shiftUp():
        if ON:
                P.keyUp('shift')
def write(text):
        if ON:
                P.typewrite(text)
def btnPress(btn):
        if ON:
                if(str(btn)=='ctrl.z' or str(btn)=='ctrl.c' or str(btn)=='ctrl.s' or str(btn)=='ctrl.a' or str(btn)=='ctrl.v'):
                        a = btn.split('.')
                        P.hotkey(a[0],a[1])
                        # alert("hotkey "+a[0]+':'+a[1],'button pressed')
                else:
                        # alert("btn "+str(btn),'button pressed')
                        P.press(str(btn))
def screenshot(filename):
    P.screenshot(filename)
def loging(data):
        f = open('../content/log.txt','r')
        read = f.read()
        f.close()
        file = open('../content/log.txt','w')
        file.write(read+'\n'+data)
        file.close()
        # return ''
        print data
        # return
def main(argv):
        x = 0
        y = 0
        t = 0
        f = ''
        v = ''
        try:
                opts, args = getopt.getopt(argv,"x:y:t:f:v:",["width=","height=","time=","function=","value="])
        except getopt.GetoptError:
                print "sys.argv[0] -x <width> -y <height> -t <time/s> -f <function> -v <value>"
                sys.exit(2)
        for opt, arg in opts:
                if opt == '-h':
                        print "HELP: sys.argv[0] -x <width> -y <height> -t <time/s> -f <function> -v <value>"
                        sys.exit()
                elif opt in ("-x", "--width"):
                        x = int(arg)
                        if(int(arg) not in range(0,getScale()[0])):
                                print 'x[arg:'+str(arg)+'] is not in range '+str(getScale()[0])+': '+str(x)+'\n'
                                break;
                elif opt in ("-y", "--height"):
                        y = int(arg)
                        if(int(arg) not in range(0,getScale()[1])):
                                print 'y[arg:'+str(arg)+'] is not in range '+str(getScale()[1])+': '+str(y)+'\n'
                                break;
                elif opt in ("-t", "--time"):
                        t = int(arg)
                elif opt in ("-f", "--func"):
                        f = arg
                elif opt in ("-v", "--value"):
                        v = arg

                if f == 'click':
                        if v=='left' or v=='1' or v==1 or v=='':
                                clickL(x,y)
                                # print 'clickL '+str(x)+':'+str(y)
                        elif v=='3' or v==3:
                                clickR(x,y)
                                # print 'clickR '+str(x)+':'+str(y)
                        elif v=='double':
                                clickD(x,y)
                                # print 'clickD '+str(x)+':'+str(y)
                        elif v=='triple':
                                clickT(x,y)
                                # print 'clickT '+str(x)+':'+str(y)
                        return 'parameters for Click are x:'+str(x)+'|y:'+str(y)+'|t:'+str(t)+'|f:'+f+'|v:'+v
                elif f == 'move' or f == 1:
                                moveTo(x,y,t)
                                # print 'moveTo '+str(x)+':'+str(y)+' in '+str(t)
                                return 'parameters for Move are x:'+str(x)+'|y:'+str(y)+'|t:'+str(t)+'|f:'+f+'|v:'+v
                elif f == 'drag'  or f == 2:
                        if v != None:
                                dragToWhileHolding(x,y,t,str(v))
                                # print 'dragToWhileHolding '+str(x)+':'+str(y)+' in '+str(t)+' with '+v
                        elif v == None:
                                dragTo(x,y,t)
                                # print 'dragTo '+str(x)+':'+str(y)+' in '+str(t)
                        return 'parameters for Drag are x:'+str(x)+'|y:'+str(y)+'|t:'+str(t)+'|f:'+f+'|v:'+v
                elif f == 'enter'  or f == 3:
                        if v == 'down':
                                enterDown()
                                # print 'enterDown '+str(x)+':'+str(y)
                        elif v == 'up':
                                enterUp()
                                # print 'enterUp '+str(x)+':'+str(y)
                        return 'parameters for Enter are x:'+str(x)+'|y:'+str(y)+'|t:'+str(t)+'|f:'+f+'|v:'+v
                elif f == 'shift'  or f == 4:
                        if v == 'down':
                                shiftDown()
                                # print 'shiftDown '+str(x)+':'+str(y)
                        elif v == 'up':
                                shiftUp()
                                # print 'shiftUp '+str(x)+':'+str(y)
                        return 'parameters for Shift are x:'+str(x)+'|y:'+str(y)+'|t:'+str(t)+'|f:'+f+'|v:'+v
                elif f == 'scroll'  or f == 5:
                        if v == 'down':
                                scrollDown()
                                # print 'shiftDown '+str(x)+':'+str(y)
                        elif v == 'up':
                                scrolUp()
                                # print 'shiftUp '+str(x)+':'+str(y)
                        return 'parameters for Scroll are x:'+str(x)+'|y:'+str(y)+'|t:'+str(t)+'|f:'+f+'|v:'+v
                elif f == 'press' or f == 6:
                        if v != '':
                                btnPress(v)
                                # print 'btnPress '+str(x)+':'+str(y)+' press '+str(v)
                                return 'parameters for Press are x:'+str(x)+'|y:'+str(y)+'|t:'+str(t)+'|f:'+f+'|v:'+v
                elif f == 'write'  or f == 7:
                        if v != None:
                                write(str(v))
                                return 'parameters for Write are x:'+str(x)+'|y:'+str(y)+'|t:'+str(t)+'|f:'+f+'|v:'+v
                elif f == 'alert' or f == 8:
                        if v != None:
                                alert(str(v))
                                return 'parameters for Alert are x:'+str(x)+'|y:'+str(y)+'|t:'+str(t)+'|f:'+f+'|v:'+v
                elif f == 'sh' or f == 9:
                        if v != None:
                                screenshot('../shots/'+v)
                                return 'parameters for ScreenShot are x:'+str(x)+'|y:'+str(y)+'|t:'+str(t)+'|f:'+f+'|v:'+v 
                                # print 'write '+str(x)+':'+str(y)+' text '+str(v)
        # if(str(f) is not None):
        # print 'parameters are x:'+str(x)+'|y:'+str(y)+'|t:'+str(t)+'|f:'+f+'|v:'+v 
        return
if __name__ == "__main__":
        if ON:
                if sys.argv > 5:
                        loging("[EXECUTED_PARAMS]:"+str(main(sys.argv[1:])))
        # print sys.argv
#################################### -- Configs -- ##########################################
P.FAILSAFE = False
PORT = cport('save')

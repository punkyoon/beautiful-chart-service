import time
from random import randrange
from socketIO_client import SocketIO, LoggingNamespace

'''
data format
example = {
'''

while True:
    #with SocketIO('localhost', 8000, LogginNamespace) as SocketIO:
    with SocketIO('52.231.53.33', 80, LoggingNamespace) as SocketIO:
        send_data = {
            'test_value': randrange(50)
        }

        socketIO.emit('my event', send_data)
        time.sleep(0.5)

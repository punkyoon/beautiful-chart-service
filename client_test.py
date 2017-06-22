import time
from random import randrange
from socketIO_client import SocketIO, LoggingNamespace

'''
data format
example = {
    'weekly': ['weekly', x, x, x, x, x, x, x],
    'daily':{
        'Play': ['Play', x],
        'Rest': ['Rest', x],
        'Active': ['Active', x]
    },
    'live': {
        ['Play', x],
        ['Rest', x],
        ['Active', x]
    }
}
'''

while True:
    with SocketIO('localhost', 8000, LogginNamespace) as socketIO:
    #with SocketIO('52.231.53.33', 80, LoggingNamespace) as socketIO:
        send_data = {
            'weekly': ['weekly', 24, 50, 10, 30, 16, 40, 5],
            'daily':{
                'Play': ['Play', 40],
                'Rest': ['Rest', 40],
                'Active': ['Active', 20]
            },
            'live': {
                'Play': ['Play', 20],
                'Rest': ['Rest', 60],
                'Active': ['Active', 20]
            }
        }

        socketIO.emit('data', send_data)
        time.sleep(1)
import time
from random import randrange
from socketIO_client import SocketIO, LoggingNamespace

'''
data format
example = {
    'weekly': [x, x, x, x, x, x, x],
    'daily':{'Play': x, 'Rest': x, 'Active': x},
    'live': {
        'active_chart': {'Active': x, 'Rest': x},
        'play_chart': {'Play': x, 'Rest': x}
    }
}
'''

while True:
    #with SocketIO('localhost', 8000, LogginNamespace) as SocketIO:
    with SocketIO('52.231.53.33', 80, LoggingNamespace) as SocketIO:
        send_data = {
            'weekly': [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 177.0],
            'daily': {'Play': 20, 'Rest': 40, 'Active': 24},
            'live': {
                'active_chart': {'Active': 56.33, 'Rest': 24.03},
                'play_chart': {'Play': 70.33, 'Rest': 30}
            }
        }

        socketIO.emit('data', send_data)
        time.sleep(0.5)

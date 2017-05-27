from flask import Flask, jsonify, render_template
from subprocess import call
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)
app.secret_key = 'mysecret'

socket_io = SocketIO(app)

# _mode = 1 or 2 or 3
_mode = 1

@app.route('/')
def draw():
    return render_template('main.html')

# Chaninging Mode
@socket_io.on('change mode')
def changer(data):
    global _mode
    
    print('receive data: ' + str(data))
    # emit('draw', data, broadcast=True)

if __name__ == '__main__':
    #socket_io.run(app, debug=True, host='0.0.0.0', port=80)
    socket_io.run(app, debug=True, host='localhost', port=8000)

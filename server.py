from flask import Flask, jsonify, render_template
from subprocess import call
from flask_socketio import SocketIO, send, emit

app = Flask(__name__)
app.secret_key = 'mysecret'

socket_io = SocketIO(app)

@app.route('/')
def draw():
    return render_template('main.html')

@socket_io.on('data')
def draw_data(data):
    print('receive data: '+str(data))
    emit('draw', data, broadcast=True)

if __name__ == '__main__':
    #socket_io.run(app, debug=True, host='0.0.0.0', port=80)
    socket_io.run(app, debug=True, host='localhost', port=8000)
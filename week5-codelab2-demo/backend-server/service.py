"""Backend Service"""

import operations
from jsonrpclib.SimpleJSONRPCServer import SimpleJSONRPCServer

SERVER_HOST = 'localhost'
SERVER_PORT = 4040

def add(num1, num2):
    """add method"""
    print("add is called with %d and %d" % (num1, num2))
    return num1+num2

def get_one_news():
    """getOneNews method"""
    print("get One News is called")
    return operations.getOneNews()

RPC_SERVER = SimpleJSONRPCServer((SERVER_HOST, SERVER_PORT))
RPC_SERVER.register_function(add, 'add')
RPC_SERVER.register_function(get_one_news, 'getOneNews')

print("Starting RPC server pn %s:%d" %(SERVER_HOST, SERVER_PORT))

RPC_SERVER.serve_forever()

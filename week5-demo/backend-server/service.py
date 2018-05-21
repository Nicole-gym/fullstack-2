from jsonrpclib.SimpleJSONRPCServer import SimpleJSONRPCServer

SERVER_HOST = 'localhost'
SERVER_PORT = 4040

def add(num1, num2):
    print("add is called with %d and %d" % (num1, num2))
    return num1+num2


RPC_SERVER = SimpleJSONRPCServer((SERVER_HOST, SERVER_PORT))
RPC_SERVER.register_function(add, 'add')

print("Starting RPC server pn %s:%d" %(SERVER_HOST, SERVER_PORT))

RPC_SERVER.serve_forever()

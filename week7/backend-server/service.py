"""Backend Service"""

import operations
from jsonrpclib.SimpleJSONRPCServer import SimpleJSONRPCServer

SERVER_HOST = 'localhost'
SERVER_PORT = 4040

def add(num1, num2):
    """add method"""
    print("add is called with %d and %d" % (num1, num2))
    return num1+num2

def getOneNews():
    """ Test method to get one news """
    print("getOneNews is called")
    return operations.getOneNews()


def getNewsSummariesForUser(user_id, page_num):
    """ Get news summaries for a user """
    print("get_news_summaries_for_user is called with %s and %s" % (user_id, page_num))
    return operations.getNewsSummariesForUser(user_id, page_num)

RPC_SERVER = SimpleJSONRPCServer((SERVER_HOST, SERVER_PORT))
RPC_SERVER.register_function(add, 'add')
RPC_SERVER.register_function(getOneNews, 'getOneNews')
RPC_SERVER.register_function(getNewsSummariesForUser, 'getNewsSummariesForUser')
print("Starting RPC server pn %s:%d" %(SERVER_HOST, SERVER_PORT))

RPC_SERVER.serve_forever()

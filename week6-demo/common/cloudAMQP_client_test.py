from cloudAMQP_client import CloudAMQPClient

TEST_CLOUDAMQP_URL = "amqp://tfcrqbff:GSErdR1AB0DOOIPVWFeal8A8EGBTbPJE@salamander.rmq.cloudamqp.com/tfcrqbff"
TEST_QUEUE_NAME = "test"

def test_basic():
    client = CloudAMQPClient(TEST_CLOUDAMQP_URL, TEST_QUEUE_NAME)

    sentMsg = {'test':'test'}
    client.sendMessage(sentMsg)
    receivedMsg = client.getMessage()
    assert sentMsg == receivedMsg
    print('test_basic passed.')

if __name__ == "__main__":
    test_basic()

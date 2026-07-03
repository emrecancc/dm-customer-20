import pytest
import server

# Use a fixture to start the server on a random available port and ensure it is closed after each test
@pytest.fixture
def srv():
    """Start the server on a random port and yield the instance.
    The server is automatically closed after the test finishes.
    """
    srv = server.Server()
    # Bind to port 0 to let the OS pick an unused port
    srv.listen(0)
    yield srv
    srv.close()

# The original test logic is preserved but now uses the fixture

def test_server(srv):
    # Verify that the server is running
    assert srv.is_running
    # Add any additional assertions or interactions here
    # For example, you might want to send a request to the server and check the response
    # response = srv.send_request("/health")
    # assert response.status_code == 200

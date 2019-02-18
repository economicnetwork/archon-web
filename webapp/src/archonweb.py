import json
from flask import request, render_template, Blueprint, current_app
import redis

#import archondex.relay.radar as radar

archonweb = Blueprint("archon", __name__)  # pylint: disable=invalid-name

host = "127.0.0.1"
port = 6379
redis_client = redis.Redis(host=host, port=port)

data = json.dumps({"price": 0.01})
redis_client.set("test", data)

def resp(res):
    return current_app.response_class(
        response=json.dumps(res),
        status=200,
        mimetype='application/json'
    )

@archonweb.route("/")
def hello():
    """Default route path with link to documentation."""
    #current_app.logger.info("hello")
    res = "hello"
    return resp(res)

@archonweb.route("/orders")
def orders():
    open_orders = json.loads(redis_client.get("test"))
    print ("?? ",open_orders)
    return resp(open_orders)
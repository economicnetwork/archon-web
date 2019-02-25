import json
from flask import request, render_template, Blueprint, current_app
import redis
import requests

#temporary bucket
s3_url = "https://s3-eu-central-1.amazonaws.com/archondex-frontend/"


#import archondex.relay.radar as radar

archonweb = Blueprint("archon", __name__)  # pylint: disable=invalid-name

#host = "127.0.0.1"
#port = 6379
#redis_client = redis.Redis(host=host, port=port)

def resp(res):
    return current_app.response_class(
        response=json.dumps(res),
        status=200,
        mimetype='application/json')

@archonweb.route("/")
def hello():
    """Default route path with link to documentation."""
    #current_app.logger.info("hello")
    res = "<h1>api endpoints</h1><ul><li>api/orders</li><li>api/balance</li></ul>"
    return current_app.response_class(response=res)

@archonweb.route("/api/orders")
def orders():
    response = requests.get(s3_url + "orders").json()
    orders = {"orders": response}
    return resp(orders)

@archonweb.route("/api/balance")
def balances():
    bal = requests.get(s3_url + "balances").json()    
    return resp({"balance":bal})

@archonweb.route("/api/trades")
def trades():
    trades = requests.get(s3_url + "trades").json()
    print (trades)
    return resp({"trades":trades})

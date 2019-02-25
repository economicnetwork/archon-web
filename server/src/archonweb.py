import json
from flask import request, render_template, Blueprint, current_app
from flask_cors import CORS
import redis
import requests
from archondex.abstract_marketmaker import Marketmaker
from archondex.calc_volume import get_sum_volume_date

m = Marketmaker()

archonweb = Blueprint("archon", __name__)

CORS(archonweb)

def resp(res):
    return current_app.response_class(
        response=json.dumps(res),
        status=200,
        mimetype='application/json')

@archonweb.route("/")
def hello():
    res = "<h1>api endpoints</h1><ul><li>api/orders</li><li>api/balance</li></ul>"
    return current_app.response_class(response=res)

@archonweb.route("/api/orders")
def orders():
    orders = m.fetch_orders()
    print ("orders ",orders)
    return resp(orders)

@archonweb.route("/api/balance")
def balances():
    bal = m.fetch_balances()
    return resp(bal)

@archonweb.route("/api/tx")
def tx():
    tx = m.fetch_tx()
    r = resp(tx)
    return r

@archonweb.route("/api/volume")
def volume():
    sum_volume_by_date = get_sum_volume_date()
    r = resp(sum_volume_by_date)
    return r

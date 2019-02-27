# archon web app

Archon webapp is a dashboard for trading. It is a frontend for archon to diplay relevant trading information. It currently supports 0x

The python backend uses archon-dex

## setup

server

```
cd server
export PRIVATEKEY='xxxx'; 
export INFURA_KEY='xxxx';
export PYTHONPATH=pymaker:pyexchange:web3.py:archon-dex:archon

./setup
./run 
```

client

```
cd client
npm install
npm start
```

# BlockChain
Block Chain Introduction <br/>

To run :-  <br/>
(1) npm run dev <br/>

To run other instance on different port <br/>
(2)HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev <br/>
(3)HTTP_PORT=3003 P2P_PORT=5003 PEERS=ws://localhost:5001 npm run dev

On windows use Git  console <br/>

URL <br/>
(1)  Post  :- localhost:3001/transact <br/>
Body <br/>
{
"recipient": "Fake address",
"amount": 50
}
<br/>
Content Type :- Json
<br/>
(2) Get :- localhost:3002/transactions<br/>

Running Instance :- $ HTTP_PORT=3002 P2P_PORT=5002 PEERS=ws://localhost:5001 npm run dev <br/>


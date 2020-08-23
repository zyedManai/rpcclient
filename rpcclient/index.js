
const fetch = require("node-fetch");

const getblockhash = require("./getblockhash")
const gettransaction = require("./gettransaction")
const getblock = require("./getblock")

const express = require('express')
const app = express()
const port = 3000





app.get('/block', (req, res) => {

    getblockhash(req.query.num)
    .then(
        data => getblock(data)
    )
    .then(
        block => res.send(block)
    )
    .catch(
        err => res.send(err)
    )
})

app.get('/tx', (req, res) => {

    gettransaction(req.query.txid)
    
    .then(
        tx => res.send(tx)
    )
    .catch(
        err => res.send(err)
    )
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
const fetch = require("node-fetch");
const config = require ("./config")
const passwordencoder = require("./passwordencoder")


 module.exports  = (txid ) => 

new Promise( (accept , reject) => {

    fetch(config.nodeaddress,
        {
            "method": "POST",
            "headers": {"Authorization" : `Basic ${passwordencoder(config.username, config.password)}`},
            "body": `{"method": "gettransaction" ,  "params": [ "${txid}"] }` 
        })
        .then(
            response =>  {
                
                switch (response.status) {
                    case 401: 
                        return reject(" invalid login or password");
                        
                }
        
              return  response.json()
            }
        )
        .then(
            data => { 
                
                if (data.result) {
                    return accept(data.result);
                }
                 else {
                     return reject(data.error)
                 }
            
            }
        )
        .catch(
            err => reject(err)
        )


})




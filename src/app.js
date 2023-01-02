const express = require('express');
var router = express();
var app = express()
router.use(express.json())
router.use(express.static("public"));
app.use('/', router);

router.get("/test_call", (req,res) => {
   try {
    // res.header({
    //     'Access-Control-Allow-Origin': '*',
    //     'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization',
    //     'Access-Control-Allow-Methods': 'PUT, POST, GET, DELETE, OPTIONS',
    //     'contentType': 'application/json'
    // })
    console.log("tets call");
    return res.status(200).send("0")
   } catch (e) {
    console.log(e);
   }
})

var server = app.listen(process.env.PORT || 8081, () => {
    console.log('Server is started on 127.0.0.1:' + (process.env.PORT || 8081))
})

// https://stackoverflow.com/questions/28566487/node-js-route-not-found
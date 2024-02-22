var express = require('express');
var router = express.Router();

//file input
const fs = require('node:fs');

router.get('/',function(req,res,next){
    fs.readFile('./input.txt', 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }
        outputData=data;
        console.log(data);
        res.send(outputData);
    });
    
})

module.exports = router;
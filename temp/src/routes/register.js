const express = require('express');
const router = express.Router();
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: "7eed5fe5",
    apiSecret: "0NulFEN08L9htfJ2"
  });

  router.post('/register', (req, res) => {
    // A user registers with a mobile phone number
    let phoneNumber = req.body.number;
    let message = req.body.brand;
    let pin_expiry=req.body.pin_expiry

    
    console.log(phoneNumber);
    nexmo.verify.request({number: phoneNumber, brand: message,pin_expiry:pin_expiry}, (err, result) => {
      if(err) {
        //res.sendStatus(500);
        // res.render('status', {message: 'Server Error'});
        console.log(err)
      } else {
        console.log(result);
        let requestId = result.request_id;
        if(result.status == '0') {
        //   res.render('verify', {requestId: requestId});
        console.log(requestId)
        } else {
          //res.status(401).send(result.error_text);
        //   res.render('status', {message: result.error_text, requestId: requestId});
        console.log({message: result.error_text, requestId: requestId})
        }
      }
    });
  });
  
  
  module.exports = router;
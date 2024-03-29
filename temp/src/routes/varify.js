require('dotenv').config()
const express = require('express');
const router = express.Router();
const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: "7eed5fe5",
    apiSecret: "0NulFEN08L9htfJ2"
});

// router.get('/verify',(req,res)=>{
//   res.render('verify');
// });


router.post('/confirm', (req, res) => {
  // Checking to see if the code matches
  let pin = req.body.code;
  let requestId = req.body.requestId;
// console.log('value of requestid in verify post handler is ' + requestId);
  nexmo.verify.check({request_id: requestId, code: pin}, (err, result) => {
    if(err) {
        console.log(err)
      //res.status(500).send(err);
    //   res.render('status', {message: 'Server Error'});
    } else {
      console.log(result);
      // Error status code: https://docs.nexmo.com/verify/api-reference/api-reference#check
      if(result && result.status == '0') {
        res.status(200).send('Account verified!');
        // res.render('status', {message: 'Account verified! 🎉'});
      } else {
        //res.status(401).send(result.error_text);
        // res.render('status', {message: result.error_text, requestId: requestId});
        console.log({message: result.error_text})
      }
    }
  });
});


module.exports = router;
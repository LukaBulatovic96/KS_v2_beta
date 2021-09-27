const express = require('express');
const router = express.Router();
const TestLicnosti = require('../../models/TestLicnosti');

/*
* @route POST api/users/register
* @desc Register the User
* @ access Public
*/

//GetAll vqtests
router.get('/getAll',async (req,res)=>{
  TestLicnosti.find({}).then(testLicnostis=>{
     return  res.status(200).json(testLicnostis);
  });
});

router.post('/submit',(req,res)=>{
  let {
     ans1,
     ans2,
     ans3,
     ans4,
     ans5,
     ans6,
     ans7,
     ans8,
     ans9,
     ans10,
     name
   } = req.body;


    let newsestLicnosti = new TestLicnosti({
      ans1,
      ans2,
      ans3,
      ans4,
      ans5,
      ans6,
      ans7,
      ans8,
      ans9,
      ans10,
      name
    });

    newsestLicnosti.save().then(newsestLicnosti=>{
          return res.status(201).json({
            success:true,
            msg:"Test Licnosti is saved"
          });

});
});


module.exports = router;

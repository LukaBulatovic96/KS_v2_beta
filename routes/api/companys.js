const express = require('express');
const router = express.Router();
const Company = require('../../models/Company');

router.post('/register',(req,res)=>{
  let {
     name
    } = req.body
    //Check for unique company
    Company.findOne({
      name: name
    }).then(company =>{
      if(company){
        return res.status(400).json({
            msg:"Company name already exists."
        });
      }
    })

    // The data is valid and now register the company
    let newCompany = new Company({
      name
    });
    // post the company

    newCompany.save().then(newCompany=>{
          return res.status(201).json({
            success:true,
            msg:"Company is registered"
          });

});
});

router.get('/getAll',async (req,res)=>{
  Company.find({}).then(companys=>{
     return  res.status(200).json(companys);
  });
});


module.exports = router;

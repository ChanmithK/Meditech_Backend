const models = require('../models');

function invoice(req,res){
    const id =req.params.id;
    
    models.Invoice.findAll (id).then(result =>{
        res.status(200).json(result);
    }).catch(error =>{
        res.status(500).json({
            message:"Something went wrong"
        })
    });
    
    }

    module.exports ={
        invoice:invoice
    }

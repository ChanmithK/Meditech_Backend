const models = require('../models');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { condition } = require('sequelize');


function signUp(req, res) {
	// check if the nic address is already existt
	models.Customer.findOne({ where: { nic: req.body.nic } })
		.then(result => {
			// if nic already exists
			if (result) {
				res.status(409).json({
					message: "nic already exists",
				});
			}

			// if nic does not exist
			else {
				// generate a salt for hashing
				bcryptjs.genSalt(10, function (err, salt) {
					// hashing the password
					bcryptjs.hash(req.body.password, salt, function (err, hash) {
						const customer = {
							nic: req.body.nic,
							firstName: req.body.firstName,
							lastName: req.body.lastName,
							email: req.body.email,
							phone: req.body.phone,
							street: req.body.street,
							city: req.body.city,
							province: req.body.province,
							pCode: req.body.pCode,
							password: hash,
						};

						models.Customer.create(customer)
							.then(result => {
								res.status(201).json({
									message: "User created successfully",
								});
							})
							.catch(error => {
								res.status(500).json({
									message: "something went wrong",
								});
							});
					});
				});
			}
		})
		.catch(error => {});
}

function login(req,res){
    models.Customer.findOne({where:{nic:req.body.nic}}).then(customer => {
        if(customer === null){
           res.status(401).json({
               message: "Invalid cerdentials !",
            });  
        }else{
            bcryptjs.compare(req.body.password, customer.password, function(err,result){
               if(result){
                    const token = jwt.sign({
                        nic:customer.nic,
                        customerId: customer.customerId
                    },process.env.JWT_KEY,function(err, token){
                       res.status(200).json({
                           message: "Authentication successfully",
                           token:token
                        }); 
                    });
               }else{
                   res.status(401).json({
                       message: "Invalid cerdentials !",
                    });   
               }
            });
        }
    }).catch(error => {
       res.status(500).json({
           message: "Somethong went wrong !",
        }); 
    }); 
}



module.exports ={
    signUp:signUp,
    login:login
}
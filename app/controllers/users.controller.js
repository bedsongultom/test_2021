
const db = require('../config/db.config.js');
const Users = db.Users;

/**
 * Endpoint: POST /api/users
 * to create user(s)
 * @param {*} req 
 * @param {*} res 
 **/

 exports.createUsers = (req, res) => {
    let users = {};

    try{
        
       users.users = req.body.users;
        
        // Insert into data on users table 
        Users.create(users, 
                          {attributes: ['users']})
                    .then(result => {    
                      res.status(204).json(result);
                      
                    });
    }catch(error){
        res.status(500).json({
            message: "Failed to Insert Data !!!",
            error: error.message
        });
    }
}

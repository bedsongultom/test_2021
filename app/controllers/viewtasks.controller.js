const db = require('../config/db.config.js');
const viewTasks = db.viewTasks;


/**
 *  to list all common tasks of 2 users
 * Endpoint: GET /api/tasks/common
 * @param {*} req 
 * @param {*} res 
 **/


exports.listallcommon = (req, res) => {
    // to find all tasks 's users  
    try{
        viewTasks.findAll({attributes: ['tasks','users']})
        .then(tasks => {
            res.status(200).json(tasks);
        })
    }catch(error) {
    
        console.log(error);

        res.status(500).json({
            message: "No Content!",
            error: error
        });
    }
}



const db = require('../config/db.config.js');
const Tasks = db.Tasks;
const viewTasks = db.viewTasks;

/**
 * to assign tasks to user
 * Endpoint: POST /api/assign
 * @param {*} req 
 * @param {*} res 
 **/


 exports.assignTasks = (req, res) => {
    let tasks = {};

    try{
       tasks.tasks    = req.body.tasks;
       tasks.users_id = req.body.users_id;
    
        // Insert into data on tasks table 
        Tasks.create(tasks, 
                          {attributes: ['tasks', 'users_id']})
                    .then(result => {    
                      res.status(204).json(result);
                    });
    }catch(error){
        res.status(500).json({
            message: "Failed to Insert Data !",
            error: error.message
        });
    }
}


/**
 * to remove task(s) from user
 * Endpoint: DELETE /api/unassign
 * @param {*} req 
 * @param {*} res 
 **/

 exports.unassignTasks = async (req, res) => {
    try{
        let tasks_id = req.params.tasks_id;
        let tasks = await Tasks.findByPk(tasks_id);

        if(!tasks){
            res.status(404).json({
                message: "DoesN't exist a Tasks_id = " + tasks_id,
                error: "404",
            });
        } else {

            // delete data by using parameter: tasks_id
            await tasks.destroy();
            res.status(204);
        }
    } catch(error) {
        res.status(500).json({
            message: "Failed to delete a tasks_id = " + req.params.tasks_id,
            error: error.message
        });
    }
}


 
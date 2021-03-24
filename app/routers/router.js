let express = require('express');
let router = express.Router();
 
const tasks = require('../controllers/tasks.controller.js');
const viewtasks = require('../controllers/viewtasks.controller.js');
const users = require('../controllers/users.controller.js');



router.post('/api/users', users.createUsers);
router.post('/api/assign', tasks.assignTasks);
router.delete('/api/unassign/:tasks_id', tasks.unassignTasks);
router.get('/api/tasks/common', viewtasks.listallcommon);



module.exports = router;
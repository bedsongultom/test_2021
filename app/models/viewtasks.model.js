module.exports = (sequelize, Sequelize) => {
	const viewTasks = sequelize.define('view_users_tasks', {	
	  tasks_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
    },

    tasks: {
        type: Sequelize.STRING
		
  },

	  users: {
			type: Sequelize.STRING
			
    },

	
	users_id: {
		type: Sequelize.INTEGER
		
}


},

{
	timestamps: false
    
	});
	
	return viewTasks;
}



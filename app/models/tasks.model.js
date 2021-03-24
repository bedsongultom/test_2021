//https://github.com/loizenai/Nodejs-Tutorials/tree/master/Nodejs-Reactjs-PostgreSQL-Example

module.exports = (sequelize, Sequelize) => {
	const Tasks = sequelize.define('tasks', {	
	  tasks_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
    },

    tasks: {
        type: Sequelize.STRING,
		allowNull: false
  },

	  users_id: {
			type: Sequelize.INTEGER,
			allowNull: false
			
    }
},

{
	timestamps: false
    
	});
	
	return Tasks;
}

module.exports = (sequelize, Sequelize) => {
	const viewTasks = sequelize.define('view_users_tasks', {	
	  tasks_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
    },

    tasks: {
        type: Sequelize.STRING,
		allowNull: false
  },

	  users: {
			type: Sequelize.STRING,
			allowNull: false
			
    }
},

{
	timestamps: false
    
	});
	
	return viewTasks;
}



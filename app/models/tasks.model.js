module.exports = (sequelize, Sequelize) => {
	const Tasks = sequelize.define('tasks', {	
	  tasks_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
    },

    tasks: {
        type: Sequelize.STRING
		
  },

	  users_id: {
			type: Sequelize.INTEGER
			
			
    }
},

{
	timestamps: false
    
	});
	
	return Tasks;
}


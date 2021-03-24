//https://github.com/loizenai/Nodejs-Tutorials/tree/master/Nodejs-Reactjs-PostgreSQL-Example

module.exports = (sequelize, Sequelize) => {
	const Users = sequelize.define('users', {	
	  users_id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
    },
	  users: {
			type: Sequelize.STRING
	 		 },

			  createdat:{
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.NOW
			},
			updatedat:{
				type: Sequelize.DATE,
				allowNull: false,
				defaultValue: Sequelize.NOW
			}
		},

		{
		timestamps: false
	});
	
	return Users;
}
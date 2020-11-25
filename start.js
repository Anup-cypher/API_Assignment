const mongoose = require('mongoose');

mongoose.Promise=global.Promise;

let dbConnection = async () => {
	try{
		await mongoose.connect('mongodb://localhost/employees', {useNewUrlParser: true});
        console.log('Database connection succeed');
    } catch(e) {
		console.log('Sorry could not connet database due to ', e);
	}
};

dbConnection();


require('./model/model_employee.js');
require('./index.js');
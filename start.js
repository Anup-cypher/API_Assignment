const mongoose = require('mongoose');

mongoose.Promise=global.Promise;

let dbConnetion = async () => {
	try{
		await mongoose.connect('mongodb://localhost/employee', {useNewUrlParser: true});
        console.log('Database connection succeed');
    } catch(e) {
		console.log('Sorry could not connet database due to ', e);
	}
};

dbConnetion();


require('./model/model_employee.js');
require('./index.js');
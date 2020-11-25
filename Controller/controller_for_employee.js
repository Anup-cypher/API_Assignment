const mongoose = require('mongoose');
const Employee = mongoose.model('Employee');
const fetch = require('node-fetch');

exports.get_employee_data = async (request, response) => {
    try{
        let api_data_response = await fetch("http://dummy.restapiexample.com/api/v1/employees");
    if (api_data_response.ok) { 
        let employee_json = await api_data_response.json();
        response.status(200).json(employee_json);
      } else {
        console.log("HTTP-Error: " + api_data_response.status);
      }
    }catch(e){
        console.log('Error is:');
        console.log(e);
    }
}

exports.get = async (request, response) => {
    const employee_data = await Employee.find({});
    return response.status(200).json(employee_data );

}

exports.create =  async (request, response)=>{
    let {id, employee_name, employee_salary, employee_age, profile_image} = request.body
    let employees = new Employee();
    employees .id = id;
    employees .employee_name = employee_name;
    employees .employee_age = employee_age;
    employees .employee_salary = employee_salary;
    employees .profile_image = profile_image;
    await employees .save();
    return response.status(201).json(employees );
}

exports.update = async (request, response) => {
    let {id, employee_name, employee_salary, employee_age, profile_image} = request.body
    let employees  = await Employee.findById(request.params.id);
    if(!employees ){
        return response.status(204).json({'error': 'Employee Data not found'});
    }else{
        employees .id = id;
    employees .employee_name = employee_name;
    employees .employee_age = employee_age;
    employees .employee_salary = employee_salary;
    employees .profile_image = profile_image;
    await employees .save();
    return response.status(200).json(employees );
    }
}

exports.destroy = async (request, response)=> {
    let employees  = await Employee.findById(request.params.id);
    if(!employees ){
        return response.status(204).json({'error': 'Employee Data not found'});
    }else{
        await employees .remove();
        return response.status(204).json(employees );
    }
}

exports.getById = async (request, response) =>{
    let employees  = await Employee.findById(request.params.id);
    return response.status(200).json(employees );
}
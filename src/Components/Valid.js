import React, { useState } from 'react';
// import './F1.css';
import * as Yup from 'yup';
import FormFields from './Form.js';

const Form = ({ onAddEmployee, employees }) => {
  
  const [employee, setEmployee] = useState({
    Id: '',
    Name: '',
    Age: '',
    Email: '',
    Phone: '',
    Qualification: '',
    Experience: ''
  });
  const [errors, setErrors] = useState({});
  const schema = Yup.object().shape({
    
    Id: Yup.string().required('Employee ID is required').notOneOf(employees.map(emp => emp.Id), 'Employee ID should be unique'),
    Name: Yup.string().required('Employee Name is required').max(20, 'Employee Name should be maximum 20 characters'),
    Age: Yup.number().required('Age is required').min(19, 'Age should be above 18'),
    Email: Yup.string().required('Email is required').email('Email should be valid'),
    Phone: Yup.string().required('Phone Number is required'),
    Qualification: Yup.string().required('Qualification is required'),
    Experience: Yup.string().required('Experience is required')
  });

  const handleChange = async (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
    try {
      await schema.validateAt(name, { [name]: value });
      setErrors({...errors, [name]: ''});
      console.log(name);
    } catch (err) {
      setErrors({...errors, [name]: err.message});
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await schema.validate(employee, { abortEarly: false });
      onAddEmployee(employee);
      const a=parseInt(employee.Id);
      console.log(a);
      setEmployee({
        Id: '',
        Name: '',
        Age: '',
        Email: '',
        Phone: '',
        Qualification: '',
        Experience: ''
      });
    } catch (err) {
      const newErrors = {};
      err.inner.forEach(e => {
        newErrors[e.path] = e.message;
      });
      setErrors(newErrors);
    }
  };

  return (
    <div>
       <FormFields
        employee={employee}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Form;

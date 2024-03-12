import React, { useState, useEffect } from 'react';
import Valid from './Valid.js';
import EmployeeList from './List.js';
import Datas from './Data.json';

function Main() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));

    if (storedEmployees) {
      setEmployees([...Datas.employe, ...storedEmployees]);
    }
    else{
      setEmployees(Datas.employe);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const addEmployee = (employee) => {
    setEmployees([...employees, employee]);
  };

  return (
    <div className="container">
      <Valid onAddEmployee={addEmployee} employees={employees} />
      <EmployeeList employees={employees} />
    </div>
  );
}

export default Main;
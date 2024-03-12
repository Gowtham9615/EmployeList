import React from 'react';
import './List.css'; 

const EmployeeList = ({ employees }) => {
  const employeeFields = employees.length > 0 ? Object.keys(employees[0]) : [];

  return (
    <div className="container">
      <h2 className='list'>Employee List</h2>
      <div className="grid-container">
        {employeeFields.map((field, index) => (
          <div key={index} className="grid-item">
            <div className='data-input'>
              <div className="label"><strong>{field}</strong></div>
              <div className="data">
                {employees.map((employee, employeeIndex) => (
                  <div key={employeeIndex} className="value">
                    {employee[field] || '-'}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;

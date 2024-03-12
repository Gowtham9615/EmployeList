import './Form.css';
import React from 'react';
function Form({ employee, errors, handleChange, handleSubmit }){

        return(<div>
            <div className='form-fields' style={{ height: 'auto' }}>
        <form onSubmit={handleSubmit} className='field'>
          <div>
            <label className='la'>Enter Employee ID:</label><br />
            <input type="text" name="Id" value={employee.Id} onChange={handleChange} className='in'/>
            {errors.Id && <span className="error">{errors.Id}</span>}

          </div>
          <div>
            <label className='la'>Enter Employee Name:</label><br />
            <input type="text" name="Name" value={employee.Name} onChange={handleChange} className='in'/>
            {errors.Name && <span className="error">{errors.Name}</span>}
          </div>
          <div>
            <label className='la'>Enter Employee Age:</label><br />
            <input type="number" name="Age" value={employee.Age} onChange={handleChange} className='in'/>
            {errors.Age && <span className="error">{errors.Age}</span>}
          </div>
          <div>
            <label className='la'>Enter Employee Email:</label><br />
            <input type="email" name="Email" value={employee.Email} onChange={handleChange} className='in'/>
            {errors.Email && <span className="error">{errors.Email}</span>}
          </div>
          <div>
            <label className='la'>Enter Phone Number:</label><br />
            <input type="text" name="Phone" value={employee.Phone} onChange={handleChange} className='in'/>
            {errors.Phone && <span className="error">{errors.Phone}</span>}
          </div>
          <div>
            <label className='la'>Enter Employee Qualification:</label><br />
            <input type="text" name="Qualification" value={employee.Qualification} onChange={handleChange} className='in'/>
            {errors.Qualification && <span className="error">{errors.Qualification}</span>}
          </div>
          <div>
            <label className='la'>Enter Employee Experience:</label><br />
            <input type="text" name="Experience" value={employee.Experience} onChange={handleChange} className='in'/>
            {errors.Experience && <span className="error">{errors.Experience}</span>}
          </div><br />
          <button type="submit" className='bu'>Add Employee</button>
        </form>
      </div>
        </div>);

}
export default Form;
import React from 'react';

import './form-input.styles.scss';

interface FormInputProps {
  handleChange: any,
  label?: any,
  type: string,
  name: string,
  value: any,
  required: boolean
}

const FormInput:React.FC<FormInputProps> = ({ handleChange, label, type, value, name, required }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} type={type} name={name} value={value} required={required}/>
      {
        label ?
        (<label className={`${value.length} ? 'shrink' : '' form-input-label`}>
          {label}
        </label>) : null
      }
    </div>
  )
}

export default FormInput;
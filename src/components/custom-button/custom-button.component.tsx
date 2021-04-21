import React from 'react';

import './custom-button.styles.scss';

interface CustomButtonProps {
  type: "button" | "submit" | "reset" | undefined;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, type }) => {
  return (
    <button className="custom-button" type={type}>
      {children}
    </button>
  )
}

export default CustomButton;
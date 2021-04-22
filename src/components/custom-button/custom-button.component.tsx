import React from 'react';

import './custom-button.styles.scss';

interface CustomButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: any;
  isGoogleSignIn?: any;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, type, onClick, isGoogleSignIn }) => {
  return (
    <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default CustomButton;
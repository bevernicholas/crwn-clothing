import React from 'react';

import './custom-button.styles.scss';

interface CustomButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: any;
  isGoogleSignIn?: boolean;
  inverted?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ children, type, onClick, isGoogleSignIn, inverted }) => {
  return (
    <button className={`${inverted ? 'inverted': ''}${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

export default CustomButton;
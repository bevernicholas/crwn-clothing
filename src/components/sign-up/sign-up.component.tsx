import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart, UserCredentials } from '../../redux/user/user.actions';

import './sign-up.styles.scss';

interface SignUpStateInterfaceState {
  displayName: string,
  email: string,
  password: string,
  confirmPassword: string
}

interface SignUpProps{
  signUpStart: any;
}

const SignUp: React.FC<SignUpProps> = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = userCredentials;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords Do Not Match");
      return;
    }

    if (email === "" || password === "" || displayName === "" || confirmPassword === "") {
      alert("Please Fill Out All Proper Fields");
      return;
    }

    signUpStart({ email, password, displayName });
  }

  const handleChange =(event: React.FormEvent<HTMLInputElement> | any) => {
    const { value, name } = event.target;
    setUserCredentials({ ...userCredentials, [name]:  value });
  }

  return (
    <div className="sign-up">
      <h2 className="title">Need to Sign Up?</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          label="Confirm Password"
          required
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  signUpStart: (userCredentials: UserCredentials) => dispatch(signUpStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);
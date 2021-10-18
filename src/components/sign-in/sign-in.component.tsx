import React, { useState } from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { googleSignInStart, emailSignInStart } from '../../redux/user/user.actions';

import './sign-in.styles.scss';

interface SignInState {
  email: string;
  password: string;
}

interface SignInPageProps {
  googleSignInStart: any;
  emailSignInStart: any;
}

const SignIn: React.FC<SignInPageProps> = ({ emailSignInStart, googleSignInStart }) => {
  const [userCredentials, setCredentials] = useState({ email: '', password: '' });

  const { email, password } = userCredentials;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    emailSignInStart(email, password);
  }

  const handleChange =(event: React.FormEvent<HTMLInputElement> | any) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  }

  return (
    <div className="sign-in">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput name="email" type="email" value={email} required handleChange={handleChange} label="email"/>
        <FormInput name="password" type="password" value={password} required handleChange={handleChange} label="password"/>
        <div className="buttons">
          <CustomButton type="submit">Sign In</ CustomButton>
          <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn={true}>Sign In With Google</ CustomButton>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch: any) => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email: string, password: string) => dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
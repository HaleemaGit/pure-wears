import React, { useState, useEffect, useContext  } from 'react';
import { getRedirectResult } from 'firebase/auth';
import FormInput from '../form-input/form-input.component';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { UserContext } from '../../contexts/user.context';
import {
 auth,
 signInWithGoogleRedirect,
 signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';
import './sign-in-form.styles.scss';


const defaultFormFields = {
 email: '',
 password: '',
};


const SignInForm = () => {
 const [formFields, setFormFields] = useState(defaultFormFields);
 const { email, password } = formFields;


 const { setCurrentUser } = useContext(UserContext);


 const resetFormFields = () => {
   setFormFields(defaultFormFields);
 };




 useEffect(() => {
   const fetchData = async () => {
     try {
       const response = await getRedirectResult(auth);
       if (response && response.user) {
        //  await createUserDocumentFromAuth(response.user);
         setCurrentUser(response.user);
       }
       console.log(response);
     } catch (error) {
       console.error(error);
     }
   };
    fetchData();
 }, [setCurrentUser]);
 


 const handleSubmit = async (event) => {
   event.preventDefault();


   try {
     const response = await signInAuthUserWithEmailAndPassword(email, password);
     console.log(response);
     setCurrentUser(response.user);
     resetFormFields();
   } catch (error) {
     switch (error.code) {
       case 'auth/wrong-password':
         alert('Incorrect password for email');
         break;
       case 'auth/user-not-found':
         alert('No user associated with this email');
         break;
       default:
         console.log(error);
     }
   }
 };


 const handleChange = (event) => {
   const { name, value } = event.target;
   setFormFields({ ...formFields, [name]: value });
 };


 return (
   <div className='sign-up-container'>
     <h2>Already have an account?</h2>
     <span>Sign in with your email and password</span>
     <form onSubmit={handleSubmit}>
       <FormInput
         label='Email'
         type='email'
         required
         onChange={handleChange}
         name='email'
         value={email}
       />


       <FormInput
         label='Password'
         type='password'
         required
         onChange={handleChange}
         name='password'
         value={password}
       />
       <div className='buttons-container'>
         <Button type='submit'>Sign In</Button>
          { /*<Button type='button' buttonType='google' onClick={signInWithGoogle}>
           Sign in with Google Popup
         </Button>*/ }
         <Button
         buttonType={BUTTON_TYPE_CLASSES.google}
         type='button'
         onClick={signInWithGoogleRedirect}
       >
         Google signin
       </Button>
       </div>
     </form>
   </div>
 );
};


export default SignInForm;
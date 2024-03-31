import {Formik,Form,Field,ErrorMessage} from 'formik'
import { useState } from 'react'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';

const Login = () =>{
const [emailValue,setEmailvalue] =useState('')
const [passwordValue,setPasswordvalue] =useState('')

  return (
    <div>
      <h1>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('Invalid email address')
            .required('Required'),
          password: Yup.string()
            .min(6, 'Password must be at least 6 characters')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>

          <Link to = "/"><button type="submit">Submit</button></Link>
        </Form>
      </Formik>

    </div>
  );
};

export default Login
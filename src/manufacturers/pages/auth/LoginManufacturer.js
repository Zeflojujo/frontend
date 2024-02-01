// src/components/LoginPage.js

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';

const LoginManufacturer = () => {
  const initialValues = {
    username: '',
    password: '',
    captcha: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
    captcha: Yup.string().required('Please complete the reCAPTCHA verification'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Perform authentication (this is where you would send data to the server)
    console.log('Authentication successful!', values);
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="username" className="block text-sm font-medium text-gray-600">
                  Username:
                </label>
                <Field
                  type="text"
                  id="username"
                  name="username"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your username"
                />
                <ErrorMessage name="username" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                  Password:
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className="mt-1 p-2 w-full border rounded-md"
                  placeholder="Enter your password"
                />
                <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <div className="mb-4">
                <ReCAPTCHA
                  sitekey="YOUR_RECAPTCHA_SITE_KEY"
                  onChange={(value) => {
                    // setFieldValue('captcha', value);
                  }}
                />
                <ErrorMessage name="captcha" component="div" className="text-red-500 text-sm mt-1" />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Logging In...' : 'Login'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>

  )
}

export default LoginManufacturer
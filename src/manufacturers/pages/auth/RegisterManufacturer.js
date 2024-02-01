 // src/components/AuthPage.js
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import ReCAPTCHA from 'react-google-recaptcha';

const RegisterManufacturer = ({ isLogin }) => {
  const initialValues = {
    username: '',
    password: '',
    confirmPassword: '',
    location: '',
    name: '',
    phoneNumber: '',
    captcha: '',
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Confirm Password is required'),
    location: Yup.string().required('Location is required'),
    name: Yup.string().required('Name is required'),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, 'Phone number must be 10 digits')
      .required('Phone number is required'),
    captcha: Yup.string().required('Please complete the reCAPTCHA verification'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Perform registration or login (this is where you would send data to the server)
    console.log('Authentication successful!', values);
    setSubmitting(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h2>
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

              {!isLogin && (
                <>
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
                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-600">
                      Confirm Password:
                    </label>
                    <Field
                      type="password"
                      id="confirmPassword"
                      name="confirmPassword"
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Confirm your password"
                    />
                    <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </>
              )}

              {!isLogin && (
                <>
                  <div className="mb-4">
                    <label htmlFor="location" className="block text-sm font-medium text-gray-600">
                      Location:
                    </label>
                    <Field
                      type="text"
                      id="location"
                      name="location"
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Enter your location"
                    />
                    <ErrorMessage name="location" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                      Name:
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Enter your name"
                    />
                    <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1" />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-600">
                      Phone Number:
                    </label>
                    <Field
                      type="text"
                      id="phoneNumber"
                      name="phoneNumber"
                      className="mt-1 p-2 w-full border rounded-md"
                      placeholder="Enter your phone number"
                    />
                    <ErrorMessage name="phoneNumber" component="div" className="text-red-500 text-sm mt-1" />
                  </div>
                </>
              )}

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
                {isSubmitting ? 'Processing...' : isLogin ? 'Login' : 'Register'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};


export default RegisterManufacturer
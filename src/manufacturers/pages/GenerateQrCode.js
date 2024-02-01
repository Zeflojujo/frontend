import React, {useState} from 'react';
import Header from "../inc/Header";
import Sidebar from '../inc/Sidebar';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import QRCode from 'qrcode';

const GenerateQrCode = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [data, setData] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL(data);
      console.log("response", response);
      setImageUrl(response);
    } catch(error) {
      console.log("This error from generateQrCode");
    }
  }




  const initialValues = {
    Status: '',
    Model: '',
    Brand: '',
    ManufacturerName: '',
    ManufacturerLocation: '',
  };

  const validationSchema = Yup.object().shape({
    Status: Yup.string().required('Status is required'),
    Model: Yup.string().required('Model is required'),
    Brand: Yup.string().required('Brand is required'),
    ManufacturerName: Yup.string().required('Manufacturer Name is required'),
    ManufacturerLocation: Yup.string().required('Manufacturer Location is required')
  });

  const handleGenerateQrCode = (values, { setSubmitting }) => {
    // Perform registration or login (this is where you would send data to the server)
    console.log('Authentication successful!', values);
    setData(values);
    generateQrCode();

    //Clear the fields
    values.Status = "";
    values.Brand = "";
    values.ManufacturerName = "";
    values.ManufacturerLocation = "";
    values.Model = "";
    setSubmitting(false);
  };


  return (

// const RegisterManufacturer = ({ isLogin }) => {
    <div className="flex">
        {/* Manufacturers Sidebar component is included */}
        <div className='fized'>
          <Sidebar toggleSidebar={toggleSidebar} isOpen={isSidebarOpen}/>
        </div>
      <div className="flex flex-col w-full gap-y-4 text-3xl semibold h-screen">
        <div className="mb-16">
          <Header toggleSidebar={toggleSidebar} isOpen={isSidebarOpen} />
          
        </div>

        {/* Manufactuerers ViewFakeProduct page should be created here */}
        <div className="flex justify-center items-center mx-auto w-full">

        {/* Manufacturers Header component is included */}

          <div className="w-3/4 mt-8 flex flex-col items-center justify-center shadow-md bg-white">
          <h1 className="text-2xl flex justify-center md:text-3xl lg:text-4xl font-bold mb-4">Manufactuerers Generate QrCode</h1>
            
            <div className="w-3/4 rounded-md p-6 mb-6 shadow-md">
              <span className="text-base md:text-lg lg:text-xl text-gray-500 font-semibold ">Fill This Form inorder to Generate QrCode</span>
              <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleGenerateQrCode}>
                {({ isSubmitting }) => (
                  <Form>

                    <div className='grid md:grid-cols-2 gap-x-2 mb-4 w-full mt-4'>

                    <div className="mb-4">
                      <label htmlFor="Status" className="block text-sm md:text-base lg:text-lg font-medium text-gray-600">
                        Status
                      </label>
                      <Field
                        type="text"
                        id="Status"
                        name="Status"
                        className="mt-1 p-2 w-full border rounded-md"
                        placeholder="Enter your Status"
                      />
                      <ErrorMessage name="Status" component="div" className="text-red-500 text-sm mt-1" />
                    </div>

                        <div className="mb-4">
                          <label htmlFor="Brand" className="block text-sm md:text-base lg:text-lg font-medium text-gray-600">
                            Brand:
                          </label>
                          <Field
                            type="text"
                            id="Brand"
                            name="Brand"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Enter Manufacturer Brand"
                          />
                          <ErrorMessage name="Brand" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                    </div>
                    
                    <div className='grid md:grid-cols-2 gap-x-2 mb-4 w-full'>

                    <div className="mb-4">
                          <label htmlFor="ManufacturerName" className="block text-sm md:text-base lg:text-lg font-medium text-gray-600">
                            Manufacturer Name:
                          </label>
                          <Field
                            type="text"
                            id="ManufacturerName"
                            name="ManufacturerName"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Enter Manufacturer Name"
                          />
                          <ErrorMessage name="ManufacturerName" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                        <div className="mb-4">
                          <label htmlFor="ManufacturerLocation" className="block text-sm md:text-base lg:text-lg font-medium text-gray-600">
                            Manufacturer Location:
                          </label>
                          <Field
                            type="text"
                            id="ManufacturerLocation"
                            name="ManufacturerLocation"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Enter Manufacturer Location"
                          />
                          <ErrorMessage name="ManufacturerLocation" component="div" className="text-red-500 text-sm mt-1" />
                        </div>

                    </div>
                        

                        <div className="mb-4">
                          <label htmlFor="Model" className="block text-sm md:text-base lg:text-lg font-medium text-gray-600">
                            Product Model:
                          </label>
                          <Field
                            type="text"
                            id="Model"
                            name="Model"
                            className="mt-1 p-2 w-full border rounded-md"
                            placeholder="Enter Product Model"
                          />
                          <ErrorMessage name="Model" component="div" className="text-red-500 text-sm mt-1" />
                        </div>
                    <button
                      type="submit"
                      className="bg-blue-500 text-lg text-white p-2 rounded-md w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : 'Generate'}
                    </button>
                  </Form>
                )}
              </Formik>

              {imageUrl === "" ? "":
                <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <a href='imageUrl' download={true}><img src={imageUrl} alt='def' /></a>
                </div>
              }

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default GenerateQrCode
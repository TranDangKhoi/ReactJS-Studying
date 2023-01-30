import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const SignUpFormV2 = () => {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: ''
      }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(20, 'Your first name must be less than 20 characters')
          .required('Please enter your first name'),
        lastName: Yup.string()
          .max(10, 'Your last name must be less than 10 characters')
          .required('Please enter your last name')
      })}
      onSubmit={(values) => {
        console.log(values)
      }}
    >
      <Form
        className='p-10 w-full max-w-[500px] mx-auto my-5'
        autoComplete='off'
      >
        <div className='flex flex-col gap-2'>
          <label htmlFor='firstName'>First Name</label>
          <Field
            name='firstName'
            type='text'
            className='p-4 rounded-lg border-2 border-gray-200'
            placeholder='Enter your first name'
          ></Field>
          <span className='text-md text-red-500'>
            <ErrorMessage name='firstName'></ErrorMessage>
          </span>

          <label htmlFor='lastName'>Last Name</label>
          <Field
            name='lastName'
            type='text'
            className='p-4 rounded-lg border-2 border-gray-200'
            placeholder='Enter your last name'
          ></Field>
          <span className='text-md text-red-500'>
            <ErrorMessage name='lastName'></ErrorMessage>
          </span>
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white text-lg rounded-lg p-5'
        >
          Submit
        </button>
      </Form>
    </Formik>
  )
}

export default SignUpFormV2

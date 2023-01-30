import React from 'react'
import { Controller, useController, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useEffect } from 'react'
// using react-hook-form
const schemaValidation = Yup.object({
  firstName: Yup.string()
    .required('Please enter your first name')
    .max(10, 'Your first name must be less than 10 characters')
})

const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setFocus,
    setValue,
    control,
    formState: { errors, isSubmitting, isValid }
  } = useForm({
    resolver: yupResolver(schemaValidation),
    mode: 'onChange'
  })
  const handleSetDemoData = () => {
    setValue('firstName', 'Tran')
    setValue('lastName', 'Khoi')
    setValue('email', 'khoi@gmail.com')
  }
  const watchShowAge = watch('showAge', false)
  // errors = formState.errors
  // console.log(errors);
  const onSubmit = async (data) => {
    if (isValid) {
      console.log(data)
      // After successfully submitted then reset form
      reset({
        firstName: ''
      })
    }
    // const response = await axios.get(
    //   "https://hn.algolia.com/api/v1/search?query=react"
    // );
    // return response.data;
  }
  useEffect(() => {
    setFocus('firstName')
  }, [setFocus])
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='p-10 w-full max-w-[500px] mx-auto my-5'
      autoComplete='off'
    >
      <div className='flex flex-col gap-2'>
        <label htmlFor='firstName'>First Name</label>
        <input
          type='text'
          id='firstName'
          className='p-4 border-2 border-gray-200 rounded-lg'
          placeholder='Enter your first name'
          {...register('firstName')}
        />
        {errors?.firstName && <div className='text-red-500 text-md'>{errors.firstName.message}</div>}
        {/* {errors?.firstName?.type === "max" && (
          <div className="text-red-500 text-md">{errors.firstName.message}</div>
        )} */}
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='lastName'>Last Name</label>
        <input
          type='text'
          id='lastName'
          className='p-4 border-2 border-gray-200 rounded-lg'
          placeholder='Enter your last name'
          {...register('lastName')}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <label htmlFor='email'>Email address</label>
        <MyInput
          name='email'
          placeholder='Please enter your email'
          id='email'
          control={control}
        ></MyInput>
      </div>
      <div className='flex flex-col gap-2'>
        <input
          type='checkbox'
          {...register('showAge')}
        />
        {watchShowAge && (
          <input
            type='number'
            className='p-4 border-2 border-gray-200 rounded-lg'
            placeholder='Enter your age'
          />
        )}
      </div>
      <button
        type='submit'
        className='w-full p-5 text-lg text-white bg-blue-500 rounded-lg'
      >
        {isSubmitting ? (
          <div className='w-6 h-6 mx-auto border-2 border-t-2 border-white rounded-full border-t-transparent animate-spin'></div>
        ) : (
          'Submit'
        )}
      </button>
      <button
        className='w-full p-4 my-3 text-sm text-white bg-green-400 rounded-md'
        onClick={handleSetDemoData}
      >
        Demo Data
      </button>
    </form>
  )
}

const MyInput = ({ control, ...props }) => {
  const { field } = useController({
    control,
    defaultValue: '',
    name: props.name
  })
  return (
    <input
      className='p-4 border-2 border-gray-200 rounded-lg'
      {...field}
      {...props}
    />
  )
}
// const MyInput = ({ control, ...props }) => {
//   return (
//     <Controller
//       name={props.name}
//       control={control}
//       defaultValue=""
//       render={({ field }) => (
//         <input
//           className="p-4 border-2 border-gray-200 rounded-lg"
//           {...field}
//           {...props}
//         />
//       )}
//     ></Controller>
//   );
// };

export default ReactHookForm

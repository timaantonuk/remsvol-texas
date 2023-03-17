import { EnvelopeIcon } from '@heroicons/react/20/solid';
import DropdownInput from '../components/DropdownInput';

export default function ApplyForm() {
  return (
    <div className='bg-[#392820] pt-20 pb-40'>
      <h1 className='text-center text-white text-5xl font-bold mb-12'>
        Client application
      </h1>

      <form className='flex justify-center items-center flex-col'>
        {/* // first name */}

        <div className='first-row lg:flex justify-between lg:w-2/3 gap-4 w-4/5'>
          <div className='rounded-md px-3 pt-2.5 pb-1.5 mb-4 lg:mb-0 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-[#bb8a4f] lg:w-1/2'>
            <label
              htmlFor='name'
              className='block text-xs font-medium text-[#392820]'
            >
              First Name *
            </label>
            <input
              type='text'
              name='name'
              id='name'
              className='block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
              placeholder='Alex'
            />
          </div>
          {/* // last name */}

          <div className='rounded-md px-3 pt-2.5 pb-1.5 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-[#bb8a4f]  lg:w-1/2 mb-4 lg:mb-0'>
            <label
              htmlFor='surname'
              className='block text-xs font-medium text-[#392820]'
            >
              Last Name *
            </label>
            <input
              type='text'
              name='surname'
              id='surname'
              className='block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
              placeholder='Brown'
            />
          </div>
        </div>

        {/* email */}

        <div className=' rounded-md px-3 pt-2.5 pb-1.5 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-[#bb8a4f] lg:w-2/3 lg:mt-4 w-4/5  '>
          <label
            htmlFor='email'
            className='block text-xs font-medium text-[#392820]'
          >
            Email *
          </label>

          <div className='relative'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center '>
              <EnvelopeIcon
                className='h-5 w-5 text-gray-400'
                aria-hidden='true'
              />
            </div>

            <input
              type='email'
              name='email'
              id='email'
              className='pl-6 lg:pl-7 block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
              placeholder='alexbrown@example.com'
            />
          </div>
        </div>

        {/* company name */}

        <div className='rounded-md px-3 pt-2.5 pb-1.5 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-[#bb8a4f] lg:w-2/3 mt-4 w-4/5  '>
          <label
            htmlFor='companyname'
            className='block text-xs font-medium text-[#392820]'
          >
            Company name (optional)
          </label>
          <input
            type='text'
            name='companyname'
            id='companyname'
            className='block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
            placeholder='Example LLC'
          />
        </div>

        {/* license number */}

        <div className='rounded-md px-3 pt-2.5 pb-1.5 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-[#bb8a4f] lg:w-2/3 mt-4 w-4/5  '>
          <label
            htmlFor='license'
            className='block text-xs font-medium text-[#392820]'
          >
            License number (optional)
          </label>
          <input
            type='text'
            name='license'
            id='license'
            className='block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
            placeholder='XXX-XXX-XXX'
          />
        </div>

        {/* business type and services type */}

        <div className='lg:flex justify-between lg:w-2/3 w-4/5 gap-4 mt-4'>
          <div className='lg:w-1/2 bg-white rounded-lg mb-4 lg:mb-0'>
            <p className='text-center'>Business type:</p>
            <DropdownInput />
          </div>
          <div className='lg:w-1/2 bg-white rounded-lg'>
            <p className='text-center'>Business type:</p>
            <DropdownInput />
          </div>
        </div>
      </form>
    </div>
  );
}

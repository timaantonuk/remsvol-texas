// import { EnvelopeIcon } from "@heroicons/react/20/solid";
import { useFormik } from "formik";
import DropdownBusiness from "../components/buttons/DropdownBusiness";
import { validationSchema } from "../constants/validationSchema";
import DropdownServices from "../components/buttons/DropdownServices";

export default function ApplyForm() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    licenseNumber: "",
    phoneNumber: "",
    additionalInformation: "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values, actions) => {
      alert(JSON.stringify(values));
    },
  });

  console.log(formik.errors);
  return (
    <div className="bg-[#392820] pt-20" id="apply-form">
      <h1 className="text-center text-white text-5xl font-bold mb-20">
        Client application
      </h1>

      <form className="flex justify-center items-center flex-col">
        {/* // first name */}

        <div className="first-row lg:flex justify-between lg:w-2/3 gap-4 w-4/5">
          <div className="rounded-md px-3 pt-2.5 pb-1.5 mb-4 lg:mb-0 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-[#bb8a4f] lg:w-1/2">
            <label
              htmlFor="name"
              className="block text-xs font-medium text-[#392820]"
            >
              First Name *
            </label>
            <input
              onChange={(e) =>
                formik.setFieldValue("firstName", e.target.value)
              }
              type="text"
              name="firstName"
              id="name"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Alex"
            />
            {formik.errors.firstName && (
              <span className="text-red-600 text-sm">
                {formik.errors.firstName}
              </span>
            )}
          </div>
          {/* // last name */}

          <div className="rounded-md px-3 pt-2.5 pb-1.5 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-[#bb8a4f]  lg:w-1/2 mb-4 lg:mb-0">
            <label
              htmlFor="surname"
              className="block text-xs font-medium text-[#392820]"
            >
              Last Name *
            </label>
            <input
              onChange={(e) => formik.setFieldValue("lastName", e.target.value)}
              type="text"
              name="lastName"
              id="surname"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Brown"
            />
            {formik.errors.lastName && (
              <span className="text-red-600 text-sm">
                {formik.errors.lastName}
              </span>
            )}
          </div>
        </div>

        {/* email */}

        <div className=" rounded-md px-3 pt-2.5 pb-1.5 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-[#bb8a4f] lg:w-2/3 lg:mt-4 w-4/5  ">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-[#392820]"
          >
            Email *
          </label>

          <div className="relative">
            {/* <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center ">
              <EnvelopeIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </div> */}

            <input
              onChange={(e) => formik.setFieldValue("email", e.target.value)}
              type="email"
              name="email"
              id="email"
              className=" block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="alexbrown@example.com"
            />
            {formik.errors.email && (
              <span className="text-red-600 text-sm">
                {formik.errors.email}
              </span>
            )}
          </div>
        </div>

        {/* company name */}

        <div className="rounded-md px-3 pt-2.5 pb-1.5 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-[#bb8a4f] lg:w-2/3 mt-4 w-4/5  ">
          <label
            htmlFor="companyname"
            className="block text-xs font-medium text-[#392820]"
          >
            Company name (optional)
          </label>
          <input
            onChange={(e) =>
              formik.setFieldValue("companyName", e.target.value)
            }
            type="text"
            name="companyName"
            id="companyName"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="Example LLC"
          />
        </div>

        {/* license number */}

        <div className="rounded-md px-3 pt-2.5 pb-1.5 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-[#bb8a4f] lg:w-2/3 mt-4 w-4/5  ">
          <label
            htmlFor="license"
            className="block text-xs font-medium text-[#392820]"
          >
            License number (optional)
          </label>
          <input
            onChange={(e) =>
              formik.setFieldValue("licenseNumber", e.target.value)
            }
            type="text"
            name="licenseNumber"
            id="license"
            className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder="XXX-XXX-XXX"
          />
        </div>

        {/* business type and services type */}

        <div className="lg:flex justify-between lg:w-2/3 w-4/5 gap-4 my-4 lg:mt-4 lg:mb-0">
          <div className="lg:w-1/2 bg-white rounded-lg mb-4 lg:mb-0">
            <p className="text-center">Services type:</p>
            <DropdownServices />
          </div>

          <div className="lg:w-1/2 bg-white rounded-lg">
            <p className="text-center">Business type:</p>
            <DropdownBusiness />
          </div>
        </div>

        {/* phone number */}
        <div className=" rounded-md px-3 pt-2.5 pb-1.5 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-[#bb8a4f] lg:w-2/3 lg:mt-4 w-4/5  ">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-[#392820]"
          >
            Phone number *
          </label>

          <div className="relative">
            <input
              onChange={(e) =>
                formik.setFieldValue("phoneNumber", e.target.value)
              }
              type="text"
              name="phoneNumber"
              id="phoneNumber"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="1XXX-XXX-XXXX"
            />
            {formik.errors.phoneNumber && (
              <span className="text-red-600 text-sm">
                {formik.errors.phoneNumber}
              </span>
            )}
          </div>
        </div>
        {/* additional info */}
        <div className=" rounded-md px-3 mt-4 pt-2.5 pb-1.5 shadow-sm ring-inset bg-white  focus-within:ring-2 focus-within:ring-[#bb8a4f] lg:w-2/3 lg:mt-4 w-4/5  ">
          <label
            htmlFor="email"
            className="block text-xs font-medium text-[#392820]"
          >
            Additional information
          </label>

          <div className="relative">
            <input
              onChange={(e) =>
                formik.setFieldValue("additionalInformation", e.target.value)
              }
              type="email"
              name="additionalInformation"
              id="additionalInformation"
              className=" block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="Leave your message here "
            />
          </div>
        </div>
        <div className=" lg:flex justify-between mt-4 h-36 items-center lg:h-48 lg:w-2/3 gap-4 w-4/5">
          <button
            onClick={formik.handleSubmit}
            type="submit"
            className=" flex justify-center w-full text-center rounded-md text-lg bg-[#986235] mx-auto lg:w-1/2 py-4  px-2.5 font-semibold text-white shadow-sm hover:bg-[#a67651] duration-300 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

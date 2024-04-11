import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid'; // Importing uuidv4 function from the uuid package
import FamilyInfoFrom from './FamilyInfoFrom';
import FamilyForm from './UserFamilyDetails';

const UserInfoForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [userformData, setUserFormData] = useState(null);

  const  onSubmit = (data) => {
    localStorage.setItem("userInfo" ,  JSON.stringify(data));
    window.location.href = "/familyInfo";
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
      <div className="bg-white p-8 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">User Information</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="firstName"
                {...register("firstName", { required: "First Name is required" })}
                className="mt-1 p-2 block w-full bg-gray-200 rounded-md "
              />
              {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName.message}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                id="lastName"
                {...register("lastName", { required: "Last Name is required" })}
                className="mt-1 p-2 block w-full bg-gray-200 rounded-md"
              />
              {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName.message}</p>}
            </div>
          </div>
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              {...register("address")}
              className="mt-1 p-2 block w-full bg-slate-200 rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+$/i, message: "Invalid email address" } })}
              className="mt-1 p-2 block w-full bg-gray-200 rounded-md"
            />
            {errors.email && <p className="text-red-500 text-xs italic">{errors.email.message}</p>}
          </div>
          <div>
            <label htmlFor="contactNo" className="block text-sm font-medium text-gray-700">Contact No</label>
            <input
              type="tel"
              id="contactNo"
              {...register("contactNo", { required: "Contact No is required" })}
              className="mt-1 p-2 block w-full bg-gray-200 rounded-md "
            />
            {errors.contactNo && <p className="text-red-500 text-xs italic">{errors.contactNo.message}</p>}
          </div>
          <div>
            <label htmlFor="parentName" className="block text-sm font-medium text-gray-700">Parent's Name</label>
            <input
              type="text"
              id="parentName"
              {...register("parentName" , {required : "Parent's name is required"})}
              placeholder="Enter parent name..."
              className="mt-1 p-2 block w-full rounded-md bg-gray-200"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Next
          </button>
        </form>
      </div>
        
      
    </div>
  );
};

export default UserInfoForm;



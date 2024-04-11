import React from "react";
import { useForm, useFieldArray } from "react-hook-form";

const FamilyInfo = () => {
  const {
    register,
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      familyMembers: [
        {
          fatherName: "",
          fatherOccupation: "",
          motherName: "",
          motherOccupation: "",
          sisterName: "",
          brotherName: "",
          permanentAddress: "",
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "familyMembers",
  });

  const onSubmit = (data) => {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log({userInfo, ...data});
    const  newData = {...userInfo, ...data};
    localStorage.setItem("userInfo",JSON.stringify(newData));
    alert(`Submission successful. Check console for output.`);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-200">
    <div className="max-w-4xl mx-auto p-5 bg-slate-100">
    <h2 className="text-2xl font-bold mb-4">User Information</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {fields.map((item, index) => (
          <div key={item.id} className="p-6 border rounded-lg shadow-sm space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <input
                  className="input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2 rounded-md"
                  {...register(`familyMembers.${index}.fatherName`)}
                  placeholder="Father's Name"
                />
              </div>
              <div>
                <input
                  className="input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2 rounded-md"
                  {...register(`familyMembers.${index}.fatherOccupation`)}
                  placeholder="Father's Occupation"
                />
              </div>
              <div>
                <input
                  className="input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2 rounded-md"
                  {...register(`familyMembers.${index}.motherName`)}
                  placeholder="Mother's Name"
                />
              </div>
              <div>
                <input
                  className="input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2 rounded-md"
                  {...register(`familyMembers.${index}.motherOccupation`)}
                  placeholder="Mother's Occupation"
                />
              </div>
              <div>
                <input
                  className="input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2 rounded-md"
                  {...register(`familyMembers.${index}.sisterName`)}
                  placeholder="Sister's Name (optional)"
                />
              </div>
              <div>
                <input
                  className="input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2 rounded-md"
                  {...register(`familyMembers.${index}.brotherName`)}
                  placeholder="Brother's Name (optional)"
                />
              </div>
              <div className="md:col-span-2">
                <input
                  className="input border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 block w-full p-2 rounded-md"
                  {...register(`familyMembers.${index}.permanentAddress`)}
                  placeholder="Permanent Address"
                />
              </div>
            </div>
            <button
              type="button"
              onClick={() => remove(index)}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition-colors duration-200"
            >
              Remove Family Member
            </button>
          </div>
        ))}

        <div className="flex justify-between items-center">
          <button
            type="button"
            onClick={() =>
              append({
                fatherName: "",
                fatherOccupation: "",
                motherName: "",
                motherOccupation: "",
                sisterName: "",
                brotherName: "",
                permanentAddress: "",
              })
            }
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors duration-200"
          >
            Add More Family Member
          </button>
          <button type="submit" className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition-colors duration-200">
            Submit
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default FamilyInfo;

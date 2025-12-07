import React from "react";
import useAxiosSecure from "../hook/useAxisosSecure";
import { useNavigate, useParams } from "react-router";
import useSwal from "../hook/useSwal";

const UpdateRequser = () => {
  const { errors, success } = useSwal();

  const { id } = useParams();
  const navigate = useNavigate();
  const secureInstance = useAxiosSecure();
  const handleEdit = async (e, id) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const time = e.target.time.value;
    const updatedData = {
      userName: name,
      userPhoto: photo,
      time: time,
    };
    console.log(updatedData);
    try {
      const response = await secureInstance.patch(
        `/RequestPartner/${id}`,
        updatedData
      );
      if (response.data.modifiedCount > 0) {
        success("updated");
        e.target.reset();
        navigate("/myCollection");
      }
    } catch (err) {
      console.log("update request error", err);
      errors(err);
    }
  };

  return (
    <div className="flex justify-center items-center ">
      <form onSubmit={(e) => handleEdit(e, id)} className="max-w-96 my-60">
        <h3 className="text-2xl text-center text-secondary font-semibold">
          Edit Your Request
        </h3>
        <label class="block text-sm font-medium text-gray-700 mb-2">Name</label>
        <input
          name="name"
          type="text"
          placeholder="Update Name"
          class="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-600"
        />
        <label class="block text-sm font-medium text-gray-700 mb-2">
          Email
        </label>
        <input
          name="email"
          type="email"
          placeholder="Email"
          class="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-600"
        />
        <label class="block text-sm font-medium text-gray-700 mb-2">
          photoURL
        </label>
        <input
          name="photo"
          type="text"
          placeholder="photoURL"
          class="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-600"
        />
        <label class="block text-sm font-medium text-gray-700 mb-2">time</label>
        <input
          name="time"
          type="text"
          placeholder="6-8 pm"
          class="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-600"
        />
        <button type="submit" className="btn btn-success w-full mt-6  ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateRequser;

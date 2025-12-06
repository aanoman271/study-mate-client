import React, { useEffect, useState } from "react";
import useAxisosSecure from "../hook/useAxisosSecure";
import useAuth from "../hook/useAuth";
import useSwal from "../hook/useSwal";
import { ImCross } from "react-icons/im";
import { FaEdit } from "react-icons/fa";

const MyCollaction = () => {
  const secureInstance = useAxisosSecure();
  console.log(secureInstance);
  const { user, setloadding } = useAuth();
  const { errors, success } = useSwal();
  const [myCollection, setMyCollection] = useState([]);

  const handleEdit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const time = e.target.time.value;
    console.log(name, email, photo, time);
  };
  const DeleteCollection = async (id) => {
    try {
      const response = await secureInstance.delete(`/RequestPartner/${id}`);
      console.log(response);
      if (response.data.deletedCount > 0) {
        success("parther deleted");
        const filtaredData = await myCollection.filter(
          (data) => data._id !== id
        );
        setMyCollection(filtaredData);
      }
    } catch (error) {
      console.log("delete collection", error);
    }
  };
  const handleDelete = () => {
    document.getElementById("my_modal_5").showModal();
  };
  useEffect(() => {
    const fetchCollection = async () => {
      setloadding(true);

      try {
        if (!user?.email) {
          return;
        }

        const response = await secureInstance.get(
          `/RequestPartner?email=${user?.email}`
        );

        setMyCollection(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setloadding(false);
      }
    };
    fetchCollection();
  }, [user?.email]);

  console.log(myCollection);
  return (
    <>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Name</th>
                <th>study mood</th>
                <th>Edit</th>
                <th>Delete</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myCollection.map((data, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={
                              data.profileImg ||
                              "/src/assets/istockphoto-1223671392-2048x2048.jpg"
                            }
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{data.name}</div>
                        <div className="text-sm opacity-50">{data.subject}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="font-semibold">{data.mode}</p>
                  </td>
                  <td>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button
                      className="btn"
                      onClick={() =>
                        document.getElementById("my_modal_5").showModal()
                      }
                    >
                      open modal
                    </button>
                    <dialog
                      id="my_modal_5"
                      className="modal modal-bottom sm:modal-middle"
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">Update your Info</h3>
                        <form onSubmit={handleEdit}>
                          <label class="block text-sm font-medium text-gray-700 mb-2">
                            Name
                          </label>
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
                          <label class="block text-sm font-medium text-gray-700 mb-2">
                            time
                          </label>
                          <input
                            name="time"
                            type="text"
                            placeholder="6-8 pm"
                            class="w-full px-5 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-600"
                          />
                          <div className="flex justify-between items-center">
                            {" "}
                            <button
                              type="submit"
                              className="btn btn-success border-r-0 mt-6 w-[70%] "
                            >
                              Submit
                            </button>{" "}
                            <form
                              method="dialog"
                              className="modal-action p-0 w-[30%]"
                            >
                              {/* if there is a button in form, it will close the modal */}
                              <button className="btn w-full border-l-0 btn-error">
                                Close
                              </button>
                            </form>
                          </div>
                        </form>
                      </div>
                    </dialog>{" "}
                    <button
                      onClick={() => handleDelete(data._id)}
                      className="btn btn-warning"
                    >
                      <FaEdit />
                      <small> edit</small>
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => DeleteCollection(data._id)}
                      className="btn btn-error"
                    >
                      <ImCross />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default MyCollaction;

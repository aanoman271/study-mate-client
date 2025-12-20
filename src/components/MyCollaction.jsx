import React, { useEffect, useState } from "react";
import useAxisosSecure from "../hook/useAxisosSecure";
import useAuth from "../hook/useAuth";
import useSwal from "../hook/useSwal";
import { ImCross } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router";

const MyCollaction = () => {
  const secureInstance = useAxisosSecure();
  const { user, setFetchLoadding } = useAuth();
  const { success } = useSwal();
  const [myCollection, setMyCollection] = useState([]);

  const DeleteCollection = async (id) => {
    try {
      const response = await secureInstance.delete(`/RequestPartner/${id}`);
      if (response.data.deletedCount > 0) {
        success("parther deleted");
        const filtaredData = myCollection.filter((data) => data._id !== id);
        setMyCollection(filtaredData);
      }
    } catch (error) {
      console.log("delete collection", error);
    }
  };

  useEffect(() => {
    const fetchCollection = async () => {
      if (!user?.email) {
        return;
      }
      try {
        setFetchLoadding(true);

        const response = await secureInstance.get(
          `/RequestPartner?email=${user?.email}`
        );

        setMyCollection(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setFetchLoadding(false);
      }
    };
    fetchCollection();
  }, [user?.email]);

  return (
    <>
      <div className="my-28">
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
                <tr key={data._id}>
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
                    <Link
                      to={`/updateRequest/${data._id}`}
                      className="btn btn-warning"
                    >
                      <FaEdit />
                      <small> edit</small>
                    </Link>
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

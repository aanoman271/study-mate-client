import React, { useEffect, useState } from "react";
import useAxisosSecure from "../hook/useAxisosSecure";
import useAuth from "../hook/useAuth";
import useSwal from "../hook/useSwal";
import { ImCross } from "react-icons/im";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router";
import Loadding from "./Lodding";
import avatar from "../../src/assets/istockphoto-1223671392-2048x2048.jpg";

const MyCollaction = () => {
  const [lodding, setLodding] = useState(true);
  const secureInstance = useAxisosSecure();
  const { user } = useAuth();
  const { success } = useSwal();
  const [myCollection, setMyCollection] = useState([]);

  const DeleteCollection = async (id) => {
    try {
      setLodding(true);
      const response = await secureInstance.delete(`/RequestPartner/${id}`);
      if (response.data.deletedCount > 0) {
        success("parther deleted");
        const filtaredData = myCollection.filter((data) => data._id !== id);
        setMyCollection(filtaredData);
      }
    } catch (error) {
      console.log("delete collection", error);
    } finally {
      setLodding(false);
    }
  };

  useEffect(() => {
    const fetchCollection = async () => {
      if (!user?.email) {
        return;
      }
      try {
        setLodding(true);

        const response = await secureInstance.get(
          `/RequestPartner?email=${user?.email}`
        );

        setMyCollection(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLodding(false);
      }
    };
    fetchCollection();
  }, [user?.email]);
  if (lodding) {
    return <Loadding></Loadding>;
  }
  return (
    <>
      <div className="my-28 w-full">
        <div className="overflow-x-auto ">
          <table className="table table-zebra w-full min-w-[640px] md:min-w-full">
            {/* head */}
            <thead>
              <tr>
                <th className="hidden sm:table-cell">Serial</th>
                <th>Name</th>
                <th>Study Mode</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {myCollection.map((data, index) => (
                <tr key={data._id}>
                  <th className="hidden sm:table-cell">{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="mask mask-squircle w-10 h-10 sm:w-12 sm:h-12">
                        <img
                          src={
                            data?.profileImg?.trim() ? data.profileImg : avatar
                          }
                          alt="User avatar"
                          className="w-full h-full rounded-full object-cover"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-sm sm:text-base">
                          {data.name}
                        </span>
                        <span className="text-xs sm:text-sm text-gray-500">
                          {data.subject}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td>
                    <p className="font-semibold">{data.mode}</p>
                  </td>
                  <td>
                    <Link
                      to={`/updateRequest/${data._id}`}
                      className="btn btn-warning btn-sm flex items-center gap-1"
                    >
                      <FaEdit />
                      <small>edit</small>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => DeleteCollection(data._id)}
                      className="btn btn-error btn-sm"
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

import React, { useEffect, useState } from "react";
import useInstance from "../hook/useInstance";
import { useParams } from "react-router";
import useSwal from "../hook/useSwal";
import useAuth from "../hook/useAuth";
import bgimg from "../assets/coolbackgrounds-fractalize-clear_lagoon.png";
import useAxisosSecure from "../hook/useAxisosSecure";
const ViewDeatails = () => {
  const { id } = useParams();
  const [deatail, setdeatail] = useState([]);
  const instance = useInstance();
  const { errors, confirm, success } = useSwal();
  const { setloadding } = useAuth();
  const secureInstance = useAxisosSecure();
  const [counts, setCount] = useState(0);
  const handleReqest = async (id) => {
    try {
      const response = await secureInstance.patch(`/partners/${id}/incriment`);
      if (response.data) {
        success("Request send");
        setCount(counts + 1);
      }
    } catch (err) {
      errors("Requsest failed");
    }
  };
  useEffect(() => {
    const fetchDeatail = async () => {
      try {
        setloadding(true);
        const promise = await instance.get(`/partners/${id}`);
        setdeatail(promise.data);
        setCount(promise.data.count || 0);
      } catch (err) {
        console.log(err);
        errors(" Failed to load partners. Please try again.");
      } finally {
        setloadding(false);
      }
    };
    fetchDeatail();
  }, [id]);
  devicePixelRatio;

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="  w-[80%] deatailsCard  mx-auto pb-8 bg-[#f4f4f4] rounded-s-sm">
        <div className="bg-[#fff] border-b  border-success relative ">
          <div className=" relative top-11 px-6 ">
            <img
              className="ring-success ring-2 max-h-40 max-w-40 object-cover rounded-full "
              src={deatail.profileImg}
              alt=""
            />
          </div>
        </div>
        <div className="my-5 px-6 mt-24">
          <h3 className="text-2xl font-semibold text-black">{deatail.name}</h3>

          <p>{deatail?.ratting} +</p>
        </div>
        <div className="text-gray-800 px-6 grid grid-cols-2 gap-6">
          <p>
            <strong>Subject :</strong>
            {deatail?.subject}
          </p>
          <p>
            <strong>Study mode :</strong>
            {deatail?.mode}
          </p>

          <p>
            <strong>Time :</strong>
            {deatail?.time}
          </p>
          <p>
            <strong>Location :</strong>
            {deatail?.location}
          </p>
          <p>
            <strong>Expriance Level :</strong>
            {deatail?.expriance}
          </p>
          <p>
            <strong>Partner Count :</strong>
            {counts}
          </p>
        </div>
        <div className="px-6 mt-6">
          <button
            onClick={() => handleReqest(deatail._id)}
            className="  btn btn-success"
          >
            Sent Request
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewDeatails;

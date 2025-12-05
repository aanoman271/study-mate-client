import React, { useEffect, useState } from "react";
import useInstance from "../hook/useInstance";
import { useParams } from "react-router";
import useSwal from "../hook/useSwal";
import useAuth from "../hook/useAuth";
import useAxisosSecure from "../hook/useAxisosSecure";
import Loading from "./Loading";
const ViewDeatails = () => {
  const { id } = useParams();
  const [deatail, setdeatail] = useState([]);
  const instance = useInstance();
  const { errors, success } = useSwal();
  const { setloadding, loadding, user } = useAuth();
  const secureInstance = useAxisosSecure();
  const [counts, setCount] = useState(0);

  const handleRattigs = async (e) => {
    e.preventDefault();
    if (loadding || !user || !user.accessToken) {
      errors(
        "Authentication Error",
        "Please wait for user data to load or log in again."
      );
      return;
    }
    const ratting = e.target.rate.value;
    const ratingData = {
      rating: ratting,
    };
    try {
      const response = await secureInstance.patch(
        `/partners/${id}`,
        ratingData
      );
      console.log(response.data);
      success("ratting send");
    } catch (error) {
      console.log(error.message);
    }
    e.target.reset();
  };

  const handleReqest = async (partnerData) => {
    if (user.email === partnerData.userEmail) {
      return errors("alraedy addet to partner");
    }

    try {
      setloadding(true);
      const response = await secureInstance.post("/RequestPartner", {
        ...partnerData,
        PartnerId: partnerData._id,
        userEmail: user.email,
      });

      if (response.data.insertedId) {
        success("partner request sent");
        setCount((prev) => prev + 1);
      } else {
        errors("somthing wrong");
      }
    } catch (err) {
      console.error("Request failed:", err);
      errors(err);
    } finally {
      setloadding(false);
    }
  };
  useEffect(() => {
    const fetchDeatail = async () => {
      try {
        setloadding(true);
        const promise = await instance.get(`/partners/${id}`);
        setdeatail(promise.data);
        setCount(promise.data.partnerCount || 0);
      } catch (err) {
        console.log("massage from frtch deatails", err.message);
        errors(" Failed to load partners. Please try again.");
      } finally {
        setloadding(false);
      }
    };
    fetchDeatail();
  }, []);
  devicePixelRatio;

  return (
    <>
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
            <h3 className="text-2xl font-semibold text-black">
              {deatail.name}
            </h3>

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
              onClick={() => handleReqest(deatail)}
              className="  btn btn-success"
            >
              Sent Request
            </button>
          </div>
          <div className="w-28">
            <form onSubmit={handleRattigs}>
              <label className="block text-gray-700">Rating (1-5)</label>
              <input
                type="number"
                name="rate"
                min="1"
                max="5"
                className="input input-bordered w-full"
                required
              />
              <button className="btn btn-success">send</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewDeatails;

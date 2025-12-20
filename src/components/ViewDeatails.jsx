import React, { useEffect, useState } from "react";
import useInstance from "../hook/useInstance";
import { useParams } from "react-router";
import useSwal from "../hook/useSwal";
import useAuth from "../hook/useAuth";
import useAxisosSecure from "../hook/useAxisosSecure";
const ViewDeatails = () => {
  const { id } = useParams();
  const [deatail, setdeatail] = useState([]);
  const instance = useInstance();
  const { errors, success } = useSwal();
  const { setFetchLoadding, FetchLoadding, user } = useAuth();
  const secureInstance = useAxisosSecure();
  const [counts, setCount] = useState(0);

  const handleRattigs = async (e) => {
    e.preventDefault();
    if (FetchLoadding || !user || !user.accessToken) {
      errors(
        "Authentication Error",
        "Please wait for user data to load or log in again."
      );
      return;
    }
    const ratting = e.target.rate.value;
    const ratingData = {
      ratting: ratting,
    };
    try {
      await secureInstance.patch(`/partners/${id}`, ratingData);
      success("ratting send");
    } catch (error) {
      console.log(error.message);
    }
    e.target.reset();
  };

  const handleReqest = async (partnerData) => {
    const {
      expriance,
      location,
      mode,
      name,
      partnerCount,
      profileImg,
      ratting,

      subject,

      time,
    } = partnerData;
    if (user.email === partnerData.userEmail) {
      return errors("alraedy addet to partner");
    }

    try {
      setFetchLoadding(true);
      const response = await secureInstance.post("/RequestPartner", {
        expriance,
        location,
        mode,
        name,
        partnerCount,
        profileImg,
        ratting,

        subject,
        pId: partnerData._id,
        time,
        userEmail: user?.email,
        userName: user?.displayName,
        userPhoto: user?.photoURL,
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
      setFetchLoadding(false);
    }
  };
  useEffect(() => {
    const fetchDeatail = async () => {
      try {
        setFetchLoadding(true);
        const promise = await instance.get(`/partners/${id}`);
        setdeatail(promise.data);
        setCount(promise.data.partnerCount || 0);
      } catch (err) {
        console.log("massage from frtch deatails", err.message);
        errors(" Failed to load partners. Please try again.");
      } finally {
        setFetchLoadding(false);
      }
    };
    fetchDeatail();
  }, [id]);
  const avgRatting =
    deatail?.totalRatting && deatail?.rattingCount
      ? deatail.totalRatting / deatail.rattingCount
      : 0;

  return (
    <>
      <div className="flex  justify-center items-center">
        <div className=" w-[100%] md:w-[80%] deatailsCard  mx-auto pb-8 bg-[#f4f4f4] rounded-s-sm">
          <div className="bg-[#fff] border-b  border-success relative ">
            <div className=" relative top-11 px-6 ">
              <img
                className="ring-success ring-2 max-h-40 max-w-40 object-cover rounded-full "
                src={deatail.profileImg}
                alt=""
              />
            </div>
          </div>
          <div className="flex justify-between items-center my-5 px-6 mt-24">
            <div>
              <h3 className="text-2xl font-semibold text-black">
                {deatail?.name}
                <h4 className="text-sm text-primary font-semibold">
                  Avg Rating: {avgRatting.toFixed(1)}
                </h4>
              </h3>
            </div>

            <div className=" ">
              <form
                onSubmit={handleRattigs}
                className="flex items-center w-full "
              >
                <label className="block text-gray-700">Rating (1-5)</label>
                <input
                  type="number"
                  name="rate"
                  min="1"
                  max="5"
                  className="border-success  input input-bordered w-full"
                  required
                />
                <button className="btn btn-success">send</button>
              </form>
            </div>
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
        </div>
      </div>
    </>
  );
};

export default ViewDeatails;

import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";

const TopthreeCard = (data) => {
  const topP = data.data;
  const avgRatting =
    topP?.totalRatting && topP?.rattingCount
      ? topP.totalRatting / topP.rattingCount
      : 0;

  return (
    <div className=" ">
      <div className=" bg-[#fff] p-5 rounded-2xl shadow-2xl">
        <div className="flex gap-3 items-center">
          <div>
            <img
              className="max-h-20 max-w-20 rounded-full"
              src={topP?.profileImg}
              alt=""
            />
          </div>
          <div>
            <div className="flex w-full flex-col ">
              <div className="flex items-center bg-[#b0ffaf] px-3 py-2 rounded-t-2xl justify-between gap-6">
                <p className="text-xl  font-semibold text-[#18771a]  ">
                  {topP.name}
                </p>
                <p className="flex items-center gap-1 text-[#fac41c]">
                  (<FaStar></FaStar> <strong>{avgRatting}</strong>)
                </p>
              </div>
              <h4 className="text-gray-500 font-semibold bg-[#f4f4f4] px-3 py-2">
                {topP?.subject}
              </h4>
            </div>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-5">
          <div className="bg-[#f4f4f4] px-3 py-2 flex justify-between items-center">
            <h5 className="text-[18px] text-purple-600 font-bold bg-[#b0ffaf]   py-1.5 px-2 rounded-sm">
              <strong>{topP?.partnerCount} </strong>partner
            </h5>
            <h5 className="bg-[#b0ffaf] text-[#18771a] font-bold py-1.5 px-2 rounded-sm ">
              {topP?.mode}
            </h5>
          </div>
          <p className="text-gray-700 ">
            <strong>Location :</strong>
            {topP?.location}
          </p>
          <p className="text-gray-700 ">
            <strong>expriance :</strong>
            {topP?.expriance}
          </p>
          <p className="text-gray-700 ">
            <strong>time :</strong>
            {topP?.time}
          </p>
        </div>
        <Link
          to={`/viewDeatails/${topP._id}`}
          className="btn bg-success h-7 w-full mt-4 btn-success"
        >
          View Deatails
        </Link>
      </div>
    </div>
  );
};

export default TopthreeCard;

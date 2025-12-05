import { Link } from "react-router";

const Card = ({ pdata }) => {
  return (
    <div className=" gap-5 bg-[#fcfbfc] drop-shadow-2xl w-4/5  rounded-4xl p-6">
      <div>
        <img className="rounded-full w-16 h-16" src={pdata.profileImg} alt="" />
      </div>

      <div>
        <h3 className="text-2xl text-[#2f2e31] font-semibold ">{pdata.name}</h3>
      </div>
      <div className="flex justify-between items-center">
        <small className="text-secondary">{pdata.subject}</small>
        <span className=" text-[15px] text-success font-semibold px-2 rounded-3xl bg-purple-600 ">
          {pdata.mode}
        </span>
      </div>
      <div className="my-7">
        <p className="font-semibold text-[16px]">
          Expriance: <span>{pdata.expriance}</span>
        </p>
      </div>
      <Link
        to={`/viewDeatails/${pdata._id}`}
        className="btn bg-success h-7 btn-success"
      >
        View Deatails
      </Link>
    </div>
  );
};

export default Card;

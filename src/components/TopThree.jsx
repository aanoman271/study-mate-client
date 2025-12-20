import React, { useEffect, useState } from "react";
import TopthreeCard from "./TopthreeCard";
import useInstance from "../hook/useInstance";
import useSwal from "../hook/useSwal";
import useAuth from "../hook/useAuth";

const TopThree = () => {
  const { errors } = useSwal();
  const { setFetchLoadding, user } = useAuth();
  const [topPartner, setToppartner] = useState([]);
  const instance = useInstance();
  useEffect(() => {
    const topP = async () => {
      try {
        setFetchLoadding(true);
        const response = await instance.get("/partners/top");
        console.log(response.data);
        setToppartner(response.data);
      } catch (err) {
        errors(err);
      } finally {
        setFetchLoadding(false);
      }
    };
    topP();
  }, [user?.email]);

  return (
    <div className="bg-success flex flex-col items-center justify-center">
      <h3 className="py-7 text-center text-2xl text-primary font-semibold">
        Top Three Partner
      </h3>
      <div className="grid gap-5  my-7 justify-items-center grid-cols-1 md:grid-cols-3 ">
        {topPartner.map((data) => (
          <TopthreeCard key={data._id} data={data}></TopthreeCard>
        ))}
      </div>
    </div>
  );
};

export default TopThree;

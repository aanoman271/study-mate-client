import React, { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import useInstance from "../hook/useInstance";
import Card from "./Card";
import useSwal from "../hook/useSwal";
import Loadding from "./Lodding";
const FindParthner = () => {
  const [lodding, setlodding] = useState(true);

  const { user } = useAuth();
  const instance = useInstance();
  const { errors } = useSwal;
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [partnerData, setPartnerData] = useState([]);

  useEffect(() => {
    const fetchParter = async () => {
      try {
        setlodding(true);
        const Partners = await instance.get("/partners");
        setPartnerData(Partners.data);
      } catch (err) {
        errors(" Failed to load partners. Please try again.");
        return Promise.reject(err);
      } finally {
        setlodding(false);
      }
    };
    fetchParter();
  }, [user?.email]);
  const filtaredData = (partnerData || [])
    .filter((partner) => {
      const query = search.toLocaleLowerCase();
      return (
        partner?.name.toLocaleLowerCase().includes(query) ||
        partner?.location.toLocaleLowerCase().includes(query) ||
        partner?.subject.toLocaleLowerCase().includes(query)
      );
    })
    .sort((a, b) => {
      if (sort === "name") return (a.name || "").localeCompare(b.name || "");
    });
  if (lodding) return <Loadding></Loadding>;
  return (
    <div className="bg-[#f1f6ff] my-7">
      <h3 className="font-semibold text-success my-3 px-2.5 ">
        ---Find Your Partner
      </h3>
      <div className="flex justify-between px-4 mb-3 items-center">
        <select
          className="outline-success border-success select select-bordered w-48"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="">Default Order</option>
          <option value="name">Name A-Z</option>
          <option value="age">Age (Low to High)</option>
        </select>
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          type="text"
          placeholder="Type here"
          className="outline-success border-success input"
        />
      </div>
      <div className="grid gap-5 justify-items-center w-full  grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {filtaredData.map((Pdata) => (
          <Card key={Pdata._id} pdata={Pdata}></Card>
        ))}
      </div>
    </div>
  );
};

export default FindParthner;

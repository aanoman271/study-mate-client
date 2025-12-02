import React, { useEffect, useState } from "react";
import useAuth from "../hook/useAuth";
import useInstance from "../hook/useInstance";
import Card from "./Card";
import useSwal from "../hook/useSwal";
const FindParthner = () => {
  const { partnerData, setloadding, setPartnerData } = useAuth();
  const instance = useInstance();
  const { error } = useSwal;
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchParter = async () => {
      try {
        setloadding(true);
        const Partners = await instance.get("/partners");
        setPartnerData(Partners.data);
        console.log(partnerData);
      } catch {
        error(" Failed to load partners. Please try again.");
      } finally {
        setloadding(false);
      }
    };
    fetchParter();
  }, [instance, partnerData, setPartnerData, error, setloadding]);
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
  return (
    <div className="bg-[#f1f6ff]">
      <h3 className="font-semibold text-success mt-3 px-2.5 ">
        ---Find Your Partner
      </h3>
      <div className="flex justify-between items-center">
        <select
          className="select select-bordered w-48"
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
          className="input"
        />
      </div>
      <div className="grid gap-5 justify-items-center grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {filtaredData.map((Pdata) => (
          <Card key={Pdata._id} pdata={Pdata}></Card>
        ))}
      </div>
    </div>
  );
};

export default FindParthner;

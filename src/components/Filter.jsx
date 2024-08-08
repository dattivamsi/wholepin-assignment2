import React, { useEffect, useState } from "react";
import { Data } from "./Data";
import "./Filter.css";

const Filter = ({ setFilter, showFilter, setShowFilter }) => {
  const [startYear, setStartYear] = useState(100);
  const [endYear, setEndYear] = useState(1700);
  const [material, setMaterial] = useState([]);
  const [dynasty, setDynasty] = useState([]);
  const [region, setRegion] = useState([]);
  const [filterDetails, setFilterDetails] = useState({});

  const handleApply = () => {
    setFilter((prev) => ({ ...prev, ...filterDetails }));
    setShowFilter((prev) => !prev);
  };

  useEffect(() => {
    const uniqueValuesMaterial = [];
    const uniqueValuesDynasty = [];
    const uniqueValuesRegion = [];
    Data?.forEach((ele) => {
      if (!uniqueValuesMaterial.includes(ele?.material)) {
        uniqueValuesMaterial.push(ele?.material);
      }
      if (!uniqueValuesDynasty.includes(ele?.density)) {
        uniqueValuesDynasty.push(ele?.density);
      }
      if (!uniqueValuesRegion.includes(ele?.region)) {
        uniqueValuesRegion.push(ele?.region);
      }
    });
    setMaterial(uniqueValuesMaterial);
    setDynasty(uniqueValuesDynasty);
    setRegion(uniqueValuesRegion);

    return(()=>{
        setFilterDetails({})
    })
  }, []);

  const handleChange = (e, type) => {
    switch (type) {
      case "dynasty":
        setFilterDetails((prev) => ({ ...prev, dynasty: e.target.value }));
        break;
      case "startyear":
        setFilterDetails((prev) => ({ ...prev, startYear: e.target.value }));
        break;
      case "endyear":
        setFilterDetails((prev) => ({ ...prev, endYear: e.target.value }));
        break;
      case "material":
        setFilterDetails((prev) => ({ ...prev, material: e.target.value }));
        break;
      case "region":
        setFilterDetails((prev) => ({ ...prev, region: e.target.value }));
        break;
    }
  };

  const handleCancel = () => {
    setFilter({
      searchTerm: "",
      startYear: 100,
      endYear: 1700,
      material: "",
      dynasty: "",
      region: "",
    });
    setFilterDetails({})
    setShowFilter((prev) => !prev);
  };

  console.log(filterDetails);

  return (
    <>
    <div className={`filter ${showFilter ? "filter-open" : "filter-closed"}`}>
      <div className="filter-option">
        <h2>Search by filter</h2>
        <div className="filter-inps">
          <label htmlFor="Dynasty">Select Dynasty</label>
          <select id="Dynasty" onChange={(e) => handleChange(e, "dynasty")}>
            <option value="">All</option>
            {dynasty?.map((ele, index) => (
              <option key={index} value={ele}>
                {ele}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-inps">
          <label>Select Period</label>
          <input
            type="range"
            min="100"
            max="1700"
            value={filterDetails?.startYear ?? 100}
            onChange={(e) => handleChange(e, "startyear")}
          />
          <input
            type="range"
            min="100"
            max="1700"
            value={filterDetails?.endYear ?? 1700}
            onChange={(e) => handleChange(e, "endyear")}
          />
        </div>
        <span>
          {filterDetails?.startYear} - {filterDetails?.endYear}
        </span>

        <div className="filter-inps">
          <label htmlFor="Material">Select Material</label>
          <select id="Material" onChange={(e) => handleChange(e, "material")}>
            <option value="">All</option>
            {material?.map((ele, index) => (
              <option key={index} value={ele}>
                {ele}
              </option>
            ))}
          </select>
        </div>
        <div className="filter-inps">
          <label htmlFor="Region">Select Region</label>
          <select id="Region" onChange={(e) => handleChange(e, "region")}>
            <option value="">All</option>
            {region?.map((ele, index) => (
              <option key={index} value={ele}>
                {ele}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="buttons_container">
        <button onClick={handleCancel}>Cancel All</button>
        <button onClick={handleApply}>Apply</button>
      </div>
    </div>
    </>
  );
};

export default Filter;

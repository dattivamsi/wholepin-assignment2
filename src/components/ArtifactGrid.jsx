import React, { useState } from "react";
import ArtifactCard from "./ArtifactCard";
import "./ArtifactGrid.css";
import { IoGrid } from "react-icons/io5";
import { CiGrid2H } from "react-icons/ci";

const ArtifactGrid = ({ artifacts }) => {
  const [gridContainer, setGridContainer] = useState("grid");

  const handleButton = (data) => {
    setGridContainer(data);
  };

  console.log(gridContainer);

  return (
    <>
      <div className="idols-container">
        <div className="idol-buttons">
          <button onClick={() => handleButton("flat")} className={gridContainer === "flat" ? "button-back":""}>
            <CiGrid2H />
          </button>
          <button onClick={() => handleButton("grid")} className={gridContainer === "grid" ? "button-back":""}>
            <IoGrid />
          </button>
        </div>
        <div
          className={
            gridContainer === "grid" ? "artifact-grid" : "artifact-flat"
          }
        >
          {artifacts?.length
            ? artifacts.map((artifact) => (
                <ArtifactCard
                  key={artifact.id}
                  artifact={artifact}
                  gridContainer={gridContainer}
                />
              ))
            : "There is No Data with your filters"}
        </div>
      </div>
    </>
  );
};

export default ArtifactGrid;

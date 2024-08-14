import React, { useEffect, useState } from "react";
import "./ArtifactCard.css";

const ArtifactCard = ({ artifact, gridContainer }) => {
  const [description, setDecription] = useState("");
  const backgroundColor = artifact?.color || "#fff";

  useEffect(() => {
    const descLen = 100;
    const descdata =
      artifact?.description?.length > descLen
        ? artifact?.description?.slice(0, descLen)
        : artifact?.description;
    setDecription(descdata);
  }, []);

  return (
    <div
      className={
        gridContainer === "grid" ? "artifact-card" : "artifact-flat-card"
      }
    >
      <img
        src={artifact?.imageUrl}
        alt={artifact?.title}
        //   style={{ backgroundColor: backgroundColor }}
      />
      <div className={gridContainer === "grid" ? "response-grid":"response-card"}>
        <div className="artifact-title">
          <h3>{artifact.title}</h3>
          <p className="period">{artifact.period}</p>
        </div>

        <p className="description">{description}</p>
      </div>
      <div className="dummy"></div>
    </div>
  );
};

export default ArtifactCard;

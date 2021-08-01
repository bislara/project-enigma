import React, {useState, createRef} from 'react';
import "./Experience.css";
import ColorThief from "colorthief";
import Parser from 'html-react-parser';

export default function ExperienceCard({
  role,
  company,
  companylogo,
  date,
  desc,
  topic,
  tech,
}) {
  const [colorArrays, setColorArrays] = useState([]);
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  return (
    <div className={"experience-card"}>
      <div style={{background: rgb(colorArrays)}} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{company}</h5>
        </div>

        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={companylogo}
          alt={company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
              "experience-text-role"
          }
        >
          {role}
        </h5>
        <h5
          className={
              "experience-text-date"
          }
        >
          {date}
        </h5>
        <p
          className={
             "subTitle experience-text-desc"
          }
        >
          { tech && <b>Topic: {topic} <br></br><br></br></b>}
          {Parser(desc)}
        </p>
      </div>
    </div>
  );
}
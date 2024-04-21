import React from "react";
import HighSchoolImage from "../images/HighSchoolImage.jpg";
import UniversityImage from "../images/UniversityImage.jpg";

const Education = () => {
  const educationData = [
    {
      title: "High School Diploma",
      image: HighSchoolImage,
      imageAltText: "High School Diploma",
      description: "I graduated from William High School.",
    },
    {
      title: "University Degree",
      image: UniversityImage,
      imageAltText: "University Degree",
      description: "I am studying at Murang'a University.",
    },
  ];

  return (
    <section className="light" id="education">
      <h2 style={{ display: "flex", alignItems: "center" }}>Education</h2>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {educationData.map((education, index) => (
          <div key={index} style={{ width: "100%", marginBottom: "20px" }}>
            <img
              src={education.image}
              alt={education.imageAltText}
              style={{ width: "100%", height: "200px", objectFit: "cover", borderRadius: "5px" }}
            />
            <div style={{ padding: "10px" }}>
              <h3>{education.title}</h3>
              <p>{education.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;

import React from "react";
import { courses } from "./data";

import "./styles.scss";

const AboutCourses = () => {
  return (
    <div className="about-courses">
      <div className="container about-course-card">
        {courses.map((course) => {
          return (
            <div key={course.id} className="about-card">
              <div className="section-head">{course.name}</div>
              <div className="section-sub">{course.subHead}</div>

              <div className="section-points">
                <ul>
                  {course.points.map((point) => {
                    return <li key={point.id}>{point.content}</li>;
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AboutCourses;

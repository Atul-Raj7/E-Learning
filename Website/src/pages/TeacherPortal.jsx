import React from "react";
import "./TeacherPortal.css";

export default function TeacherPortal() {
  return (
    <div className="teacherportal">
      {/* <div className="teacher-portal-container"> */}
        <div className="portal-box">
          <h2>Teacher Portal</h2>
          {/* drop downs */}
          <div className="dropdown">
            {/* <button className="dropbtn">Select Class</button> */}
            <div className="dropdown-content" style={{
                display: "flex",
                justifyContent: 'space-evenly',
                marginBottom: '2rem'
            }}>
                <select name="" id="">
                    <option value="">BCA</option>
                    <option value="">B Tech</option>
                    <option value="">AI/ML</option>
                </select>
                <select name="" id="">
                    <option value="">Section A</option>
                    <option value="">Section B</option>
                    <option value="">Section C</option>
                </select>
            </div>

            </div>
          <div className="option-box">
          <div className="option">
              <h3>Join Official Meetings</h3>
            </div>
            <div className="option">
              <h3>Start Live Session</h3>
            </div>
            <div className="option">
              <h3>Upload class notes</h3>
            </div>
            <div className="option">
              <h3>Auto Question Generator</h3>
            </div>
            {/* <div className="option">
              <h3>Upload Mock Test</h3>
            </div> */}
            <div className="option">
              <h3>Check Answer Sheets</h3>
            </div>
          </div>
        </div>
      </div>
    // </div>
  );
}

import React from 'react';

export default function About() {
  return (
    <section className="about_section layout_padding" id="About">
      <div className="container">
        <div className="heading_container heading_center">
          <h2>
            About <span>Us</span>
          </h2>
          <p>
            THE DEFENCE SPACE ADMINISTRATION (DSA) WAS ESTABLISHED AND BACKED BY
            AN ACT OF THE NATIONAL ASSEMBLY (DSA ACT 2016) TO IMPLEMENT THE
            DEFENCE AND SECURITY ASPECTS OF THE NATIONAL SPACE POLICY AND
            PROGRAMME (NSPP) 2001
          </p>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="img-box">
              <img src="images/dsa logo.png" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="detail-box">
              <h3>MANDATE</h3>
              <p>
                THE DSA WAS ESTABLISHED TO ENHANCE THE UTILISATION OF SPACE
                SCIENCE AND TECHNOLOGY IN THE ARMED FORCES OF NIGERIA AND OTHER
                SECURITY AGENCIES
              </p>
              <h3>Mission</h3>
              <p>
                TO SUPPORT THE ARMED FORCES OF NIGERIA AND OTHER SECURITY
                AGENCIES WITH RELEVANT SPACE PRODUCTS AND SOLUTIONS NECESSARY
                FOR THE CONDUCT OF OPERATIONS IN PEACE AND WARTIME IN LINE WITH
                THE NATIONAL SPACE POLICY AND PROGRAMME
              </p>
              <h3>Vision</h3>
              <p>
                THE VISION OF THE DSA IS TO CREATE A ROBUST INDIGENOUS SPACE
                COMPETENCE THAT IS CAPABLE OF PRODUCING AND UTILIZING SPACE
                ASSETS TO MEET THE OPERATIONAL REQUIREMENTS OF THE AFN AND OTHER
                SECURITY AGENCIES
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

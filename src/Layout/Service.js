import React from 'react';

export default function Service() {
  return (
    <section className="service_section layout_padding">
      <div className="service_container">
        <div className="container">
          <div className="heading_container heading_center">
            <h2>
              Our <span>Services</span>
            </h2>
            <p>We offer various services including</p>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src="images/map1.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Mapping and Geo Information</h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  </p>
                  <a href=""> Read More </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src="images/s2.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Cyber Security</h5>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing nostrum
                    optio laboriosam asperiores praesentium ipsa.
                  </p>
                  <a href=""> Read More </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="box">
                <div className="img-box">
                  <img src="images/s3.png" alt="" />
                </div>
                <div className="detail-box">
                  <h5>Research and Development</h5>
                  <p>
                    Ea delectus voluptatibus ullam fuga accusantium iure nobis
                    dolorem? Doloribus libero aliquid nam,
                  </p>
                  <a href=""> Read More </a>
                </div>
              </div>
            </div>
          </div>
          <div className="btn-box">
            <a href=""> View All </a>
          </div>
        </div>
      </div>
    </section>
  );
}

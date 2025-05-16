import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";

export default function Footer() {
  return (
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <MDBContainer className="text-center text-md-start mt-5 px-0">
        <MDBRow className="mt-3">
          <MDBCol md= {3} lg={5} xl={5} className="mb-4">
            <div className="d-flex align-items-center mb-4">
              <img src="logo.png" alt="" style={{ width: "203px", height: "auto" }}/>
              <h6 className="text-uppercase fw-bold mb-4"></h6>
            </div>
            <p style={{ 
              maxWidth: "427px", 
              fontSize: "16px"
              }}>
              Bookoe is a Book Store Website lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud
            </p>
            <div>
              <h6 className="text-uppercase fw-bold mb-4"> Follow Us </h6>
              <a href="" className="me-4 text-reset">
                <MDBIcon
                  fab
                  icon="facebook-f"
                  className="custom-icon"
                  style={{ color: "#1E33E5" }}
                />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon
                  fab
                  icon="twitter"
                  className="custom-icon"
                  style={{ color: "#3CB5DB" }}
                />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon
                  fab
                  icon="youtube"
                  className="custom-icon"
                  style={{ 
                    color: "#FF2B2B", 
                    background: "#FFD4D4"
                  }}
                />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon
                  fab
                  icon="instagram"
                  className="custom-icon"
                  style={{ color: "#FD3E77" }}
                />
              </a>
              <a href="" className="me-4 text-reset">
                <MDBIcon
                  fab
                  icon="linkedin"
                  className="custom-icon"
                  style={{ color: "#286FA3" }}
                />
              </a>
            </div>
          </MDBCol>

          <MDBCol md={2} lg={2} xl={2} className="mb-4">
            <h6 className="text-uppercase fw-bold mb-4 footer-heading">
              Books categories
            </h6>
              <div className="row">
  <div className="col d-flex flex-column justify-content-start">
    {/* Première colonne */}
    <p><a href="#!" className="text-reset">Action</a></p>
    <p><a href="#   !" className="text-reset">Adventure</a></p>
    <p><a href="#!" className="text-reset">Comedy</a></p>
    <p><a href="#!" className="text-reset">Crime</a></p>
    <p><a href="#!" className="text-reset">Drama</a></p>
    <p><a href="#!" className="text-reset">Fantasy</a></p>
    <p><a href="#!" className="text-reset">Horror</a></p>
  </div>

  <div className="col d-flex flex-column justify-content-start">
    {/* Deuxième colonne */}
    <p><a href="#!" className="text-reset">Law</a></p>
    <p><a href="#!" className="text-reset">Mystery</a></p>
    <p><a href="#!" className="text-reset">Romance</a></p>
    <p><a href="#!" className="text-reset">TV Series</a></p>
    <p><a href="#!" className="text-reset" id="views">Views more >  </a></p>
  </div>
</div>
          </MDBCol>

          <MDBCol md={3} lg={2} xl={2} className="mb-4">
            <h6 className="text-uppercase fw-bold mb-4 footer-heading">
              Quick Links
            </h6>
            <p>
              <a href="#!" className="text-reset">
                About us
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Contact us
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Products
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Login
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Sign Up
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                FAQ
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Shipment
              </a>
            </p>
          </MDBCol>

          <MDBCol md={4} lg={3} xl={3}   className="mb-md-0 mb-4">
            <h6 className="text-uppercase fw-bold mb-4 footer-heading">
              Our Store
            </h6>
            <div className="mb-3">
              <iframe
                src="https://www.google.com/maps?q=832+Thompson+Drive,+San+Francisco,+CA+94107,+United+States&output=embed"
                className="w-100 rounded"
                height="120"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

            <p className="d-flex align-items-start">
              <MDBIcon icon="location-dot" className="me-3" />
              <a
                href="https://www.google.com/maps?q=832+Thompson+Drive,+San+Fransisco,+CA+94107,+United+States"
                target="_blank"
                rel="noopener noreferrer"
                className="text-reset"
              >
                832 Thompson Drive, San Francisco, CA 94107, United States
              </a>
            </p>
            <p> 
              <MDBIcon icon="phone" className="me-2"/> 
              <a className="text-reset"> +123 345123 556</a>
            </p>
            <p>
              <MDBIcon icon="envelope" className="me-2"/> 
              <a className="text-reset me-3"> support@bookoe.id </a>
            </p>
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <hr className="my-4" />
          </MDBCol>
        </MDBRow>

        <div className="footer d-flex justify-content-between align-items-center">
          <div className="left-part">
            Bookoe Book Store Website - © 2020 All Rights Reserved
          </div>
          <div className="right-part">Made with ♥ by Peterdraw</div>
        </div>
      </MDBContainer>
    </MDBFooter>
  );
}

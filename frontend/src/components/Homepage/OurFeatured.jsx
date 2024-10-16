import React from "react";
import { useNavigate } from "react-router-dom";
import { allPgs } from "../../api";
import house1 from "./images/house1.webp";
import house2 from "./images/house2.jpg";
import house3 from "./images/house3.jpeg";
import arrow from "./images/arrow.png";
import "./header.css";
import swal from "sweetalert";

export const OurFeatured = () => {
  let navigate = useNavigate();

  const makeRequest = async (filter) => {
    let loadingOverlay = document.querySelector(".loading-overlay");
    // let errorMessage = document.querySelector(".error-msg");

    loadingOverlay.style.display = "block";
    const response = await allPgs({ homeType: filter });
    loadingOverlay.style.display = "none";
    if (response.status === "success") {
      navigate("/listedpg", {
        state: [response.data.pgs, { homeType: [filter] }],
      });
      window.scrollTo(0, 0);
    } else {
      swal("Error!", response.error);
    }
  };
  return (
    <>
      <section>
        <div className="container py-4 py-sm-5">
          <h2 className="ff_space text-center blue_clr fw-bold fs_xl">
            Featured Properties
          </h2>
          <div className="d-flex justify-content-center">
            <p className="ff_space text-center text_rgba_blac fw-normal fs_sm col-lg-10 mb-0">
              Discover our top featured properties, offering prime locations, modern amenities, and great value. Whether you're seeking a dream home or a smart investment, explore our curated selection of homes and apartments designed for comfort and style.
            </p>
          </div>

          <div className="row pt-5 justify-content-between">
            {/* row start */}
            <div className="col-md-4 width_lg_31 h-100 mt-4 mt-md-0">
              <div className="card_1 p-2 px-4 border_radius_0_39 ">
                <img
                  className="w-100 border-hero accomodation-card"
                  src={house1}
                  alt="Rhouse1"
                  onClick={() => makeRequest("Town_House")}
                />
                <div className="d-flex justify-content-between mt-2 align-items-center">
                  <h5 className="m-0 ff_space fw_500 fs_md">Town House</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5
                    className="m-0 ff_space fw_400 fs_xsm opacity-75 accomodation-arrow"
                    onClick={() => makeRequest("Town_House")}
                  >
                    Explore <img src={arrow} alt="" className="w_20" />
                  </h5>

                </div>
              </div>
            </div>
            <div className="col-md-4 width_lg_31 h-100 mt-4 mt-md-0">
              <div className="card_1 p-2 px-4 border_radius_0_39 ">
                <img
                  className="w-100 border-hero accomodation-card"
                  src={house2}
                  alt="Rhouse1"
                  onClick={() => makeRequest("Apartments")}
                />
                <div className="d-flex justify-content-between mt-2 align-items-center">
                  <h5 className="m-0 ff_space fw_500 fs_md">Modern Villa</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5
                    className="m-0 ff_space fw_400 fs_xsm opacity-75 accomodation-arrow"
                    onClick={() => makeRequest("Apartments")}
                  >
                    Explore <img src={arrow} alt="" className="w_20" />
                  </h5>

                </div>
              </div>
            </div>
            <div className="col-md-4 width_lg_31 h-100 mt-4 mt-md-0">
              <div className="card_1 p-2 px-4 border_radius_0_39 ">
                <img
                  className="w-100 border-hero accomodation-card"
                  src={house3}
                  alt="Rhouse1"
                  onClick={() => makeRequest("Apartments")}
                />
                <div className="d-flex justify-content-between mt-2 align-items-center">
                  <h5 className="m-0 ff_space fw_500 fs_md">Apartments</h5>
                </div>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5
                    className="m-0 ff_space fw_400 fs_xsm opacity-75 accomodation-arrow"
                    onClick={() => makeRequest("Apartments")}
                  >
                    Explore <img src={arrow} alt="" className="w_20" />
                  </h5>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

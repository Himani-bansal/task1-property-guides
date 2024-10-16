import React from "react";
import location from "./images/Address_mark.svg";
import smartHouse from "./images/Make_Payements.svg";
import lock from "./images/Secure_data_lock.svg";

export const HowItWork = () => {

  return (
    <section>
      <div className="container py-4 py-sm-5">
        <h2 className="ff_space text-center blue_clr fw-bold fs_xl">
          How It Works
        </h2>
        <div className="d-flex justify-content-center">
          <p className="ff_space text-center text_rgba_blac fw-normal fs_sm col-lg-10 mb-0">
            Our process is simple and very different from those of others in this industry.
          </p>
        </div>
        <div className="row pt-5 justify-content-between ">
          {/* row start */}
          <div className="col-sm-6 col-lg-4 mt-4 mt-lg-0">
            <div className="px-4 py-5 bg-white card_1 text-center h-100">
              <img className="py-5" src={location} alt="location" />
              <h5 className="m-0 ff_space fw_500 fs_lg">Find Real Estate </h5>
              <p className="m-0 ff_space fw_400 fs_sm mt-2">
                Fill the search fields like your Locality, City, Category.
              </p>
            </div>
          </div>
          {/* 2 */}
          <div className="col-sm-6 col-lg-4 mt-4 mt-lg-0">
            <div className="px-4 py-4 bg-white card_1 text-center h-100">
              <img className="py-5" src={smartHouse} alt="House" />
              <h5 className="m-0 ff_space fw_500 fs_lg">Meet Relator</h5>
              <p className="m-0 ff_space fw_400 fs_sm mt-2">
                Select your Home, Rental Home and meet the Relator.
              </p>
            </div>
          </div>
          {/* 3 */}
          <div className="col-sm-6 col-lg-4 mt-4 mt-lg-0">
            <div className="px-4 py-5 bg-white card_1 text-center h-100">
              <img className="py-5" src={lock} alt="lock" />
              <h5 className="m-0 ff_space fw_500 fs_lg">Take The Keys</h5>
              <p className="m-0 ff_space fw_400 fs_sm mt-2">
                You can visit the house.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from "react";
import { Link} from "react-router-dom";
import "./PGOwnerForm.css";

const PGOwnerForm = () => {
  <div className="d-flex">
              <div className="error-container">
                <div>
                  <p className="no-pg-error">I am working on it.</p>
                </div>
                <div>
                  <p className="home-link">
                    Go back to <Link to={"/"}>Home</Link> Page
                  </p>
                </div>
              </div>
            </div>
};

export default PGOwnerForm;

import React, { Fragment, useState } from "react";

import { Stepper, Step } from "react-form-stepper";

import StepOne from "./ClientstepOne";
import StepTwo from "./ClientstepTwo";
import StepThree from "./ClientstepThree";
import StepFour from "./ClientstepFour";
import StepFive from "./ClientstepFive";
import PageTitle from "../../../layouts/PageTitle";

const ClientSubmit = () => {
  const [goSteps, setGoSteps] = useState(0);

  return (
    <Fragment>
      <PageTitle activeMenu="Add Service User" motherMenu="Home" />

      <div className="row">
        <div className="col-xl-12 col-xxl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Form step</h4>
            </div>
            <div className="card-body">
              <div className="form-wizard ">
                <Stepper
                  className="nav-wizard"
                  activeStep={goSteps}
                  label={false}
                >
                  <Step
                    className="nav-link"
                    onClick={() => setGoSteps(0)}
                    label="General Details"
                  />
                  <Step
                    className="nav-link"
                    onClick={() => setGoSteps(1)}
                    label="Personal Contacts"
                  />
                  <Step
                    className="nav-link"
                    onClick={() => setGoSteps(2)}
                    label="Location"
                  />
                  <Step
                    className="nav-link"
                    onClick={() => setGoSteps(3)}
                    label="Care Circle"
                  />
                  <Step
                    className="nav-link"
                    onClick={() => setGoSteps(4)}
                    label="Service"
                  />
                  <Step
                    className="nav-link"
                    onClick={() => setGoSteps(5)}
                    label="Service"
                  />
                </Stepper>
                {goSteps === 0 && (
                  <>
                    <StepOne />
                    <div className="text-right toolbar toolbar-bottom p-2">
                      <button
                        className="btn btn-primary sw-btn-next"
                        onClick={() => setGoSteps(1)}
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}
                {goSteps === 1 && (
                  <>
                    <StepTwo />
                    <div className="text-right toolbar toolbar-bottom p-2">
                      <button
                        className="btn btn-secondary sw-btn-prev mr-1"
                        onClick={() => setGoSteps(0)}
                      >
                        Prev
                      </button>
                      <button
                        className="btn btn-primary sw-btn-next ml-1"
                        onClick={() => setGoSteps(2)}
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}
                {goSteps === 2 && (
                  <>
                    <StepThree />
                    <div className="text-right toolbar toolbar-bottom p-2">
                      <button
                        className="btn btn-secondary sw-btn-prev mr-1"
                        onClick={() => setGoSteps(1)}
                      >
                        Prev
                      </button>
                      <button
                        className="btn btn-primary sw-btn-next ml-1"
                        onClick={() => setGoSteps(3)}
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}
                {goSteps === 3 && (
                  <>
                    <StepFour />
                    <div className="text-right toolbar toolbar-bottom p-2">
                      <button
                        className="btn btn-secondary sw-btn-prev mr-1"
                        onClick={() => setGoSteps(2)}
                      >
                        Prev
                      </button>
                      <button
                        className="btn btn-primary sw-btn-next ml-1"
                        onClick={() => setGoSteps(4)}
                      >
                        Next
                      </button>
                    </div>
                  </>
                )}
                {goSteps === 4 && (
                  <>
                    <StepFive />
                    <div className="text-right toolbar toolbar-bottom p-2">
                      <button
                        className="btn btn-secondary sw-btn-prev mr-1"
                        onClick={() => setGoSteps(3)}
                      >
                        Prev
                      </button>
                      <button
                        className="btn btn-primary sw-btn-next ml-1"
                        onClick={() => setGoSteps(5)}
                      >
                        Submit
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ClientSubmit;

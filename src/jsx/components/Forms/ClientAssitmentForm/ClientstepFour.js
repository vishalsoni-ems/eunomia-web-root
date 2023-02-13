import React from "react";
import { Link } from "react-router-dom";

const ClientstepFour = () => {
  return (
    <section className="mt-5 mb-5">
      <div className="row mt-5 mb=5">
        <div className="col-md-6">
          <div className="form-group mb-5">
            <h4>Family</h4>
            <label>Next of Kin:</label>
            <button className="addbtn ml-1">
              <i class="bi bi-plus-lg"></i>
            </button>
            <br></br>
            <button className="addother mt-1">
              <i class="bi bi-plus-lg"> Add Family member</i>
            </button>
          </div>
          <div className="form-group mt-5">
            <h4>Specialists</h4>
            <label>Doctor:</label>
            <button className="addbtn ml-1">
              <i class="bi bi-plus-lg"></i>
            </button>
            <br></br>
            <button className="addother mt-1">
              <i class="bi bi-plus-lg"> Add Specialist</i>
            </button>
          </div>
        </div>
        <div className="col-md-6">
          <button className="btn btn-primary">Edit</button>
          <div className="form-group">
            <form>
              <label for="myfile">Select a file:</label>
              <input type="file" id="myfile" name="myfile" />
            </form>
          </div>
        </div>
      </div>
      <div className="row emial-setup mb-5">
        <div className="col-md-6"></div>
        <div className="col-md-6"></div>
      </div>
    </section>
  );
};

export default ClientstepFour;

import React from "react";

const ClientstepThree = () => {
  return (
    <section>
      <div className="row">
        <div className="col-md-6 mb-2">
          <h4>Location Address</h4>
          <div className="form-group">
            <label>Passcode</label>
            <input
              className="form-control"
              value=""
              type="text"
              name="passcode"
              id="input1"
            />
          </div>
          <div className="form-group">
            <label>Country</label>
            <input
              className="form-control"
              value=""
              type="text"
              name="country"
              id="input1"
            />
          </div>
          <div className="form-group">
            <label>City</label>
            <select name="City" className="form-control">
              <option value="">Uk</option>
              <option value="">India</option>
            </select>
          </div>
          <div className="form-group">
            <label>Address</label>
            <input
              className="form-control"
              value=""
              type="text"
              name="address"
              id="input1"
            />
          </div>
          <div className="form-group">
            <label>Add Map</label>
            <input
              className="form-control"
              value=""
              type="number"
              name="input1"
              id="input1"
            />
          </div>
        </div>
        <div className="col-md-6 mb-2">
          <h4>Location Sepcifics</h4>
          <div className="form-group">
            <label>Select Care Branch</label>
            <select name="selectbranch" className="form-control">
              <option value="branch1">Branch1</option>
              <option value="branch2">Branch2</option>
            </select>
          </div>
          <div className="form-group">
            <label>Select Care Area</label>
            <select name="selectarea" className="form-control">
              <option value="area1">Area1</option>
              <option value="area2">Area2</option>
            </select>
          </div>
          <div className="form-group">
            <label>Key Safe</label>
            <input
              className="form-control"
              value=""
              type="number"
              name="input1"
              id="input1"
            />
          </div>
          <div className="form-group">
            <label>Entrance Method</label>
            <input
              className="form-control"
              value=""
              type="number"
              name="input1"
              id="input1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientstepThree;

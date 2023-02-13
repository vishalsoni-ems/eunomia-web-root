import React from "react";
import { Link } from "react-router-dom";
import { useFormik } from 'formik';

const ClientstepFive = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <section>
      <div className="row mb-5">
        <div className="col-md-5">
          <div className="form-group">
            <label className="text-label">Planned Assessment Date</label>
            <input type="Date" name="Date" className="form-control" required />
          </div>
          <div className="form-group">
            <label className="text-label">Select Mileage log</label>
            <select name="Gender" className="form-control">
              <option value="40M">40M</option>
              <option value="80M">80M</option>
            </select>
          </div>
          <div className="form-group">
            <label className="text-label">Mileage Charge Rate</label>
            <input
              type="number"
              name="Initial"
              className="form-control"
              placeholder="Parsley"
              required
            />
          </div>
        </div>
        <div className="col-md-2"></div>
        <div className="col-md-5">
          <h3>Expected Services</h3>
          <div className="form-group mt-2">
            <label>Services:</label>
            <button className="addmemb ml-5">
              <i class="bi bi-plus-lg"> Add </i>
            </button>
          </div>
          <div className="form-group">
            <label className="text-label">Start Date</label>
            <input type="Date" name="Date" className="form-control" required />
          </div>
          <div className="form-group">
            <label className="text-label">End Date</label>
            <input type="Date" name="Date" className="form-control" required />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientstepFive;

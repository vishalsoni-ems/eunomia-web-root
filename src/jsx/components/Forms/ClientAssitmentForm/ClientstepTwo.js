import { useState } from "react";
import React from "react";

const ClientstepTwo = () => {
  return (
    <section>
      <div className="row">
        <div className="col-lg-4 mb-2">
          <div className="form-group">
            <label className="text-label">Primary Phone Number*</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Primary Phone Number"
              required
            />
          </div>
          <div className="form-group">
            <label className="text-label">Secondary Phone Number*</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Secondary Phone Number"
              required
            />
          </div>
          <div className="form-group">
            <label className="text-label">Tertiary Phone Number*</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Tertiary Phone Number"
              required
            />
          </div>
          <div className="form-group">
            <label className="text-label">Primary Email*</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Primary Email"
              required
            />
          </div>
          <div className="form-group">
            <label className="text-label">Secondary Email*</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Secondary Email"
              required
            />
          </div>
          <div className="form-group">
            <label className="text-label">Telegram*</label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Telegram"
              required
            />
          </div>
          <button className="addother">
            <i class="bi bi-plus-lg"> Add Other Content</i>
          </button>
        </div>
        <div className="col-lg-6 mb-2"></div>
      </div>
    </section>
  );
};

export default ClientstepTwo;

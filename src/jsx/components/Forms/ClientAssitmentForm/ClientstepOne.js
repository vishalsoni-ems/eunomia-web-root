import React, { useState } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import userProfileLogo from "../../../../images/Rectangle98.png";
import deleteVector from "../../../../images/deleteVector.png";
import PageTitle from "../../../layouts/PageTitle";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
const ClientstepOne = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [personalContactformFields, setPersonalContactformFields] = useState([
    { name: "", email: "" },
  ]);
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const uploadFiles = (e) => {
    document.getElementById("img").click();
    // use Yup and Formik
  };
  const uploadFiles2 = (e) => {
    document.getElementById("myfile").click();
    // use Yup and Formik
  };
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      preferedname: "",
      gender: "",
      date: "",
    },

    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) {
        errors.name = "First name is required";
      }
      if (!values.middlename) {
        errors.middlename = "Middlename is required";
      }
      if (!values.preferedname) {
        errors.lastName = "Last name is required";
      }
      if (!values.preferedname) {
        errors.preferedname = "Preferedname is required";
      }
      if (!values.gender) {
        errors.gender = "Gender is required";
      }
      if (!values.date) {
        errors.date = "Date is required";
      }
      if (!values.socialservice) {
        errors.socialservice = "Social Service is required";
      }

      if (!values.email) {
        errors.email = "Required!";
      } else if (
        !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i.test(
          values.email
        )
      ) {
        errors.email = "Invalid email format!";
      }
      return errors;
    },
  });

  const addpersonalContatcField = () => {
    setPersonalContactformFields([
      ...personalContactformFields,
      { name: "", email: "" },
    ]);
  };
  return (
    <>
      <PageTitle activeMenu="Add Service User" motherMenu="Home" />
      <form onSubmit={formik.handleSubmit}>
        <section className="divdation">
          <div className="card">
            <div className="card-body profile-image">
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab
                      label="General Details"
                      {...a11yProps(0)}
                      className="head-tabs"
                    />
                    <Tab
                      label="Care Circle"
                      className="head-tabs"
                      {...a11yProps(1)}
                    />
                    <Tab
                      label="Service"
                      className="head-tabs"
                      {...a11yProps(2)}
                    />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <div className="row mb-5 mt-5 ">
                    <div className="col-md-3 mb-2 gen-det-res">
                      <div>
                        <h3 styel={{ width: "43px", height: "19px" }}>Photo</h3>
                        <div className="user-img">
                          <div className="x">
                            <img
                              alt="not fount"
                              style={{
                                width: "133px",
                                height: "133px",
                                borderRadius: "5px",
                                cursor: "pointer",
                              }}
                              onClick={uploadFiles.bind()}
                              src={
                                selectedImage
                                  ? URL.createObjectURL(selectedImage)
                                  : userProfileLogo
                              }
                            />
                            <button className="uploadimg mt-2 mr-5">
                              Upload
                            </button>
                            <div className="top-right">
                              <img
                                src={deleteVector}
                                alt="not fount"
                                className="deleteVector"
                              />
                            </div>
                            <br />
                          </div>
                          <br />
                          <br />
                          <input
                            type="file"
                            name="myImage"
                            style={{ display: "none" }}
                            title=" "
                            onChange={(event) => {
                              console.log(event.target.files[0]);
                              setSelectedImage(event.target.files[0]);
                            }}
                            id="img"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 form-name">
                      <div className="form-group">
                        <label className="text-label">First Name*</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          onChange={formik.handleChange}
                          value={formik.values.name}
                          className="form-control input-border"
                          placeholder="Parsley"
                        />
                        {formik.errors.name && (
                          <div className="error">{formik.errors.name} </div>
                        )}
                      </div>

                      <div className="form-group">
                        <label className="text-label">Middle Name*</label>
                        <input
                          type="text"
                          name="middlename"
                          id="middlename"
                          className="form-control input-border"
                          placeholder="Parsley"
                          onChange={formik.handleChange}
                          value={formik.values.middlename}
                        />
                        {formik.errors.middlename && (
                          <div className="error">
                            {formik.errors.middlename}{" "}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label className="text-label">Last Name*</label>
                        <input
                          type="text"
                          name="lastName"
                          id="lastName"
                          className="form-control input-border"
                          placeholder="Parsley"
                          onChange={formik.handleChange}
                          value={formik.values.lastName}
                        />
                        {formik.errors.name && (
                          <div className="error">{formik.errors.lastName} </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label className="text-label">Prefered Name*</label>
                        <input
                          type="text"
                          name="preferedname"
                          className="form-control input-border"
                          placeholder="Parsley"
                        />
                        {formik.errors.name && (
                          <div className="error">
                            {formik.errors.preferedname}{" "}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label className="text-label">Initials</label>
                        <input
                          type="text"
                          name="Initial"
                          className="form-control input-border"
                          placeholder="Parsley"
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-label">Select Gender</label>
                        <select name="Gender" className="form-control">
                          <option value="Male">Male</option>
                          <option value="Female">Female</option>
                        </select>
                        {formik.errors.name && (
                          <div className="error">{formik.errors.gender} </div>
                        )}
                      </div>
                    </div>
                    <div className="col-md-5">
                      <div className="form-group">
                        <label className="text-label">
                          Select Date of Birth*
                        </label>
                        <input
                          type="Date"
                          name="Date"
                          className="form-control input-border"
                        />
                        {formik.errors.name && (
                          <div className="error">{formik.errors.date} </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label className="text-label">
                          Social Serivce Reference*
                        </label>
                        <input
                          type="text"
                          name="SSR"
                          className="form-control input-border"
                        />
                        {formik.errors.name && (
                          <div className="error">
                            {formik.errors.socialservice}{" "}
                          </div>
                        )}
                      </div>
                      <div className="form-group">
                        <label className="text-label">
                          Care Provider Reference*
                        </label>
                        <input
                          type="text"
                          name="CCR"
                          className="form-control input-border"
                        />
                      </div>
                    </div>
                  </div>
                  <hr></hr>
                  <h3>Personal Contacts</h3>
                  <div className="row mt-5">
                    <div className="col-md-2"></div>
                    <div className="col-lg-4 mb-2">
                      {/* {
                    personalContactformFields && personalContactformFields?.length > 0 && personalContactformFields?.map((fields, index) => {
                      return(
                        <div className="form-group form-control" key={index}>
                      
                      <label className="text-label">
                        new field
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        className="form-control input-border"
                        placeholder="Primary Phone Number"
                      />
                    </div>
                      )
                    }) 
                  } */}
                      <div className="form-group">
                        <label className="text-label">
                          Primary Phone Number*
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          className="form-control input-border"
                          placeholder="Primary Phone Number"
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-label">
                          Secondary Phone Number*
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          className="form-control input-border"
                          placeholder="Secondary Phone Number"
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-label">
                          Tertiary Phone Number*
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          className="form-control input-border"
                          placeholder="Tertiary Phone Number"
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-label">Primary Email*</label>
                        <input
                          type="text"
                          name="firstName"
                          className="form-control input-border"
                          placeholder="Primary Email"
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-label">Secondary Email*</label>
                        <input
                          type="text"
                          name="firstName"
                          className="form-control input-border"
                          placeholder="Secondary Email"
                        />
                      </div>
                      <div className="form-group">
                        <label className="text-label">Telegram*</label>
                        <input
                          type="text"
                          name="firstName"
                          className="form-control input-border"
                          placeholder="Telegram"
                        />
                      </div>
                      <button
                        className="addother"
                        onClick={() => addpersonalContatcField()}
                      >
                        <i class="bi bi-plus-lg icon-i"> Add Other Content</i>
                      </button>
                    </div>
                    <div className="col-lg-6 mb-2"></div>
                  </div>
                  <div className="card">
                    <div className="card-body">
                      <hr></hr>
                      <h3>Location</h3>
                      <div className="row mt-5">
                        <div className="col-md-6 mb-2">
                          <h4>Location Address</h4>
                          <div className="form-group">
                            <label>Passcode</label>
                            <input
                              className="form-control input-border"
                              value=""
                              type="text"
                              name="passcode"
                              id="input1"
                            />
                          </div>
                          <div className="form-group">
                            <label>Country</label>
                            <input
                              className="form-control input-border"
                              value=""
                              type="text"
                              name="country"
                              id="input1"
                            />
                          </div>
                          <div className="form-group">
                            <label>City</label>
                            <select
                              name="City"
                              className="form-control input-border"
                            >
                              <option value="">Uk</option>
                              <option value="">India</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label>Address</label>
                            <input
                              className="form-control input-border"
                              value=""
                              type="text"
                              name="address"
                              id="input1"
                            />
                          </div>
                          <div className="form-group">
                            <label>Add Map</label>
                            <input
                              className="form-control input-border"
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
                            <select
                              name="selectbranch"
                              className="form-control input-border"
                            >
                              <option value="branch1">Branch1</option>
                              <option value="branch2">Branch2</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label>Select Care Area</label>
                            <select
                              name="selectarea"
                              className="form-control input-border"
                            >
                              <option value="area1">Area1</option>
                              <option value="area2">Area2</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label>Key Safe</label>
                            <input
                              className="form-control input-border"
                              value=""
                              type="number"
                              name="input1"
                              id="input1"
                            />
                          </div>
                          <div className="form-group">
                            <label>Entrance Method</label>
                            <input
                              className="form-control input-border"
                              value=""
                              type="number"
                              name="input1"
                              id="input1"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div className="row mt-5">
                    <div className="col-md-6 mb-2">
                      <h3>Care Circle</h3>
                      <div className="col-md-6 mt-5">
                        <div className="form-group mb-5">
                          <h5>Family</h5>
                          <label>Next of Kin:</label>
                          <button className="addbtn ml-1">
                            <i class="bi bi-plus-lg icon-i"></i>
                          </button>
                          <br></br>
                          <button className="addother mt-1">
                            <i class="bi bi-plus-lg icon-i">
                              {" "}
                              Add Family member
                            </i>
                          </button>
                        </div>
                        <div className="form-group mt-5">
                          <h4>Specialists</h4>
                          <label>Doctor:</label>
                          <button className="addbtn ml-1">
                            <i class="bi bi-plus-lg icon-i"></i>
                          </button>
                          <br></br>
                          <button className="addother mt-1">
                            <i class="bi bi-plus-lg icon-i"> Add Specialist</i>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mt-5">
                      <div className="mt-5">
                        <button className="btn btn-primary">Edit</button>
                        <div className="form-group">
                          <label for="myfile">Select a file:</label>
                          <input
                            type="file"
                            id="myfile"
                            style={{ display: "none" }}
                          />
                          <button
                            className="addmemb ml-1"
                            onClick={uploadFiles2.bind()}
                          >
                            Select file
                          </button>
                        </div>
                      </div>
                      {/* <div className="mt-5">
                    <button className="btn btn-primary">Edit</button>
                    <div className="form-group">
                      <form>
                        <label for="myfile">Select a file:</label>
                        <input
                          type="file"
                          id="myfile"
                          style={{ display: "none" }}
                        />
                        <button onClick={uploadFiles2.bind()}>
                          Select file
                        </button>
                      </form>
                    </div>
                  </div> */}
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                  <div className="card">
                    <div className="card-body">
                      <h3>Service</h3>
                      <div className="row mb-5 mt-5">
                        <div className="col-md-5">
                          <div className="form-group">
                            <label className="text-label">
                              Planned Assessment Date
                            </label>
                            <input
                              type="Date"
                              name="Date"
                              className="form-control input-border"
                            />
                          </div>
                          <div className="form-group">
                            <label className="text-label">
                              Select Mileage log
                            </label>
                            <select
                              name="Gender"
                              className="form-control input-border"
                            >
                              <option value="40M">40M</option>
                              <option value="80M">80M</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label className="text-label">
                              Mileage Charge Rate
                            </label>
                            <input
                              type="number"
                              name="Initial"
                              className="form-control input-border"
                              placeholder="Parsley"
                            />
                          </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5">
                          <h3>Expected Services</h3>
                          <div className="form-group mt-2">
                            <label>Services:</label>
                            <button className="addmemb ml-5">
                              <i class="bi bi-plus-lg icon-i"> Add </i>
                            </button>
                          </div>
                          <div className="form-group">
                            <label className="text-label">Start Date</label>
                            <input
                              type="Date"
                              name="Date"
                              className="form-control input-border"
                            />
                          </div>
                          <div className="form-group">
                            <label className="text-label">End Date</label>
                            <input
                              type="Date"
                              name="Date"
                              className="form-control input-border"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <center>
                      <button className="btn btn-primary mb-5" type="submit">
                        Submit
                      </button>
                    </center>
                  </div>
                </TabPanel>
              </Box>
            </div>
          </div>
        </section>
      </form>
    </>
  );
};

export default ClientstepOne;

import loadable from "@loadable/component";
import pMinDelay from "p-min-delay";
import React, { useState } from "react";
import { Dropdown, Nav, Tab } from "react-bootstrap";
import Chart from "react-apexcharts";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
import { Link } from "react-router-dom";
// images
import image01 from "../../../images/profile/20.jpg";
import image02 from "../../../images/profile/21.jpg";
import image03 from "../../../images/profile/22.jpg";
import image04 from "../../../images/profile/23.jpg";
import Donut from "./acara/dashboardChart/Donut";
import Increase from "./acara/dashboardChart/Increase";
// Home Charts
// import OrderSummaryChart from "./acara/dashboardChart/OrderSummaryChart";
import SalesCharts from "./acara/dashboardChart/SalesCharts";
import SalesRevenue from "./acara/dashboardChart/SalesRevenue";
import SalesRevenue2 from "./acara/dashboardChart/SalesRevenue2";
import SalesRevenue3 from "./acara/dashboardChart/SalesRevenue3";
// Home Slide
import EventSlide from "./acara/dashboardHomeSlide/EventSlide";

const OrderSummaryChart = loadable(() =>
  pMinDelay(import("./acara/dashboardChart/OrderSummaryChart"), 1000)
);

const Home = () => {
  const [refreshToggle, setRefreshToggle] = useState(false);
  const options = {
    chart: {
      height: 280,
      type: "area",
    },
    dataLabels: {
      enabled: false,
    },
    series: [
      {
        name: "Series 1",
        data: [45, 52, 38, 45, 19, 23, 2],
      },
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
      ],
    },
  };

  return (
    <div className="row">
      <div className="col-xl-3 col-xxl-4">
        <div className="row">
          <div className="col-xl-12 col-md-6">
            <div className="card">
              <div className="card-header border-0 pb-0">
                <h4 className="fs-20">Service Users</h4>
                <div className="dropdown bootstrap-select form-control style-1 default-select">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      id="dropdown-basic"
                      className="default-select style-1 btn filter-option"
                    >
                      {refreshToggle ? refreshToggle : "This Week"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                      className="dropdown-menu inner show"
                      style={{ borderRadius: "10px" }}
                    >
                      <Dropdown.Item
                        className="dropdown-item"
                        href="#"
                        onClick={() => setRefreshToggle("This Week")}
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          textAlign: "center",
                          margin: "0 auto",
                          paddingTop: "15px",
                        }}
                      >
                        This Week
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item"
                        href="#"
                        onClick={() => setRefreshToggle("Next Week")}
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          textAlign: "center",
                          margin: "0 auto",
                        }}
                      >
                        Next Week
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item"
                        href="#"
                        onClick={() => setRefreshToggle("This Month")}
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          textAlign: "center",
                          margin: "0 auto",
                        }}
                      >
                        This Month
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item"
                        href="#"
                        onClick={() => setRefreshToggle("Next Month")}
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          textAlign: "center",
                          margin: "0 auto",
                          paddingBottom: "15px",
                        }}
                      >
                        Next Month
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="card-body">
                <div id="donutChart">
                  <OrderSummaryChart />
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <div className="pr-2">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#214BB8" />
                    </svg>
                    <h4 className="fs-18 text-black mb-1 font-w600">512</h4>
                    <span className="fs-14">Client Add user</span>
                  </div>
                  <div className="pr-2">
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#FE634E" />
                    </svg>
                    <h4 className="fs-18 text-black mb-1 font-w600">45,612</h4>
                    <span className="fs-14">Active Users</span>
                  </div>
                  <div className>
                    <svg
                      width={20}
                      height={8}
                      viewBox="0 0 20 8"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width={20} height={8} rx={4} fill="#45ADDA" />
                    </svg>
                    <h4 className="fs-18 text-black mb-1 font-w600">275</h4>
                    <span className="fs-14">User Event</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-12 col-md-6">
            <div className="card">
              <div className="card-header border-0 pb-0">
                <h4 className="fs-20">Latest Users</h4>
                <div className="dropdown bootstrap-select form-control style-1 default-select">
                  <Dropdown>
                    <Dropdown.Toggle
                      variant=""
                      id="dropdown-basic"
                      className="default-select style-1 btn filter-option"
                      style={{ fontSize: "12px", fontWeight: "400" }}
                    >
                      {refreshToggle ? refreshToggle : "This Week"}
                    </Dropdown.Toggle>

                    <Dropdown.Menu
                      className="dropdown-menu inner show"
                      style={{ borderRadius: "10px" }}
                    >
                      <Dropdown.Item
                        className="dropdown-item"
                        href="#"
                        onClick={() => setRefreshToggle("This Week")}
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          textAlign: "center",
                          margin: "0 auto",
                          paddingTop: "15px",
                        }}
                      >
                        This Week
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item"
                        href="#"
                        onClick={() => setRefreshToggle("Next Week")}
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          textAlign: "center",
                          margin: "0 auto",
                        }}
                      >
                        Next Week
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item"
                        href="#"
                        onClick={() => setRefreshToggle("This Month")}
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          textAlign: "center",
                          margin: "0 auto",
                        }}
                      >
                        This Month
                      </Dropdown.Item>
                      <Dropdown.Item
                        className="dropdown-item"
                        href="#"
                        onClick={() => setRefreshToggle("Next Month")}
                        style={{
                          fontSize: "12px",
                          fontWeight: "400",
                          textAlign: "center",
                          margin: "0 auto",
                          paddingBottom: "15px",
                        }}
                      >
                        Next Month
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <PerfectScrollbar
                className="card-body pb-0 dz-scroll height630 loadmore-content"
                id="latestSalesContent"
              >
                <div className="pb-3 mb-3 border-bottom">
                  <p className="font-w600">
                    <Link to="/event" className="text-black">
                      The Story’s of Danau Toba (Drama Theater)
                    </Link>
                  </p>
                  <div className="d-flex align-items-end">
                    <img
                      src={image01}
                      alt="image01"
                      width={42}
                      className="rounded-circle mr-2"
                    />
                    <div className="mr-auto">
                      <h4 className="fs-14 mb-0">
                        <Link to="./app-profile" className="text-black">
                          Steffany Humble
                        </Link>
                      </h4>
                      <span className="fs-12">2m ago</span>
                    </div>
                    <span className="badge badge-sm light badge-primary">
                      4 Ticket
                    </span>
                  </div>
                </div>
                <div className="pb-3 mb-3 border-bottom">
                  <p className="font-w600">
                    <Link to="/event" className="text-black">
                      Envato Author SF Meetup
                    </Link>
                  </p>
                  <div className="d-flex align-items-end">
                    <img
                      src={image02}
                      alt="image02"
                      width={42}
                      className="rounded-circle mr-2"
                    />
                    <div className="mr-auto">
                      <h4 className="fs-14 mb-0">
                        <Link to={"./app-profile"} className="text-black">
                          Jacob Swing Swing
                        </Link>
                      </h4>
                      <span className="fs-12">6h ago</span>
                    </div>
                    <span className="badge badge-sm light badge-primary">
                      2 Ticket
                    </span>
                  </div>
                </div>
                <div className="pb-3 mb-3 border-bottom">
                  <p className="font-w600">
                    <Link to="/event" className="text-black">
                      Envato Atuhor Community Fun Hiking at Sibayak Mountaint
                    </Link>
                  </p>
                  <div className="d-flex align-items-end">
                    <img
                      src={image03}
                      alt="image03"
                      width={42}
                      className="rounded-circle mr-2"
                    />
                    <div className="mr-auto">
                      <h4 className="fs-14 mb-0">
                        <Link to={"./app-profile"} className="text-black">
                          Robert Carloz
                        </Link>
                      </h4>
                      <span className="fs-12">10h ago</span>
                    </div>
                    <span className="badge badge-sm light badge-primary">
                      1 Ticket
                    </span>
                  </div>
                </div>
                <div className="pb-3 mb-3 border-bottom">
                  <p className="font-w600">
                    <Link to="/event" className="text-black">
                      Indonesia Envato Authors National Meetup
                    </Link>
                  </p>
                  <div className="d-flex align-items-end">
                    <img
                      src={image04}
                      alt="image04"
                      width={42}
                      className="rounded-circle mr-2"
                    />
                    <div className="mr-auto">
                      <h4 className="fs-14 mb-0">
                        <Link to={"./app-profile"} className="text-black">
                          Kevin Stefanus
                        </Link>
                      </h4>
                      <span className="fs-12">2m ago</span>
                    </div>
                    <span className="badge badge-sm light badge-primary">
                      1 Ticket
                    </span>
                  </div>
                </div>
                <div className="pb-3 mb-3 border-bottom">
                  <p className="font-w600">
                    <Link to="/event" className="text-black">
                      Envato Author SF Meetup
                    </Link>
                  </p>
                  <div className="d-flex align-items-end">
                    <img
                      src={image02}
                      alt="image02"
                      width={42}
                      className="rounded-circle mr-2"
                    />
                    <div className="mr-auto">
                      <h4 className="fs-14 mb-0">
                        <Link to={"./app-profile"} className="text-black">
                          Jacob Swing Swing
                        </Link>
                      </h4>
                      <span className="fs-12">6h ago</span>
                    </div>
                    <span className="badge badge-sm light badge-primary">
                      2 Ticket
                    </span>
                  </div>
                </div>
              </PerfectScrollbar>
              <div className="card-footer text-center border-0">
                <Link
                  className="btn btn-primary btn-sm dz-load-more"
                  id="latestSales"
                  to=""
                  rel="ajax/latest-sales.html"
                >
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-9 col-xxl-8">
        <div className="row">
          <div className="col-xl-12">
            <Tab.Container defaultActiveKey="monthly">
              <div className="card" id="sales-revenue">
                <div className="card-header pb-0 d-block d-sm-flex border-0">
                  <h3 className="fs-20 text-black mb-0">
                    Service Users Progress Graph
                  </h3>
                  <div className="card-action revenue-tabs mt-3 mt-sm-0">
                    <Nav as="ul" className="nav nav-tabs" role="tablist">
                      <Nav.Item className="nav-item">
                        <Nav.Link
                          className="nav-link"
                          data-toggle="tab"
                          to="#monthly"
                          role="tabpanel"
                          eventKey="monthly"
                        >
                          Monthly
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="nav-item">
                        <Nav.Link
                          className="nav-link"
                          data-toggle="tab"
                          to="#weekly1"
                          role="tabpanel"
                          eventKey="weekly"
                        >
                          Weekly
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="nav-item">
                        <Nav.Link
                          className="nav-link"
                          data-toggle="tab"
                          to="#today1"
                          role="tabpanel"
                          eventKey="today"
                        >
                          Today
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                  </div>
                </div>
                <Tab.Content>
                  <div className="card-body">
                    <div className="tab-content">
                      {/* <Tab.Pane eventKey="monthly">
                        <div className="tab-pane fade show" role="tabpanel">
                          <SalesRevenue />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="weekly">
                        <div className="tab-pane fade show" role="tabpanel">
                          <SalesRevenue2 />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="today">
                        <div className="tab-pane fade show" role="tabpanel">
                          <SalesRevenue3 />
                        </div>
                      </Tab.Pane> */}
                      <Chart
                        options={options}
                        series={options?.series}
                        type="area"
                        // width={500}
                      />
                    </div>
                  </div>
                </Tab.Content>
              </div>
            </Tab.Container>
          </div>
          <div className="col-xl-12">
            {/* <div className="card">
              <div className="card-header border-0 pb-sm-0 pb-5">
                <h4 className="fs-20">Recent Cliet Event List</h4>
                <div className="dropdown custom-dropdown mb-0">
                  <Dropdown className="dropdown">
                    <Dropdown.Toggle
                      as="button"
                      variant=""
                      className="btn rounded p-0 i-false"
                    >
                      <svg
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 12.9999C12.5523 12.9999 13 12.5522 13 11.9999C13 11.4477 12.5523 10.9999 12 10.9999C11.4477 10.9999 11 11.4477 11 11.9999C11 12.5522 11.4477 12.9999 12 12.9999Z"
                          stroke="#7E7E7E"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 5.99994C12.5523 5.99994 13 5.55222 13 4.99994C13 4.44765 12.5523 3.99994 12 3.99994C11.4477 3.99994 11 4.44765 11 4.99994C11 5.55222 11.4477 5.99994 12 5.99994Z"
                          stroke="#7E7E7E"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 19.9999C12.5523 19.9999 13 19.5522 13 18.9999C13 18.4477 12.5523 17.9999 12 17.9999C11.4477 17.9999 11 18.4477 11 18.9999C11 19.5522 11.4477 19.9999 12 19.9999Z"
                          stroke="#7E7E7E"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                      <Dropdown.Item className="dropdown-item" to="/events">
                        Details
                      </Dropdown.Item>
                      <Dropdown.Item className="dropdown-item" to="/events">
                        Cancel
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
              </div>
              <div className="card-body">
                <EventSlide />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

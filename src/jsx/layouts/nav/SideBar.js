/// Menu
import MetisMenu from "metismenujs";
import React, { Component } from "react";
import { Button, Modal } from "react-bootstrap";
/// Scroll
import PerfectScrollbar from "react-perfect-scrollbar";
/// Link
import { Link } from "react-router-dom";
import "./Hide.css";
//import icon1 from "../../../images/icon1.png";

class MM extends Component {
  componentDidMount() {
    this.$el = this.el;
    this.mm = new MetisMenu(this.$el);
  }
  componentWillUnmount() {}
  render() {
    return (
      <div className="mm-wrapper">
        <ul className="metismenu" ref={(el) => (this.el = el)}>
          {this.props.children}
        </ul>
      </div>
    );
  }
}

class SideBar extends Component {
  state = {
    newEvent: false,
    loveEmoji: false,
    type: "",
  };

  /// Open menu
  componentDidMount() {
    // sidebar open/close
    var btn = document.querySelector(".nav-control");
    var aaa = document.querySelector("#main-wrapper");
    function toggleFunc() {
      return aaa.classList.toggle("menu-toggle");
    }
    btn.addEventListener("click", toggleFunc);

    const userDetails = localStorage.getItem("userDetails");
    if (userDetails) {
      this.setState({ type: JSON.parse(userDetails).type }, () => {
        console.log(this.state.type);
      });
    }
  }
  render() {
    /// Path
    let path = window.location.pathname;
    path = path.split("/");
    path = path[path.length - 1];

    /// Active menu
    let dashBoard = [
        "",
        "event",
        "customers",
        "analytics",
        "event-detail",
        "reviews",
        "task",
      ],
      app = [
        "app-profile",
        "app-calender",
        "email-compose",
        "email-inbox",
        "email-read",
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
        "post-details",
        "ecom-product-detail",
      ],
      email = ["email-compose", "email-inbox", "email-read"],
      shop = [
        "ecom-product-grid",
        "ecom-product-list",
        "ecom-product-list",
        "ecom-product-order",
        "ecom-checkout",
        "ecom-invoice",
        "ecom-customers",
        "ecom-product-detail",
      ],
      charts = [
        "chart-rechart",
        "chart-flot",
        "chart-chartjs",
        "chart-chartist",
        "chart-sparkline",
        "chart-apexchart",
      ],
      bootstrap = [
        "ui-accordion",
        "ui-badge",
        "ui-alert",
        "ui-button",
        "ui-modal",
        "ui-button-group",
        "ui-list-group",
        "ui-media-object",
        "ui-card",
        "ui-carousel",
        "ui-dropdown",
        "ui-popover",
        "ui-progressbar",
        "ui-tab",
        "ui-typography",
        "ui-pagination",
        "ui-grid",
      ],
      plugins = [
        "uc-select2",
        "uc-nestable",
        "uc-sweetalert",
        "uc-toastr",
        "uc-noui-slider",
        "map-jqvmap",
        //"post",
      ],
      redux = ["todo", "form-redux", "form-redux-wizard"],
      widget = ["widget-basic"],
      forms = [
        "form-element",
        "form-wizard",
        "form-editor-summernote",
        "form-pickers",
        "form-validation-jquery",
      ],
      Client = [
        "clientone",
        "clienttwo",
        "clientthree",
        "clientfour",
        "clientsubmit",
      ],
      Schedule = [
        "ScheduleOne",
        "clienttwo",
        "clientthree",
        "clientfour",
        "clientsubmit",
      ],
      table = [
        "table-bootstrap-basic",
        "table-datatable-basic",
        "table-sorting",
        "table-filtering",
      ],
      pages = [
        "page-register",
        "page-login",
        "page-lock-screen",
        "page-error-400",
        "page-error-403",
        "page-error-404",
        "page-error-500",
        "page-error-503",
      ],
      error = [
        "page-error-400",
        "page-error-403",
        "page-error-404",
        "page-error-500",
        "page-error-503",
      ];

    return (
      <div className="deznav">
        <PerfectScrollbar className="deznav-scroll">
          <MM className="metismenu" id="menu">
            {this.state.type === "Client" ? (
              <>
                <MM className="metismenu" id="menu">
                  <li
                    className={`${dashBoard.includes(path) ? "mm-active" : ""}`}
                  >
                    <Link className="has-arrow ai-icon" to="#">
                      <i class="icon-dashboard"></i>
                      <span className="nav-text">Dashboard</span>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          className={`${path === "" ? "mm-active" : ""}`}
                          to="/"
                          onClick={() => this.props.onClick3()}
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "event" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/event"
                        >
                          Event
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "event-detail" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/event-detail"
                        >
                          Event Detail
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "customers" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/customers"
                        >
                          Customers
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "analytics" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/analytics"
                        >
                          Analytics
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "reviews" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/reviews"
                        >
                          Reviews
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "task" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/task"
                        >
                          Task
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`${dashBoard.includes(path) ? "mm-active" : ""}`}
                  >
                    <Link className="has-arrow ai-icon" to="#">
                      <i class="icon-code-fork"></i>
                      <span className="nav-text">Branches</span>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          className={`${path === "event" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/event"
                        >
                          Brach Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "event-detail" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Branch Area
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "customers" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Branch Customers
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "analytics" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Branch Analytics
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "reviews" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Branch Reviews
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "task" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Branch Task
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className={`${table.includes(path) ? "mm-active" : ""}`}>
                    <Link className="has-arrow ai-icon" to="#">
                      <i class="fa fa-users" aria-hidden="true"></i>
                      <span className="nav-text">Service Users</span>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          className={`${
                            path === "ClientOne" ? "mm-active" : ""
                          }`}
                          to="/ClientOne"
                        >
                          Add Service Users
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "todo" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/todo"
                        >
                          Service Users list
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`${dashBoard.includes(path) ? "mm-active" : ""}`}
                  >
                    <Link className="has-arrow ai-icon" to="#">
                      <i class="fa fa-medkit" aria-hidden="true"></i>
                      <span className="nav-text">Care Workers</span>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          className={`${path === "event" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Care Workers Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "event-detail" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Care Workers Area
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "customers" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/customers"
                        >
                          Care Workers Customers
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "analytics" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Care Workers Analytics
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "reviews" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Care Workers Reviews
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "task" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Care Workers Task
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`${dashBoard.includes(path) ? "mm-active" : ""}`}
                  >
                    <Link className="has-arrow ai-icon" to="#">
                      <i class="fa fa-briefcase" aria-hidden="true"></i>
                      <span className="nav-text">Office Employess</span>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          className={`${path === "event" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Office Employess Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "event-detail" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Office Employess Area
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "customers" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/customers"
                        >
                          Office Employess Customers
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "analytics" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Office Employess Analytics
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "reviews" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Office Employess Reviews
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "task" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Office Employess Task
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`${dashBoard.includes(path) ? "mm-active" : ""}`}
                  >
                    <Link className="has-arrow ai-icon" to="#">
                      <i class="icon-calendar"></i>
                      <span className="nav-text">Schedule</span>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          className={`${path === "event" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/scheduleone"
                        >
                          Schedule Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "event-detail" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Schedule Area
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "customers" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/customers"
                        >
                          Schedule Customers
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "analytics" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Schedule Analytics
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "reviews" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Schedule Reviews
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "task" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Schedule Task
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`${dashBoard.includes(path) ? "mm-active" : ""}`}
                  >
                    <Link className="has-arrow ai-icon" to="#">
                      <i class="bi bi-gear"></i>
                      <span className="nav-text">Settings</span>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          className={`${path === "event" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Settings Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "event-detail" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Settings Area
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "customers" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/customers"
                        >
                          Settings part
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "analytics" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Care Workers Analytics
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "reviews" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Settings Reviews
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "task" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Settings Task
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className={`${charts.includes(path) ? "mm-active" : ""}`}>
                    <Link className="has-arrow ai-icon" to="#">
                      <i className="flaticon-381-controls-3"></i>
                      <span className="nav-text">Reports</span>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          className={`${
                            path === "chart-rechart" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/chart-rechart"
                        >
                          RechartJs
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "chart-chartjs" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/chart-chartjs"
                        >
                          Chartjs
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "chart-chartist" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/chart-chartist"
                        >
                          Chartist
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "chart-sparkline" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/chart-sparkline"
                        >
                          Sparkline
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "chart-apexchart" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/chart-apexchart"
                        >
                          Apexchart
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`${dashBoard.includes(path) ? "mm-active" : ""}`}
                  >
                    <Link className="has-arrow ai-icon" to="#">
                      <i className="flaticon-381-networking"></i>
                      <span className="nav-text">My Requests</span>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          className={`${path === "event" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          My Request Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "event-detail" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          My Request Area
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "customers" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          My Request Customers
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "analytics" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          My Request Analytics
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "reviews" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          My Request Reviews
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "task" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          My Requests Task
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`${dashBoard.includes(path) ? "mm-active" : ""}`}
                  >
                    <Link className="has-arrow ai-icon" to="#">
                      <i class="fa fa-credit-card" aria-hidden="true"></i>
                      <span className="nav-text">Accounting</span>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          className={`${path === "event" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Accounting Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "event-detail" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Accounting Area
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "customers" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Accounting Customers
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "analytics" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Accounting Analytics
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "reviews" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Accounting Reviews
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "task" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Accounting Task
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li
                    className={`${dashBoard.includes(path) ? "mm-active" : ""}`}
                  >
                    <Link className="has-arrow ai-icon" to="#">
                      <i class="fa fa-file-text-o" aria-hidden="true"></i>
                      <span className="nav-text">Documents </span>
                    </Link>
                    <ul>
                      <li>
                        <Link
                          className={`${path === "event" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Documents Details
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "event-detail" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Documents Area
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "customers" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Documents Customers
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${
                            path === "analytics" ? "mm-active" : ""
                          }`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Documents Analytics
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "reviews" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Documents Reviews
                        </Link>
                      </li>
                      <li>
                        <Link
                          className={`${path === "task" ? "mm-active" : ""}`}
                          onClick={() => this.props.onClick()}
                          to="/"
                        >
                          Documents Task
                        </Link>
                      </li>
                    </ul>
                  </li>
                </MM>
              </>
            ) : (
              <>
                <li
                  className={`${dashBoard.includes(path) ? "mm-active" : ""}`}
                >
                  <Link className="has-arrow ai-icon" to="#">
                    <i class="icon-dashboard"></i>
                    <span className="nav-text">Dashboard</span>
                  </Link>
                  <ul>
                    <li>
                      <Link
                        className={`${path === "" ? "mm-active" : ""}`}
                        to="/"
                        onClick={() => this.props.onClick3()}
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${path === "event" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/event"
                      >
                        Event
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "event-detail" ? "mm-active" : ""
                        }`}
                        onClick={() => this.props.onClick()}
                        to="/event-detail"
                      >
                        Event Detail
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${path === "customers" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/customers"
                      >
                        Customers
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${path === "analytics" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/analytics"
                      >
                        Analytics
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${path === "reviews" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/reviews"
                      >
                        Reviews
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${path === "task" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/task"
                      >
                        Task
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={`${table.includes(path) ? "mm-active" : ""}`}>
                  <Link className="has-arrow ai-icon" to="#">
                    <i className="flaticon-381-network"></i>
                    <span className="nav-text">Care Providers</span>
                  </Link>
                  <ul>
                    <li>
                      <Link
                        className={`${path === "todo" ? "mm-active" : ""}`}
                        to="/todo"
                      >
                        Care providers details
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "form-wizard" ? "mm-active" : ""
                        }`}
                        onClick={() => this.props.onClick()}
                        to="/form-wizard"
                      >
                        Add Care Provider
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={`${charts.includes(path) ? "mm-active" : ""}`}>
                  <Link className="has-arrow ai-icon" to="#">
                    <i className="flaticon-381-controls-3"></i>
                    <span className="nav-text">Reports</span>
                  </Link>
                  <ul>
                    <li>
                      <Link
                        className={`${
                          path === "chart-rechart" ? "mm-active" : ""
                        }`}
                        onClick={() => this.props.onClick()}
                        to="/chart-rechart"
                      >
                        RechartJs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "chart-chartjs" ? "mm-active" : ""
                        }`}
                        onClick={() => this.props.onClick()}
                        to="/chart-chartjs"
                      >
                        Chartjs
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "chart-chartist" ? "mm-active" : ""
                        }`}
                        onClick={() => this.props.onClick()}
                        to="/chart-chartist"
                      >
                        Chartist
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "chart-sparkline" ? "mm-active" : ""
                        }`}
                        onClick={() => this.props.onClick()}
                        to="/chart-sparkline"
                      >
                        Sparkline
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "chart-apexchart" ? "mm-active" : ""
                        }`}
                        onClick={() => this.props.onClick()}
                        to="/chart-apexchart"
                      >
                        Apexchart
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`${dashBoard.includes(path) ? "mm-active" : ""}`}
                >
                  <Link className="has-arrow ai-icon" to="#">
                    <i className="flaticon-381-networking"></i>
                    <span className="nav-text">Subscriptions </span>
                  </Link>
                  <ul>
                    <li>
                      <Link
                        className={`${path === "event" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/"
                      >
                        Subscriptions Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "event-detail" ? "mm-active" : ""
                        }`}
                        onClick={() => this.props.onClick()}
                        to="/"
                      >
                        Subscriptions Area
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${path === "customers" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/"
                      >
                        Subscriptions Customers
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${path === "analytics" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/"
                      >
                        Subscriptions Analytics
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${path === "reviews" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/"
                      >
                        Subscriptions Reviews
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${path === "task" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/"
                      >
                        Subscriptions Task
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`${dashBoard.includes(path) ? "mm-active" : ""}`}
                >
                  <Link className="has-arrow ai-icon" to="#">
                    <i className="flaticon-381-networking"></i>
                    <span className="nav-text">My Requests</span>
                  </Link>
                  <ul>
                    <li>
                      <Link
                        className={`${path === "event" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/"
                      >
                        My Request Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "event-detail" ? "mm-active" : ""
                        }`}
                        onClick={() => this.props.onClick()}
                        to="/"
                      >
                        My Request Area
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${path === "customers" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/"
                      >
                        My Request Customers
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${path === "analytics" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/"
                      >
                        My Request Analytics
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${path === "reviews" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/"
                      >
                        My Request Reviews
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${path === "task" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/"
                      >
                        My Requests Task
                      </Link>
                    </li>
                  </ul>
                </li>
                <li
                  className={`${dashBoard.includes(path) ? "mm-active" : ""}`}
                >
                  <Link className="has-arrow ai-icon" to="#">
                    <i class="bi bi-gear"></i>
                    <span className="nav-text">Settings</span>
                  </Link>
                  <ul>
                    <li>
                      <Link
                        className={`${path === "event" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/"
                      >
                        Settings Details
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${
                          path === "event-detail" ? "mm-active" : ""
                        }`}
                        onClick={() => this.props.onClick()}
                        to="/"
                      >
                        Settings Area
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${path === "customers" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/customers"
                      >
                        Settings part
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${path === "analytics" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/"
                      >
                        Care Workers Analytics
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${path === "reviews" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/"
                      >
                        Settings Reviews
                      </Link>
                    </li>
                    <li>
                      <Link
                        className={`${path === "task" ? "mm-active" : ""}`}
                        onClick={() => this.props.onClick()}
                        to="/"
                      >
                        Settings Task
                      </Link>
                    </li>
                  </ul>
                </li>
              </>
            )}
          </MM>
        </PerfectScrollbar>
      </div>
    );
  }
}

export default SideBar;

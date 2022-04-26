import React, { useState, useRef, useEffect } from "react";

import "./App.css";
import SideBar from "./components/SideBar/sidebar";
import NavBar from "./components/NavBar/navbar";
import Shop from "./components/Shop/shop";
import DashboardHeader from "./components/DashboardHeader/dashboardHeader";
import SideBarSubHeaders from "./components/SideBarSubHeaders/sideBarSubHeaders";
import SideBarLi from "./components/SideBarLi/sideBarLi";
import Notification from "./components/Notification/notification";

function App() {
  const [defaultMode, setMode] = useState(true);
  const [open, setOpen] = useState(false);
  const [sidebarStyle, setsidebarStyle] = useState("sidebar1");
  const [overlayStyle, setoverlayStyle] = useState("overlay1");
  const [sidebarActive, setSidebarActive] = useState(true);

  const changeStyle = () => {
    console.log("you just clicked");

    setSidebarActive(false);
    setsidebarStyle("sidebar2");
    setoverlayStyle("overlay2");

    // shopRightSide.addEventListener("click", resetStyle);
  };
  const resetStyle = () => {
    console.log("you just clicked");

    setSidebarActive(true);
    setsidebarStyle("sidebar1");
    setoverlayStyle("overlay1");
  };

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > scrollTop);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  const handleScroll = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className={`${defaultMode ? "light" : "dark"}`}>
      <div id="ecommerceContent">
        {/* <SideBar /> */}
        <div id={overlayStyle}>
          <div className="" id={sidebarStyle}>
            <div id="sidebarHeader">
              <img id="logo" src={"./logo.png"} />
              <h2 className="sidebarH">Vuexy</h2>
              {!sidebarActive && (
                <button onClick={resetStyle} id="closeOverlayButton">
                  <i className="fa-solid fa-xmark"></i>
                </button>
              )}
            </div>
            <div className="content">
              <ul>
                <DashboardHeader
                  title="Dashbords"
                  icon="fa-solid fa-house sidebarI"
                  text="2"
                  color="#ff9f43"
                  bgcolor="rgba(255, 159, 67, 0.12)"
                >
                  <li>eCommerce</li>
                  <li>Analytics</li>
                </DashboardHeader>

                <SideBarSubHeaders title="APPS &#38; Pages" />
                <SideBarLi title="Email" icon="fa-regular fa-envelope" />
                <SideBarLi title="Chat" icon="fa-regular fa-message" />
                <SideBarLi title="Todo" icon="fa-regular fa-square-check" />
                <SideBarLi title="Calendar" icon="fa-regular fa-calendar" />
                <SideBarLi title="Invoice" icon="fa-regular fa-file-lines">
                  <li>List</li>
                  <li>Preview</li>
                  <li>Edit</li>
                  <li>Add</li>
                </SideBarLi>

                <SideBarLi title="eCommerce" icon="fa-solid fa-cart-shopping">
                  <li>Shop</li>
                  <li>Details</li>
                  <li>Wishlist</li>
                  <li>Checkout</li>
                </SideBarLi>

                <SideBarLi title="User" icon="fa-regular fa-user">
                  <li>List</li>
                  <li>View</li>
                  <li>Edit</li>
                </SideBarLi>

                <SideBarLi title="Pages" icon="fa-regular fa-file">
                  <li>
                    <SideBarLi title="Authentication">
                      <li>Login v1</li>
                      <li>Login v2</li>
                      <li>Register v1</li>
                      <li>Register v2</li>
                      <li>Forgot Password v1</li>
                      <li>Forgt Password v2</li>
                      <li>Reset Password v1</li>
                      <li>Reset Password v2</li>
                    </SideBarLi>
                  </li>
                  <li>Account Settings</li>
                  <li>Profile</li>
                  <li>FAQ</li>
                  <li>Knowledge Base</li>
                  <li>Pricing</li>
                  <li>
                    <SideBarLi title="Blog">
                      <li>List</li>
                      <li>Detail</li>
                      <li>Edit</li>
                    </SideBarLi>
                  </li>
                  <li>
                    <SideBarLi title="Mail Templates">
                      <li>Welcome</li>
                      <li>Reset Password</li>
                      <li>Verify Email</li>
                      <li>Deactive Account</li>
                      <li>Invoice</li>
                      <li>Promotionzml</li>
                    </SideBarLi>
                  </li>
                  <li>
                    <SideBarLi title="Miscellaneous">
                      <li>Coming soon</li>
                      <li>Not Authorized</li>
                      <li>Maintenance</li>
                      <li>Error</li>
                    </SideBarLi>
                  </li>
                </SideBarLi>

                <SideBarSubHeaders title="User Interface" />

                {/* ////////// */}
                <SideBarLi title="Typography" icon="fa-solid fa-text-height" />
                <SideBarLi title="Colors" icon="fa-solid fa-droplet" />
                <SideBarLi title="Feather" icon="fa-regular fa-eye" />

                <DashboardHeader
                  title="Cards"
                  icon="fa-regular fa-credit-card"
                  text="new"
                  color="#28c76f"
                  bgcolor="rgba(40,199,111,.12)"
                >
                  <li>Basic</li>
                  <li>Advanced</li>
                  <li>Statistics</li>
                  <li>Analytics</li>
                  <li>Card Actions</li>
                </DashboardHeader>

                <SideBarLi title="Component" icon="fa-solid fa-box-archive">
                  <li>Alert</li>
                  <li>Aspect</li>
                  <li>Avatar</li>
                  <li>Badge</li>
                  <li>Breadcrumb</li>
                  <li>Button</li>
                  <li>Button Group</li>
                  <li>Button Toolbar</li>
                  <li>Calendar</li>
                  <li>Caroesul</li>
                  <li>Collapse</li>
                  <li>Dropdown</li>
                </SideBarLi>

                <SideBarLi title="Extensions" icon="fa-solid fa-circle-plus">
                  <li>Sweet Alert</li>
                  <li>Toastification</li>
                  <li>Slider</li>
                  <li>Drag &amp; Drop</li>
                  <li>Tour</li>
                  <li>Clipboard</li>
                  <li>Context Menu</li>
                  <li>Swiper</li>
                  <li>L18n</li>
                </SideBarLi>

                <SideBarLi title="Layout" icon="fa-solid fa-table-layout">
                  <li>Collapsed Menu</li>
                  <li>Layout Boxed</li>
                  <li>Without Menu</li>
                  <li>Layout Empty</li>
                  <li>Layout Blank</li>
                </SideBarLi>

                <SideBarSubHeaders title="Forms &amp; Tables" />

                <SideBarLi title="Forms Elements" icon="fa-regular fa-square">
                  <li>Input</li>
                  <li>Input Group</li>
                  <li>Input Mask</li>
                  <li>Textarea</li>
                  <li>Auto Suggest</li>
                  <li>Checkbox</li>
                  <li>Radio</li>
                  <li>Switch</li>
                  <li>Select</li>
                  <li>Vue Select</li>
                  <li>Spinbutton</li>
                  <li>File Input</li>
                  <li>Quill Editor</li>
                  <li>Form Datapicker</li>
                  <li>Form Timepicker</li>
                  <li>Data Timepicker</li>
                  <li>Form Rating</li>
                  <li>Form Tag</li>
                </SideBarLi>

                <SideBarLi title="Form Layout" icon="fa-regular fa-square" />
                <SideBarLi title="Form Wizard" icon="fa-solid fa-cube" />
                <SideBarLi
                  title="Form validation"
                  icon="fa-regular fa-circle-check"
                />
                <SideBarLi title="Form repeater" icon="fa-regular fa-square" />
                <SideBarLi title="BS Table" icon="fa-solid fa-table-list" />
                <SideBarLi title="Good Table" icon="fa-solid fa-border-all" />

                <SideBarSubHeaders title="Charts &#38; Maps" />

                <DashboardHeader
                  title="Charts"
                  icon="fa-regular fa-credit-card"
                  text="3"
                  color="#ea5455"
                  bgcolor="rgba(234,84,85,.12)"
                >
                  <li>Apex Chart</li>
                  <li>Chartjs</li>
                  <li>Echart</li>
                </DashboardHeader>

                <SideBarLi title="Leaflet" icon="fa-regular fa-map" />

                <SideBarSubHeaders title="others" />
                <SideBarLi title="Access Control" icon="fa-solid fa-shield" />

                <SideBarLi title="Menu Levels" icon="fa-solid fa-bars">
                  <li>Menu Level 2.1</li>
                  <li>
                    <SideBarLi title="Menu Level 2.2">
                      <li>Menu Level 3.1</li>
                      <li>Menu Level 3.2</li>
                    </SideBarLi>
                  </li>
                </SideBarLi>
                <div className="disabledSlidebarLi">
                  <SideBarLi
                    title="Disabled Menu"
                    icon="fa-solid fa-eye-slash"
                  />
                </div>

                <SideBarLi title="Support" icon="fa-solid fa-life-ring" />
                <SideBarLi
                  title="Documntation"
                  icon="fa-regular fa-file-lines"
                />
              </ul>
            </div>
          </div>
          {!sidebarActive && (
            <div
              onClick={() => {
                if (!sidebarActive) {
                  resetStyle();
                }
              }}
              id="fixedoverlay"
            ></div>
          )}
        </div>

        <div id="rightSide">
          {/* <NavBar />
          <Shop /> */}
          {/* ///////////////navbar */}
          <div id="navbar">
            <div style={{ display: "flex", alignItems: "center" }}>
              <button id="burgerbutton" onClick={changeStyle}>
                <span className="navItem">
                  <i className="fa-solid fa-bars"></i>
                </span>
              </button>

              <div id="navItems">
                <span className="navItem">
                  <i className="fa-regular fa-calendar"></i>
                </span>
                <span className="navItem">
                  <i className="fa-regular fa-message"></i>
                </span>
                <span className="navItem">
                  <i className="fa-regular fa-envelope"></i>
                </span>
                <span className="navItem">
                  <i className="fa-regular fa-square-check"></i>
                </span>
                <span className="navItem">
                  <i
                    style={{ color: "#ff9f43" }}
                    className="fa-regular fa-star"
                  ></i>
                </span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <span>
                <img id="falgImg" src={"./flag.png"} />
                <span id="languageSpan">English</span>
              </span>
              <span
                id="customCursor"
                className="navRIcon"
                onClick={() => setMode(!defaultMode)}
              >
                {defaultMode ? (
                  <i className="fa-solid fa-moon"></i>
                ) : (
                  <i className="fa-solid fa-sun"></i>
                )}
              </span>
              <span className="navRIcon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </span>

              <button id="customCursor" href="#" className="notification">
                <span id="customCursor">
                  <i className="fa-solid fa-cart-shopping"></i>
                </span>
                <span id="shoppingItems" className="badge">
                  5
                </span>
              </button>

              <div id="notificationsContainer">
                <button
                  href="#"
                  className="notification"
                  onClick={() => setOpen(!open)}
                >
                  <span>
                    <i className="fa-regular fa-bell"></i>
                  </span>
                  <span id="notificationItems" className="badge">
                    6
                  </span>
                </button>
                {open && (
                  <div id="notifications">
                    <li>
                      <div id="notificationsHeader">
                        <h4>Notifications</h4>
                        <span id="notificationsHeaderS"> 6 New</span>
                      </div>
                    </li>
                    <li>
                      <div id="notificationContent">
                        <Notification
                          img="./user1.png"
                          title="Congratulations Sam 🎉"
                          text="Won the monthly best seller badge"
                        />
                        <Notification
                          img="./user2.png"
                          title="New Message Reseved"
                          text="You have 10 unread messages"
                        />
                        <Notification
                          imgContent="MD"
                          color="#ea5455"
                          bgColor="rgba(234,84,85,.12)"
                          title="Reserved Order 👋"
                          text="MD Inc. Order Updated"
                        />
                        <div id="systemNotifications">
                          <p>System Notifications</p>
                          {/* <div id="systemBtn">
                            <span id="systemBtnC">.</span>
                          </div> */}
                          <div>
                            <label className="switch">
                              <input type="checkbox" checked />
                              <span className="customSlider round"></span>
                            </label>
                          </div>
                        </div>
                        <Notification
                          imgContent="✕"
                          color="#ea5455"
                          bgColor="rgba(234,84,85,.12)"
                          title="Server down"
                          text="USA Server is down due to hight CPU usage"
                        />
                        <Notification
                          imgContent="✓"
                          color="#86af49"
                          bgColor="rgba(40,199,111,.12)"
                          title=" Sales report generated "
                          text="Last month sales report generated"
                        />
                      </div>
                    </li>
                    <li>
                      <div id="ReadAllNotifications">
                        <button id="ReadAllNotificationsBtn">
                          Read all notifications
                        </button>
                      </div>
                    </li>
                  </div>
                )}
              </div>

              <span id="userInfo">
                <span id="userName">
                  <b>John Doe</b>
                </span>
                <br />
                <span id="userRole">admin</span>
              </span>
              <img id="userImg" src={"./user.png"} />
            </div>
          </div>
          {/* <ul id="notifications">lglglgl</ul> */}

          {/* //////////shop  */}
          <Shop />
        </div>
      </div>

      <button id="stickedOptionsButton">
        <i className="fa-solid fa-gear  fa-spin"></i>
      </button>
      <button id="stickedBuyNowButton">
        <span>Buy Now</span>
      </button>
      {scrolling && (
        <button id="stickedScrollTopButton" onClick={handleScroll}>
          <span>
            <i className="fa-solid fa-arrow-up"></i>
          </span>
        </button>
      )}
    </div>
  );
}

export default App;

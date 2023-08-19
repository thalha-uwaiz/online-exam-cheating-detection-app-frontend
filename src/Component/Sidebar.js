import React from "react";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";

import SideNav, {
  
  NavItem,
  NavIcon,
  NavText
} from "@trendmicro/react-sidenav";

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVisible: true
    };
  }

  render() {
    return (
      <SideNav
        expanded={this.state.isVisible}
        style={{ backgroundColor: "#330A6A" }}
      >
        <SideNav.Toggle
          onClick={() => {
            this.setState({ isVisible: !this.state.isVisible });
          }}
        />

        <SideNav.Nav defaultSelected="home">
          <div>
            <img src="https://res.cloudinary.com/iplus/image/upload/v1678534187/test/logo_gxle55.png" alt='logo' style={{ width: '200px', alignItems: "center" }} />
          </div>

          <NavItem eventKey="Dashboard">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: "1.75em" }} />
            </NavIcon>
            <NavText>Dashboard</NavText>
          </NavItem>

          <NavItem eventKey="My Profile">
            <NavIcon>
            </NavIcon>
            <NavText>
            <a href="/profile" style={{textDecoration:'none'}}>
              My Profile
              </a>
              </NavText>
          </NavItem>

          <NavItem eventKey="Exam Paper">
            <NavIcon>
            </NavIcon>
            <NavText>
              <a href="/studentexam" style={{textDecoration:'none'}}>
                Exam
              </a>
            </NavText>
          </NavItem>

        </SideNav.Nav>
      </SideNav>
    );
  }
}

export default SideNavBar;

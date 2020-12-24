import ActiveLink from "./ActiveLink";
import Navstyles from "../styles/Nav.module.css";
import * as Scroll from "react-scroll";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
import styled from "@emotion/styled";

const StickyNav = styled.nav`
  position: sticky;
  z-index: 5;
  top: 0;
  width: 100%;
  margin: 0;
  padding: 2rem 1rem;
  background-color: #fff;
`;

export function Nav() {
  return (
    <StickyNav>
      <div className={Navstyles.navigation}>
        <ul className={Navstyles.navlistcontainer}>
          <li className={Navstyles.navlistlink}>
            <Link
              to="Home"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="link"
            >
              Home
            </Link>
          </li>
          <li className={Navstyles.navlistlink}>
            <Link
              to="About"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="link"
            >
              About
            </Link>
          </li>
          <li className={Navstyles.navlistlink}>
            <Link
              to="Questions"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="link"
            >
              Faq
            </Link>
          </li>
          <li className={Navstyles.navlistlink}>
            <Link
              to="Help"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="link"
            >
              Help
            </Link>
          </li>
          <li className={Navstyles.navlistlink}>
            <Link
              to="Sponsors"
              spy={true}
              smooth={true}
              duration={500}
              activeClass="active"
              className="link"
            >
              Sponsors
            </Link>
          </li>
        </ul>
      </div>
    </StickyNav>
  );
}

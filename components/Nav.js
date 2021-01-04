import Navstyles from "../styles/Nav.module.css";
import {
  Link,
  animateScroll as scroll,
} from "react-scroll";
import styled from "@emotion/styled";

const StickyNav = styled.nav`
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  margin:0;
  padding: 1.4rem 1rem;
  min-width: 100%;
  background-color:#fff;
`;

export function Nav() {
  return (
    <StickyNav>
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
          <li className={Navstyles.navlistlink}>
            <Link
              to=""
              spy={true}
              smooth={true}
              duration={500}
              activeClass=""
              className="signup"
            >
              Sign Up
            </Link>
          </li>
        </ul>
    </StickyNav>
  );
}

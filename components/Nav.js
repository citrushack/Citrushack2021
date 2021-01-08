import Navstyles from "../styles/Nav.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "@emotion/styled";

import Image from "next/image";

const StickyNav = styled.nav`
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0rem 1rem;
  min-width: 100%;
  background-color: #fff;
`;

export function Nav() {
  return (
    <StickyNav>
      <ul className={Navstyles.navlistcontainer}>
        <div className={Navstyles.logos}>
        <Image
        src="/logo.png"
        width="100"
        height="100"
        alt="Citrushack 2021 Logo"
        />
        <a
          id="mlh-trust-badge"
          className="MLH"
          href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=white"
          target="_blank"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-white.svg"
            alt="Major League Hacking 2021 Hackathon Season"
          />
        </a>
        </div>
        <div className={Navstyles.links}>
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
        </div>
      </ul>
    </StickyNav>
  );
}

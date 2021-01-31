import Navstyles from "../styles/Nav.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "@emotion/styled";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import logo from "../public/logoRevised.png";
import { useRouter } from "next/router";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import {useState,useEffect} from 'react';

const StickyNav = styled.nav(
  (props) => `
  position: ${props.isHome ? "fixed" : "static"};
  z-index: 5;
  top: 0;
  right: 0;
  background-color: rgba(255,255,255,0.95);
  border-bottom: 4px solid #fff;
  width: 100vw;
  padding: 0;
  /* Mobile Styles */
  @media (max-width: 768px){
   background-color:transparent;
   border-bottom: none;
  }
`
);

const NavigationLinks = ({ title, href }) => (
  <>
    <div className={Navstyles.navlistlink}>
      <Link
        to={href}
        spy={true}
        smooth={true}
        duration={800}
        activeClass="active"
        className="link"
      >
        {title}
      </Link>
    </div>
  </>
);

export default function Nav() {
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:768px)");
  const [isHome, setIsHome] = useState(0);

  useEffect(()=>{
    setIsHome(router.pathname=='/');
  },[router.pathname])

  return (
    <>
    {/* Uncomment when approved for MLH */}
      {/* {isHome && (
        <a
          id="mlh-trust-badge"
          className="MLH"
          href="https://mlh.io/seasons/2021/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2021-season&utm_content=black"
          target="_blank"
        >
          <img
            src="https://s3.amazonaws.com/logged-assets/trust-badge/2021/mlh-trust-badge-2021-black.svg"
            alt="Major League Hacking 2021 Hackathon Season"
          />
        </a>
      )} */}
      <StickyNav isMobile isHome={isHome}>
        <div className={Navstyles.navlistcontainer}>
          <div>
            <Link to="/">
              <img
                className={Navstyles.logos}
                src={logo}
                alt="Citrushack 2021 Logo"
              />
            </Link>
          </div>
          <div className={Navstyles.links}>
            {!isMobile && isHome && <NavigationLinks title="Home" href="Home" />}
            {!isMobile && !isHome && <a className="link" href="/">Home</a>}
            {!isMobile && isHome && <NavigationLinks title="About" href="About" />}
            {!isMobile && isHome && <NavigationLinks title="Tracks" href="Tracks" />}
            {!isMobile && isHome && <NavigationLinks title="FAQ" href="Questions" />}
            {!isMobile && isHome && <NavigationLinks title="Help" href="Help" />}
            {!isMobile && isHome && <NavigationLinks title="Sponsors" href="Sponsors" />}
            {/* Only reason why this isn't part of a class is of the CSS classes being different. DO NOT CHANGE */}
            {!isAuthenticated() && (
              <div className={Navstyles.navlistlink}>
                <a
                  href={`https://cms.citrushack.com/connect/google`}
                  className="signup"
                >
                  Sign Up
                </a>
              </div>
            )}
            {isAuthenticated() && (
              <div className={Navstyles.navlistlink}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault;
                    signOut();
                  }}
                  className="signup"
                >
                  Sign Out
                </a>
              </div>
            )}
          </div>
        </div>
      </StickyNav>
    </>
  );
}

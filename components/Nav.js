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
  // position: ${props.isHome ? "sticky" : "static"};
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  background-color: rgba(255,255,255,0.7);
  border-bottom: 4px solid #fff;
  width: 100vw;
  padding: 0;
  /* Mobile Styles */
  @media (max-width: 986px){
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
  const isMobile = useMediaQuery("(max-width:986px)");
  const [isHome, setIsHome] = useState(0);

  useEffect(()=>{
    setIsHome(router.pathname=='/');
  },[router.pathname])

  return (
    <>
      {isHome && (
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
      )}
      <StickyNav isMobile isHome={isHome}>
        <div className={Navstyles.navlistcontainer}>
          <div>
            <a href="/">
              <img
                className={Navstyles.logos}
                src={logo}
                alt="Citrushack 2021 Logo"
              />
            </a>
          </div>
          <div className={Navstyles.links}>
            {!isMobile && isHome && <NavigationLinks title="Home" href="Home" />}
            {!isMobile && !isHome && <a className="link" href="/">Home</a>}
            {!isMobile && isHome && <NavigationLinks title="About" href="About" />}
            {!isMobile && isHome && <NavigationLinks title="Tracks" href="Tracks" />}
            {!isMobile && isHome && <NavigationLinks title="Faq" href="Questions" />}
            {!isMobile && isHome && <NavigationLinks title="Help" href="Help" />}
            {!isMobile && isHome && <NavigationLinks title="Sponsors" href="Sponsors" />}
            {/* Only reason why this isn't part of a class is of the CSS classes being different. DO NOT CHANGE */}
            {!isAuthenticated() && (
              <div className={Navstyles.navlistlink}>
                <a
                  href={`http://localhost:1337/connect/google`}
                  className="signup"
                >
                  Sign Up
                </a>
              </div>
            )}
            {isAuthenticated() && (
              <div className={Navstyles.navlistlink}>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault;
                    signOut();
                    router.push("/");
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

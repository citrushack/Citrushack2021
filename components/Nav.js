import Navstyles from "../styles/Nav.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import styled from "@emotion/styled";
import { useIsAuthenticated, useSignOut } from "react-auth-kit";
import logo from "../public/logoRevised.png";
import { useRouter } from "next/router";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const StickyNav = styled.nav(
  (props) => `
  // position: ${props.isHome ? "sticky" : "static"};
  position: fixed;
  z-index: 5;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0rem 1rem;
  min-width: 100%;
  background-color: rgba(255,255,255,0.7);
  border-bottom: 4px solid #fff;
  width: 100vw;
  height: 90px;
`
);

const NavigationLinks = ({ title, href }) => (
  <>
    <li className={Navstyles.navlistlink}>
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
    </li>
  </>
);

export default function Nav() {
  const isAuthenticated = useIsAuthenticated();
  const signOut = useSignOut();
  const router = useRouter();
  const isMobile = useMediaQuery("(max-width:1280px)");
  

  return (
    <>
      {router.pathname == "/"  && (
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
      <StickyNav isMobile isHome={router.pathname == "/"}>
        <ul className={Navstyles.navlistcontainer}>
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
            {!isMobile && <NavigationLinks title="Home" href="Home" />}
            {!isMobile && <NavigationLinks title="About" href="About" />}
            {!isMobile && <NavigationLinks title="Tracks" href="Tracks" />}
            {!isMobile && <NavigationLinks title="Faq" href="Questions" />}
            {!isMobile && <NavigationLinks title="Help" href="Help" />}
            {!isMobile && <NavigationLinks title="Sponsors" href="Sponsors" />}
            {/* Only reason why this isn't part of a class is of the CSS classes being different. DO NOT CHANGE */}
            {!isAuthenticated() && (
              <li className={Navstyles.navlistlink}>
                <a
                  href={`http://localhost:1337/connect/google`}
                  className="signup"
                >
                  Sign Up
                </a>
              </li>
            )}
            {isAuthenticated() && (
              <li className={Navstyles.navlistlink}>
                <a
                  href="/"
                  onClick={(e) => {
                    e.preventDefault;
                    signOut();
                  }}
                  className="signup"
                >
                  Sign Out
                </a>
              </li>
            )}
          </div>
        </ul>
      </StickyNav>
    </>
  );
}

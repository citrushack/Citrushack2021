import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Container, { siteTitle } from "../components/Container";
import styles from "../styles/Common.module.css";
import Teamstyles from "../styles/Team.module.css";
import logo from "../public/logoRevised.png";
import { DeviceSignalWifi1BarLock } from "material-ui/svg-icons";
import Particles from "react-tsparticles";

const Profile = ({ image, link, title, position }) => {
  return (
    <div>
      <Link href={link} target="_blank" rel="noreferrer noopener">
        <a className={Teamstyles.link}>
          <div className={Teamstyles.profile}>
            <div className={Teamstyles.picture}>
              <Image
                src={image}
                alt="Profile Picture"
                width={200}
                height={200}
              />
              <h3>{title}</h3>
              <p>{position}</p>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default function Team() {
  return (
    <Container main>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: {
              value: "",
            },
            position: {
              value: "",
            },
          },
          fpsLimit: 30,
          backgroundMode: {
            enable: true,
            zIndex: -100,
          },
          interactivity: {
            detectsOn: "window",
            events: {
              resize: true,
            },
          },
          particles: {
            color: {
              value: ["#cf6f2b", "#fa9c5a", "#ffa500"],
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: false,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "top",
              enable: true,
              outMode: "out",
              random: true,
              speed: .75,
              straight: true,
            },
            number: {
              density: {
                enable: true,
                value_area: 2000,
              },
              value: 16,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "circle",
            },
            size: {
              random: true,
              value: 7,
            },
          },
          detectRetina: true,
        }}
      />
      <main className={Teamstyles.main}>
        <h1 className={Teamstyles.title}>Here's the team.</h1>
        <div className={Teamstyles.grid}>
          <Profile
            image="/TeamPictures/Danial.JPG"
            link="https://www.linkedin.com/in/danialbeg/"
            title="Danial Beg"
            position="Director"
          />
          <Profile
            image="/TeamPictures/Jonathan.jpg"
            link="https://www.linkedin.com/in/vinhtrungtrinh/"
            title="Jonathan Trinh"
            position="Director"
          />
          <Profile
            image="/TeamPictures/Mirei.JPG"
            link="https://www.linkedin.com/in/mirei-yamashiro-ab8217159/"
            title="Mirei Yamashiro"
            position="Marketing Lead"
          />
          <Profile
            image="/TeamPictures/Matthew.jpg"
            link="https://www.linkedin.com/in/mlee212/"
            title="Matthew Lee"
            position="Marketing Lead"
          />
          <Profile
            image="/TeamPictures/Rajbir.jpg"
            link="https://www.linkedin.com/in/rajbirjohar/"
            title="Rajbir Johar"
            position="Web Dev Lead"
          />
          <Profile
            image="/TeamPictures/Ajeet.png"
            link="https://www.linkedin.com/in/ajeet-kokatay-25470b195/"
            title="Ajeet Kokatay"
            position="Web Dev Lead"
          />
          <Profile
            image="/TeamPictures/Henry.JPG"
            link="https://www.linkedin.com/in/henry-zheng00/"
            title="Henry Zheng"
            position="Sponsorship Lead"
          />
          <Profile
            image="/TeamPictures/Rahul.JPG"
            link="https://www.linkedin.com/in/rahul-sohi-511505163/"
            title="Rahul Sohi"
            position="Volunteer Lead"
          />
          <Profile
            image="/TeamPictures/Saul.jpg"
            link="https://github.com/SaulGonzalez81"
            title="Saul Gonzalez"
            position="Operations Lead"
          />
        </div>
        <div className={Teamstyles.credits}>
        <div className={Teamstyles.col}>
        <h3>Committee</h3>
        <ul>
          <li>Ross Geller</li>
          <li>Rachel Green</li>
          <li>Chandler Bing</li>
          <li>Monica Geller</li>
          <li>Joey Tribbiani</li>
          <li>Phoebe Buffay</li>
        </ul>
        </div>
        <div className={Teamstyles.col}>
        <h3>Committee</h3>
        <ul>
          <li>Ross Geller</li>
          <li>Rachel Green</li>
          <li>Chandler Bing</li>
          <li>Monica Geller</li>
          <li>Joey Tribbiani</li>
          <li>Phoebe Buffay</li>
        </ul>
        </div>
        <div className={Teamstyles.col}>
        <h3>Committee</h3>
        <ul>
          <li>Ross Geller</li>
          <li>Rachel Green</li>
          <li>Chandler Bing</li>
          <li>Monica Geller</li>
          <li>Joey Tribbiani</li>
          <li>Phoebe Buffay</li>
        </ul>
        </div>
        <div className={Teamstyles.col}>
        <h3>Committee</h3>
        <ul>
          <li>Ross Geller</li>
          <li>Rachel Green</li>
          <li>Chandler Bing</li>
          <li>Monica Geller</li>
          <li>Joey Tribbiani</li>
          <li>Phoebe Buffay</li>
        </ul>
        </div>
        <div className={Teamstyles.col}>
        <h3>Committee</h3>
        <ul>
          <li>Ross Geller</li>
          <li>Rachel Green</li>
          <li>Chandler Bing</li>
          <li>Monica Geller</li>
          <li>Joey Tribbiani</li>
          <li>Phoebe Buffay</li>
        </ul>
        </div>
        <div className={Teamstyles.col}>
        <h3>Committee</h3>
        <ul>
          <li>Ross Geller</li>
          <li>Rachel Green</li>
          <li>Chandler Bing</li>
          <li>Monica Geller</li>
          <li>Joey Tribbiani</li>
          <li>Phoebe Buffay</li>
        </ul>
        </div>
        </div>
        <Link href="/">
          <a className={styles.card}>
            <h3>Back to Home&rarr;</h3>
          </a>
        </Link>
      </main>
    </Container>
  );
}

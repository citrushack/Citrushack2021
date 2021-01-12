import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { siteTitle } from "../components/Container";
import styles from "../styles/Common.module.css";
import Teamstyles from "../styles/Team.module.css";
import logo from "../public/logoRevised.png";
import { DeviceSignalWifi1BarLock } from "material-ui/svg-icons";

const Profile = ({ image, link, title, position }) => {
  return (
    <div>
      <Link href={link}>
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
    <>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
            link="https://rajbirjohar.com"
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
        </div>
        <Link href="/">
          <a className={styles.card}>
            <h3>Back to Home&rarr;</h3>
          </a>
        </Link>
      </main>
    </>
  );
}

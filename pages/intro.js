import styles from "../styles/Common.module.css";
import Introstyles from "../styles/Intro.module.css";

export default function Intro() {
  return (
    <main className={`${styles.main} ${Introstyles.background}`}>
      <section className={Introstyles.introduction}>
        <div className={Introstyles.text}>
          <h1 className={styles.title}>Largest hackathon UCR offers</h1>
          <p className={`${styles.description}`}>
            Citrus Hack is where hundreds of students from all over the world
            come together and form teams, aiming to build a project from scratch
            in just 36 hours.
            <br /><br />
            This year, Citrus Hack will be held virtually, open to undergraduate
            and high school students all around the world!
          </p>
        </div>
        <div className={Introstyles.stats}>
          <div className={`${Introstyles.infocard} ${Introstyles.one}`}>
            <h3>500+ HACKERS</h3>
          </div>

          <div className={`${Introstyles.infocard} ${Introstyles.two}`}>
            <h3>36 HOURS</h3>
          </div>
          <div className={`${Introstyles.infocard} ${Introstyles.three}`}>
            <h3>$15,000 IN PRIZES</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

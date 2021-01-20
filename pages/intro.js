import styles from "../styles/Common.module.css";
import Introstyles from "../styles/Intro.module.css";

export default function Intro() {
  return (
    <main className={styles.main}>
      <section className={Introstyles.introduction}>
        <div className={Introstyles.introductionCol}>
          <h1 className={styles.title}>Largest hackathon UCR offers</h1>
          <p className={styles.description}>
            Citrus Hack is where hundreds of students from all over Southern
            California (and now the country and world) come together and form
            teams, aiming to build a project of their own from scratch over the
            duration of 36 hours. Citrus Hack is focused on the brilliant
            partnership between education and competition.
          </p>
          <p className={styles.description}>
            This year, Cutie Hack will be held virtually, open to undergraduate
            and high school students all around the world!
          </p>
        </div>
        <div className={Introstyles.infogrid}>
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

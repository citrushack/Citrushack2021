import styles from "../styles/Common.module.css";
import Introstyles from "../styles/Intro.module.css";

export default function Intro() {
  return (
    <main className={styles.main}>
      <section className={Introstyles.introduction}>
        <div className={Introstyles.introductionCol}>
          <h1 className={styles.title}>Largest hackathon UCR offers</h1>
          <p className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            egestas sapien sit amet metus efficitur semper. Integer id luctus
            enim. Curabitur a arcu et arcu tincidunt lobortis eget sed risus.
            Suspendisse vitae libero magna. Pellentesque sodales at urna nec
            rutrum. Nulla lorem nisl, congue id aliquet vitae, malesuada sed
            lacus. Phasellus dapibus euismod leo, ut scelerisque tellus rhoncus
            sed.
          </p>
        </div>
        <div className={Introstyles.infogrid}>
          <div className={`${Introstyles.infocard} ${Introstyles.one}`}>
            <h3>$1000 IN PRIZES</h3>
          </div>

          <div className={`${Introstyles.infocard} ${Introstyles.two}`}>
            <h3>36 HOURS</h3>
          </div>
          <div className={`${Introstyles.infocard} ${Introstyles.three}`}>
            <h3>500 HACKERS</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

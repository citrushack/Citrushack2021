import Container from "../components/Container";
import Livestyles from "../styles/Live.module.css"

export default function Live() {
  return (
    <Container main>
      <div className={Livestyles.container}>
        <h1>Live Page</h1>
        <h2>00:00:00</h2>
        <h2>Judges</h2>
        <h2>Schedule</h2>
        <h2>Resources</h2>
        <h2>Sponsors</h2>
      </div>
    </Container>
  );
}

import styles from "./About.module.css";

function About() {
  return (
    <section className={styles.about} id="about">
      <div className={`container flex ${styles.aboutContainer}`}>
        <h2>About CineVault</h2>
        <p>
          Welcome to CineVault, your ultimate destination for discovering the
          best movies and series. We bring you a curated collection of
          entertainment spanning every genre, from heart-pounding action to
          thought-provoking drama. Explore our vast library, find your next
          favorite watch, and immerse yourself in the world of cinema.
        </p>
      </div>
    </section>
  );
}

export default About;

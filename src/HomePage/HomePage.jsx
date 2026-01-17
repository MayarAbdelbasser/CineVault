import styles from "./HomePage.module.css";
import About from "../About/About";
import { Link } from "react-router";

function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <div className={`container ${styles.heroContainer}`}>
          <p className={styles.heroMovieFeature}>Featured This Week</p>
          <p className={styles.heroMovieName}>The Shawshank Redemption</p>
          <p className={styles.heroMovieDescription}>
            A banker convicted of uxoricide forms a friendship over a quarter
            century with a hardened convict, while maintaining his innocence and
            trying to remain hopeful through simple compassion.
          </p>
          <Link to="/movies" className={`btn btn-primary`}>
            Explore More
          </Link>
        </div>
      </section>
      <About />
    </>
  );
}

export default Hero;

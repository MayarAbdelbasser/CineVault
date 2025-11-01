import styles from "./Hero.module.css";

function Hero() {
  //   useEffect(() => {}, []);s

  return (
    <section className={styles.hero} id="hero">
      <div className={`container ${styles.heroContainer}`}>
        <p className={styles.heroMovieFeature}>Featured This Week</p>
        <p className={styles.heroMovieName}>The Shawshank Redemption</p>
        <p className={styles.heroMovieDescription}>
          A banker convicted of uxoricide forms a friendship over a quarter
          century with a hardened convict, while maintaining his innocence and
          trying to remain hopeful through simple compassion.
        </p>
        <a href="#" className={`btn btn-primary`}>
          Watch Now
        </a>
      </div>
    </section>
  );
}

export default Hero;

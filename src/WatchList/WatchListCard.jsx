import styles from "./WatchList.module.css";

function WatchListCard(props) {
  return (
    <div className={styles.watchListCard}>
      <div className={styles.watchListCardImage}>
        <img src={props.img} alt="movie image" />
      </div>
      <div className={styles.watchListCardInfo}>
        <p className={styles.watchListCardTitle}>
          {props.title} {props.year}
        </p>
        <p className={styles.watchListCardGenre}>{props.genre}</p>
      </div>
    </div>
  );
}

export default WatchListCard;

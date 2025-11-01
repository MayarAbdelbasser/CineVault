import styles from "./WatchList.module.css";
import WatchListCard from "./WatchListCard";
import mediaList from "../../db.js";
import { useEffect, useState } from "react";

function WatchList() {
  const [watchList, setWatchList] = useState([]);

  const [filterType, setFilterType] = useState("all");

  const filteredData =
    filterType === "all"
      ? watchList
      : watchList.filter((w) => w.genre == filterType);

  useEffect(() => {
    setWatchList(mediaList);
  }, []);

  useEffect(() => {}, [filterType]);

  return (
    <section className={styles.watchList} id="watching">
      <div className={`container flex ${styles.watchListContainer}`}>
        <div className={styles.watchListFilter}>
          <label for="genre">Genre</label>
          <select
            name="genre"
            id="genre"
            onChange={(e) => setFilterType(e.target.value)}
          >
            <option value="all">All Genres</option>
            <option value="Sci-Fi">Sci-Fi</option>
            <option value="Adventure">Adventure</option>
            <option value="Drama">Drama</option>
            <option value="Fantasy">Fantasy</option>
            <option value="Crime">Crime</option>
            <option value="Comedy">Comedy</option>
            <option value="Action">Action</option>
          </select>
        </div>

        <div className={styles.watchListHolder}>
          {filteredData.map((w) => {
            return (
              <WatchListCard
                key={w.id}
                title={w.title}
                year={w.year}
                genre={w.genre}
                img={w.img}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WatchList;

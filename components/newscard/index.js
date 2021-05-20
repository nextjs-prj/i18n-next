import styles from "./NewsCard.module.css";

export default function NewsCard({ news }) {
  const { title, synopsis, imageUrl } = news;
  return (
    <div className={styles.newscard}>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={styles.newscardimg}
      ></div>
      <div className={styles.newscarddetails}>
        <div className={styles.newscardname}>
          <h3>{title}</h3>
        </div>
        <div className={styles.newscardauthor}>
          <span>{synopsis}</span>
        </div>
      </div>
    </div>
  );
}

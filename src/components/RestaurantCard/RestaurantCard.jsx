import Image from "next/image";
import styles from "./RestaurantCard.module.css";

export default function RestaurantCard() {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/restaurants/jay-wennington-N_Y88TWmGwA-unsplash.jpg"
          alt="Plat du restaurant La palette du goût"
          fill
          sizes="100vw"
          className={styles.image}
        />
        <span className={styles.badge}>Nouveau</span>
      </div>
      <div className={styles.details}>
        <div>
          <h3>La palette du goût</h3>
          <p>Ménilmontant</p>
        </div>
        <span className={styles.heart} aria-hidden="true">♡</span>
      </div>
    </article>
  );
}

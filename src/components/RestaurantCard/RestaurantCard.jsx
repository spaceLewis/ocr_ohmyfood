import Image from "next/image";
import styles from "./RestaurantCard.module.css";

export default function RestaurantCard({ restaurant }) {
  const { name, location, image, isNew } = restaurant;

  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={`Plat du restaurant ${name}`}
          fill
          sizes="100vw"
          className={styles.image}
        />
        {isNew && <span className={styles.badge}>Nouveau</span>}
      </div>
      <div className={styles.details}>
        <div>
          <h3>{name}</h3>
          <p>{location}</p>
        </div>
        <span className={styles.heart} aria-hidden="true">♡</span>
      </div>
    </article>
  );
}

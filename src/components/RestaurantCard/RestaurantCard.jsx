"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./RestaurantCard.module.css";

export default function RestaurantCard({ restaurant }) {
  const { name, location, image, isNew } = restaurant;
  const [isLiked, setIsLiked] = useState(false); // Booléen pour suivre si le restaurant est aimé ou non, isLiked est l'état actuel à false par défaut, setIsLiked permet de le mettre à jour

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
        <button
          type="button"
          className={styles.heart}
          onClick={() => setIsLiked(!isLiked)}
        >
          <Image
            src={isLiked ? "/icons/like_ok.svg" : "/icons/like_nok.svg"}
            alt={isLiked ? "Restaurant liké" : "Restaurant non liké"}
            width={22}
            height={21}
          />
        </button>
      </div>
    </article>
  );
}

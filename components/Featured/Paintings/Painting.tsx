import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
// styles
import styles from "../../../styles/css/featured_paintings_painting.module.css";

const Painting: FC<{ src: string; id: number }> = ({ src, id }) => {
  return (
    <Link href={`/paintings/${id}`} className={styles.painting_container}>
      <div className={styles.image_container}>
        <Image
          src={src}
          fill
          style={{ objectFit: "contain", objectPosition: "center" }}
          alt="featured painting"
          quality={45}
        />
      </div>
      <p className={styles.painting_name}>Wallowing Breeze</p>
      <p className={styles.artist_name}>Pablo Picasso</p>
    </Link>
  );
};

export default Painting;

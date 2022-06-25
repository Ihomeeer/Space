import styles from './Card.module.css';
import React, { FC } from "react";

type TCard = {
  item: {
    text: string,
    image: string,
    link: string,
    title: string
  }
}

export const Card: FC<TCard> = ({ item }) => {
  return (
    <>
      <div className={styles.card}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.mainText}>{item.text}</p>
        <img className={styles.image} src={item.image} alt="Иллюстрация туманности"/>
        <a className={styles.link} href={item.link}>Источник</a>
      </div>
    </>
  )
}
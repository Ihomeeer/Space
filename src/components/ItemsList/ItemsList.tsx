import React, { FC } from "react";
import styles from './ItemsList.module.css';
import { Card } from '../Card/Card';
import { TData } from '../../utils/data';

type TItemsList = {
  data: TData,
  title: string
}

export const ItemsList: FC<TItemsList> = ({ data, title }) => {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>{title}</h2>
      <ul className={styles.list}>
        {
          data.map((dataItem) => {
            return (
              <li className={styles.listItem} key={dataItem.link}>
                <Card
                item = {dataItem}
                />
              </li>
            )
          })
        }
      </ul>
    </section>
  )
}
import React from 'react';
import styles from './App.module.css';
import { darkNebulaItems, planetaryNebulaItems } from '../../utils/data';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';
import { Header } from '../Header/Header';
import { Card } from '../Card/Card';
import { ItemsList } from '../ItemsList/ItemsList';


function App() {
  return (
    <div className={styles.app}>
      <Header />
      {/* <LoadingScreen /> */}
      <ItemsList
        data={darkNebulaItems}
        title="Темные туманности"
      />
      <ItemsList
        data={planetaryNebulaItems}
        title="Планетарные туманности"
      />
    </div>
  );
}

export default App;

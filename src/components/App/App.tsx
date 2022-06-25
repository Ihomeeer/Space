import React from 'react';
import styles from './App.module.css';
import { darkNebulaItems } from '../../utils/data';
import { LoadingScreen } from '../LoadingScreen/LoadingScreen';
import { Header } from '../Header/Header';
import { Card } from '../Card/Card';


function App() {
  return (
    <div className={styles.app}>
      <Header />
      {/* <LoadingScreen /> */}
      <Card
        item={darkNebulaItems[2]}

      />
    </div>
  );
}

export default App;

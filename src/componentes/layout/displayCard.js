import React from 'react';
import styles from './styles/displayCard.module.css'; 
import Card from './card';

function DisplayCard() {
  return (
    <div className={styles.Display}>
        <Card className={styles.Card} produto="oi"/>
        <Card className={styles.Card} produto="oi"/>
        <Card className={styles.Card} produto="oi"/>
        <Card className={styles.Card} produto="oi"/>
        <Card className={styles.Card} produto="oi"/>
        <Card className={styles.Card} produto="oi"/>
        <Card className={styles.Card} produto="oi"/>
    </div>
  );
}

export default DisplayCard;

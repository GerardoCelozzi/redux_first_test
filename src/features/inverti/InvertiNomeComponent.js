
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
/**importo il reducer dal modulo e destrutturo il modulo straendo la action del reducer piu i metodi aggiuntivi per i selector */
import {
  marco,
  change,
  incrementByAmount,
  incrementAsync,
  leggiNome,
  leggiMarco
} from './invertiNome';
import styles from '../counter/Counter.module.css';

export function InvertiNomeComponent() {
    const nome = useSelector(leggiNome);
    const m=useSelector(leggiMarco)
    
  const dispatch = useDispatch();
  return(
    <>
        <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(change())}
        >
          alterna nome
        </button>
        <span className={styles.value}>{nome}</span>
      
    </div>
    <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(marco())}
        >
          vedrai{m==='marco'?' michele':' marco'}
        </button>
        <span className={styles.value}>{m}</span>
        </div>
    </>
  )
}


import React from 'react';
import { TailSpin } from 'react-loader-spinner';
import styles from './Loader.module.css';

const Loader = () => {
    return (
        <div className={styles.loader}>
            <TailSpin color="#84112e" height={80} width={80} />
        </div>
    );
}
export default Loader;

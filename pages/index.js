import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';

export default function Home() {
    const [ethPrice, setEthPrice] = useState(null);

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd');
                const data = await res.json();
                setEthPrice(data.ethereum.usd);
            } catch (error) {
                console.error('Failed to fetch Ethereum price:', error);
            }
        };

        fetchPrice();
    }, []);

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Current Ethereum Price</h1>
            {ethPrice !== null ? (
                <div className={styles.price}>${ethPrice}</div>
            ) : (
                <div className={styles.loading}>Loading...</div>
            )}
        </div>
    );
}

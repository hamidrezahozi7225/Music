import React from 'react';
import styles from './mostPlay.module.css';
import { useRouter } from 'next/router';

const MostPlay = ({ name, artist, FT, id }: string | any) => {
  const router = useRouter();

  const clickHandler = (ids: number) => {
    router.push(`/${ids}`);
    console.log('id', ids);
  };
  return (
    <div className={styles.container} onClick={() => clickHandler(id)}>
      <img src='/images/rap.png' />
      <h2>{name}</h2>
      <div>
        <p>
          <span>{artist}</span> ft {FT}
        </p>
      </div>
    </div>
  );
};

export default MostPlay;

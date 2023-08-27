import React, { useContext } from 'react';
import styles from './track.module.css';
import AlbumPlay from '../module/albumPlay';
import MostPlay from '../module/mostPlay';
import { contextProvider } from '../context/context';

const Track = ({ track }: object | any) => {
  const { value, setValue }: object | any = useContext(contextProvider);
  setValue({
    ...value,
    tracklng: track.length,
  });
  return (
    <>
      <div className={styles.container}>
        <h1>Tracks</h1>
      </div>
      <div className={styles.album}>
        {track.map((music: Object | any) => (
          <MostPlay {...music} key={music.id} />
        ))}
      </div>
    </>
  );
};

export default Track;

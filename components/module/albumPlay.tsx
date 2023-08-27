import React from 'react';
import styles from './mostPlay.module.css';
import { useRouter } from 'next/router';

const AlbumPlay = ({
  name,
  artist,
  FT,
  id,
  albumId,
}: string | Number | any) => {
  const router = useRouter();

  const clickHandler = (albumId: Number, ids: number) => {
    router.push(`/albums/${albumId}/${ids}`);
    console.log('id', ids);
  };
  return (
    <div className={styles.container} onClick={() => clickHandler(albumId, id)}>
      <img src={`/images/${albumId}.jpg`} />
      <h2>{name}</h2>
      <div>
        <p>
          <span>{artist}</span> ft {FT}
        </p>
      </div>
    </div>
  );
};

export default AlbumPlay;

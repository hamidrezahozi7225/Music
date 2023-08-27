import React from 'react';
import MostPlay from '../module/mostPlay';
import styles from './album.module.css';
import AlbumPlay from '../module/albumPlay';

const Album = ({ albumData }: object | any) => {
  const { tracks, name, id } = albumData;
  console.log(albumData);

  return (
    <>
      <div className={styles.container}>
        <h1>{name}</h1>
      </div>
      <div className={styles.album}>
        {tracks.map((track: Object | any) => (
          <AlbumPlay {...track} key={track.id} albumId={id} />
        ))}
      </div>
    </>
  );
};

export default Album;

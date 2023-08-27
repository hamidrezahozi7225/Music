import MostPlay from '../module/mostPlay';
import styles from './home.module.css';
import { albums } from '../data/constans';
import { contextProvider } from '../context/context';

import { useContext, useState } from 'react';
import ModalContent from '../module/modalContent';
import { useRouter } from 'next/router';

const HomePage = ({ data }: object[] | any) => {
  const { value, setValue }: object | any = useContext(contextProvider);
  setValue({
    ...value,
    tracklng: data.length,
  });

  const router = useRouter();

  const albumHandler = (id: Number) => {
    router.push(`/albums/${id}`);
  };

  return (
    <div className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <img src='/images/rap.png' width='500px' />
        </div>
        <div className={styles.headerText}>
          <p>
            Rap music is characterized by its use of beats and spoken lyrics,
            often accompanied by a musical track or DJ scratching vinyl records.
            The lyrics in rap songs often address issues like social injustice,
            poverty, and racism, as well as personal experiences like love,
            loss, and struggle.
          </p>
          <div className={styles.remove}></div>
        </div>
      </div>
      <div className={styles.albums}>
        <h1>Albums</h1>
        <div className={styles.albumsTrack}>
          {albums.map((album: object[] | any) => (
            <div key={album.id} onClick={() => albumHandler(album.id)}>
              <img src={album.src} width='200px' />
              <h3>{album.name}</h3>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.track}>
        <h1>Most Play Track</h1>
        <div>
          {data.map((music: Object | any) => (
            <MostPlay {...music} key={music.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import axios from 'axios';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';
import React from 'react';
import AudioPlayer from '../../../components/module/audioPlayer';

const AlbumPlays = ({ albumTrack, albumlngth }: object | Number | any) => {
  const router = useRouter();
  const {
    query: { slug },
  } = router;
  console.log('router', slug);

  return (
    <div>
      <AudioPlayer {...albumTrack} slug={slug} albumlngth={albumlngth} />
    </div>
  );
};

export default AlbumPlays;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { slug },
  } = context;
  if (slug) {
    const res = await axios.get(`http://localhost:4001/albums/${slug[0]}`);
    const data = await res.data;

    const albumTrack = data.tracks[+slug[1] - 1];

    console.log(albumTrack);
    return {
      props: {
        albumTrack: albumTrack,
        albumlngth: data.tracks.length,
      },
    };
  } else {
    return {
      props: {},
    };
  }
};

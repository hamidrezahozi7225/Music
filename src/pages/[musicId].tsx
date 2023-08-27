import { GetServerSideProps } from 'next';
import axios from 'axios';
import React from 'react';
import AudioPlayer from '../../components/module/audioPlayer';

const MusicId = ({ data }: object | any) => {
  return (
    <div className='text-blue-500'>
      <AudioPlayer {...data} />
    </div>
  );
};

export default MusicId;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {
    query: { musicId },
  } = context;

  const res = await axios.get(`http://localhost:4001/track/${musicId}`);
  const data = await res.data;

  return {
    props: { data },
  };
};

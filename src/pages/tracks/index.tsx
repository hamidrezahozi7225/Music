import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Track from '../../../components/template/track';

const Tracks = ({ data }: object[] | any) => {
  console.log(data);

  return (
    <div>
      <Track track={data} />
    </div>
  );
};

export default Tracks;

export const getStaticProps: GetStaticProps = async (context) => {
  const res = await axios.get('http://localhost:4001/track');
  const data = await res.data;

  return {
    props: {
      data,
    },
    revalidate: 1 * 24 * 60 * 60,
  };
};

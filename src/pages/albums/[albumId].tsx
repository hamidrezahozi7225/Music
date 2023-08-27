import axios from 'axios';
import { GetStaticPaths, GetStaticProps } from 'next';
import React from 'react';
import Album from '../../../components/template/album';

const Albums = ({ data }: object[] | any) => {
  console.log('data', data);

  return (
    <div>
      <Album albumData={data} />
    </div>
  );
};

export default Albums;

export const getStaticPaths: GetStaticPaths = async () => {
  //     const { params } = context;

  const res = await axios.get(`http://localhost:4001/albums`);
  const data = await res.data;

  const paths = data.map((item: any) => ({
    params: { albumId: item.id.toString() },
  }));
  return {
    paths,
    fallback: true, // false or "blocking"
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  const res = await axios.get(
    `http://localhost:4001/albums/${params?.albumId}`
  );
  const data = await res.data;

  return {
    props: {
      data,
    },
  };
};

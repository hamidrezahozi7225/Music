import HomePage from '../../components/template/home';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';
import axios from 'axios';

interface propsType {
  id: number;
  name: string;
  src: string;
  artist: string;
  FT: string;
}

export default function Home(props: object) {
  const { data }: propsType[] | any = props;

  return (
    <>
      <div className='text-black '>
        <HomePage data={data} />
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await axios.get('http://localhost:4001/track');
  const data = await res.data;

  const bestTrack = data.slice(0, 4);

  return {
    props: { data: bestTrack },
  };
};

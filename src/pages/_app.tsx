import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import Layout from '../../components/layout/layout';
import Context from '../../components/context/context';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Context>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Context>
  );
}

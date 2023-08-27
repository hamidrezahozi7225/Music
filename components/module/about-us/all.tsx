import React from 'react';
import styles from './homeAbout.module.css';

const All = () => {
  return (
    <div className={styles.container}>
      <p>در این پروژه تمام مفاهیم </p>
      <p> getServerSideProps ، getStaticProps & revalidate ، getStaticPaths</p>
      <p>پوشش داده شده است.</p>
      <p>همچنین تمام مفاهیم routes اعمم از </p>
      <p>slug page(catch all routes) & dynamic Routes پوشش داده شده است</p>
    </div>
  );
};

export default All;

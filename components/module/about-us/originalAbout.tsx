import React from 'react';
import styles from './homeAbout.module.css';

const OriginalAbout = () => {
  return (
    <div className={styles.container}>
      <p>صفحه ی اصلی پروژه به صورت SSR زده شده است </p>
      <p>
        دلیل انتخاب آن این است که هر دفعه بیشترین اهنگ شنیده شده تغییر میکند{' '}
      </p>
    </div>
  );
};

export default OriginalAbout;

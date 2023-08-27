import React from 'react';
import styles from './homeAbout.module.css';

const AlbmAbout = () => {
  return (
    <div className={styles.container}>
      <p>صفحه ی البوم ها به صورت SSG زده شده است </p>
      <p>دلیل انتخاب آن این است که دیتای آلبوم ثابت است و تغییر نمیکند </p>
      <p>همچنین ما از slug page هم استفاده کردیم</p>
    </div>
  );
};

export default AlbmAbout;

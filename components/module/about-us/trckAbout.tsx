import React from 'react';
import styles from './homeAbout.module.css';

const TrckAbout = () => {
  return (
    <div className={styles.container}>
      <p>صفحه ی اهنگ ها به صورت ISR زده شده است </p>
      <p>
        دلیل انتخاب آن این است که هر یک روز ممکن است اهنگ جدید به پایگاه داده
        اضافه شود{' '}
      </p>
      <p>و باید کاربر هرروز دیتای جدید را بگیرد</p>
    </div>
  );
};

export default TrckAbout;

import Link from 'next/link';
import React, { Component, FC, useState } from 'react';
import styles from './layout.module.css';
import { Modal } from 'antd';
import ModalContent from '../module/modalContent';
import { useRouter } from 'next/router';

const Layout = ({ children }: Component | any) => {
  const [close, setClose] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [value, setValue] = useState(1);
  const router = useRouter();

  const handleClick = () => {
    setClose(!close);
    setMobile(!mobile);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    console.log(value);
    router.push(`/albums/${value}`);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.container}>
      <div className={mobile ? styles.headerMobile : styles.header}>
        <header>
          <div className={styles.list}>
            <ul>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/tracks'>Tracks</Link>
              </li>
              <li onClick={showModal}>
                <a>Albums</a>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
            </ul>
          </div>
          <Modal
            title='Albums'
            open={isModalOpen}
            onOk={handleOk}
            onCancel={handleCancel}
          >
            <ModalContent value={value} setValue={setValue} />
          </Modal>
        </header>
      </div>
      {close && (
        <div onClick={handleClick} className={styles.mobileDisplaye}>
          <img src='/images/close.png' />
        </div>
      )}
      {!close && (
        <div onClick={handleClick} className={styles.hamburger}>
          <img src='/images/hamburger.png' />
        </div>
      )}
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default Layout;

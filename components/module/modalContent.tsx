import React, { useState } from 'react';
import { Input, Radio, Space } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { albums } from '../data/constans';

const ModalContent = ({ value, setValue }: any) => {
  const onChange = (e: RadioChangeEvent) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <Space direction='vertical'>
        {albums.map((album: object[] | any) => (
          <div key={album.id}>
            <Radio value={album.id}>{album.name}</Radio>
          </div>
        ))}
      </Space>
    </Radio.Group>
  );
};

export default ModalContent;

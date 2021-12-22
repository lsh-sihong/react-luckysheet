import React, { useRef } from 'react';
import { Button } from 'antd'
import ReactLuckysheet from '../ReactLuckysheet';
import 'antd/dist/antd.css';

export default () => {

  const instance1 = useRef()
  const instance2 = useRef()
  console.log(instance1.current, instance2)
  return <>
    <div style={{ display: 'flex' }}>
      <div style={{ width: '50%' }}>
        <ReactLuckysheet style={{ height: 700 }} id="sheet1" />

      </div>
      <div style={{ width: '50%' }}>

        <ReactLuckysheet style={{ height: 700 }} id="sheet2" ref={instance2} options={{
          allowCopy:false
        }}/>
      </div>
    </div>
    <Button type="primary" onClick={() => {
      console.log(instance2.current.getAllSheets())
    }}>点击</Button>
  </>;
};

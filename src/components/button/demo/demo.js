import React from 'react';
import Button from '../button';
import './demo.css';
import { MdError } from 'react-icons/lib/md';

const Demo = () => {
  return (
    <div className="btn-container">
      <Button className="btn" type="primary">primary button</Button>
      <Button className="btn" type="ghost" onClick={() => { console.log('clicked') }}>幽灵按钮</Button>
      <Button className="btn" disabled>禁用状态</Button>
      <Button className="btn" style={{ "margin-right": "0.08rem" }} inline><MdError style={{ "margin-right": "10px" }} /> inline</Button>
      <Button className="btn" style={{ "margin-right": "0.08rem" }} inline size="small" type="primary">inline small</Button>
    </div>
  );
};

export default Demo;
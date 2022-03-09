import React from 'react';
import './OverModal.scss';
import BackDroup from '../BackDroup/BackDroup';

const OverModal = ({ children, cl = 'left' }) => {
  return (
    <>
      <BackDroup />
      <div className={'overmodal ' + cl}>
        {children}
      </div>
    </>
  );
};

export default OverModal;
import React from 'react';
import './OverModal.scss';
import BackDroup from '../BackDroup/BackDroup';
import { useSpring, animated } from 'react-spring';

const OverModal = ({ children, cl }) => {
  const stylesRight = useSpring({ to: { right: '0' }, from: { right: '-100%' } })
  const stylesLeft =  useSpring({ to: { left: '0' }, from: { left: '-100%' } })


  return (
    <>
      <BackDroup />
      <div className={'overmodal-in ' + cl}>
        <animated.div style={cl === 'right' ? stylesRight: stylesLeft} className={'overmodal'}>
          {children}
        </animated.div>
      </div>
    </>
  );
};

export default OverModal;
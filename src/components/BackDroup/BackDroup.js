import React from 'react';
import './BackDroup.scss';
import { useDispatch } from 'react-redux';
import { chengeModal } from '../../store/homeSlice';

const BackDroup = () => {
  const dispatch = useDispatch((state)=> state.overmodal)
  const closeModal = () => {
    dispatch(chengeModal(false))
  }
  return <div onClick={closeModal} className='back-doup'/>
};

export default BackDroup;
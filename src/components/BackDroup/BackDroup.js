import React from 'react';
import './BackDroup.scss';
import { useDispatch } from 'react-redux';
import { chengeFalsey,chengeTrusy } from '../../store/homeSlice';


const BackDroup = () => {
  const dispatch = useDispatch()
  const closeModal = () => {
    dispatch(chengeFalsey({mod:'overmodal'}));
    dispatch(chengeTrusy({mod:'loginModal'}));
    dispatch(chengeFalsey({mod:'openCard'}));
    // dispatch(openModalChange(false));openCard
    document.body.style.overflow = "auto";
  }
  return <div onClick={closeModal} className='back-doup'/>
};

export default BackDroup;
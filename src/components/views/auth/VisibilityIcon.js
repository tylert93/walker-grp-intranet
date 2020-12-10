import React from 'react';
import UseAnimations from 'react-useanimations';
import Visibility from 'react-useanimations/lib/visibility';

const VisibilityIcon = ({hidePass, setHidePass}) => {

  const clicked = () => {
    setHidePass(!(hidePass))
  }
  
  return (
    
      <UseAnimations
        reverse={hidePass}
        onClick={() => {clicked();}}
        size={30}
        animation={Visibility}
        strokeColor="#a0b2bd"
      />
    
  )
}

export default VisibilityIcon
import React from 'react'
import PropTypes from 'prop-types'
// import { useEffect } from 'react';

const Hamlet = props => {

    document.title = 'alishop - ' + props.title;

    // useEffect(() => {
    //   window.scrollTo(0, 0);
    // }, [input]);
    
    

  return (
    <div>
        {props.children}
    </div>
  )
}

Hamlet.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Hamlet
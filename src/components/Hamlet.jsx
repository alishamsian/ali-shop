import React from 'react'
import PropTypes from 'prop-types'

const Hamlet = props => {

    document.title = 'alishop - ' + props.title;

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
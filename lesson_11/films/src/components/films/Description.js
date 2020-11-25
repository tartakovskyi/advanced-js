import React, {useContext} from 'react'
import PropTypes from 'prop-types'

const Description = ({description, descrOpen}) => {
    const cls = 'film-description' + (descrOpen ? ' open' : '');
    return (
<div className={cls}>
<p>{description}</p>
</div>
    )
}


Description.propTypes = {
    description: PropTypes.string.isRequired,
}

export default Description

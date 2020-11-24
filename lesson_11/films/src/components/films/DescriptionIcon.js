import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {AppContext} from '../App'

const DescriptionIcon = ({description, id}) => {
    const {toggleDescription} = useContext(AppContext)
    const cls = description ? 'icon eye slash' : 'icon eye'

    return (
        <i className={cls} onClick={() => toggleDescription(id)} />
    )
}


DescriptionIcon.propTypes = {
    description: PropTypes.bool.isRequired,
}

export default DescriptionIcon

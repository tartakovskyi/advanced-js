import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import {AppContext} from '../App'

const DescrOpen = ({descrOpen, id}) => {
    const {toggleDescription} = useContext(AppContext)
    const cls = 'icon eye' + (descrOpen ? ' slash' : '');

    return (
        <i className={cls} onClick={() => toggleDescription(id)} />
    )
}


DescrOpen.propTypes = {
    descrOpen: PropTypes.bool.isRequired,
}

export default DescrOpen

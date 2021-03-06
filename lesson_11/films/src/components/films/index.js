import React from 'react'
import PropTypes from 'prop-types'
import FilmCard from './FilmCard'
import Message from '../Message'
import './films.css';

const FilmsList = ({films}) => (
    <div className='ui four cards'>
        {films.length === 0 ? (
            <Message msg='No films in our base yet' type='star outline'/>
        ): (
            films.map(film => (<FilmCard key={film._id} film={film} />))
        )}
    </div>
)

FilmsList.propTypes = {
    films: PropTypes.arrayOf(PropTypes.object).isRequired,
}

FilmsList.defaultProps = {
    films: [],
}

export default FilmsList

import React from "react"
import PropTypes from 'prop-types'
import Featured from './Featured'
import Description from './Description'
import DescrOpen from './DescrOpen'

const FilmCard = ({film}) => (
        <div className="ui card">
            <span className="ui right corner label">
              <i className="empty star icon" />
            </span>
            <div className="image">
                <span className="ui green label ribbon">$ {film?.price} </span>
                <Featured featured={film.featured} id={film._id} />
                <Description description={film.description} descrOpen={film.descrOpen} />
                <img src={film?.img} alt={film?.title} />
            </div>

            <div className="content">
                <span href="#" className="header">
                    {film?.title}
                </span>
                <div className="meta">
                    <i className="icon users" /> {film?.director}
                    <span className="right floated">
                        <i className="icon wait right" />
                            {film?.duration} min
                    </span>
                </div>
                <div className="meta">
                    <DescrOpen descrOpen={film.descrOpen} id={film._id} />
                </div>
            </div>
        </div>
)

FilmCard.proptTypes = {
    film: PropTypes.shape({
        title: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
        duration: PropTypes.number.isRequired,
        price: PropTypes.number.isRequired,
        featured: PropTypes.bool.isRequired,
        descrOpen: PropTypes.bool.isRequired,
    })
}

export default React.memo(FilmCard)
